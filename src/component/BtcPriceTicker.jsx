import React, { useState, useEffect } from 'react';
import { BiTrendingUp, BiTrendingDown } from 'react-icons/bi';

const btcLogo = "/assets/imgs/logo/bitcoinwala.png";

const BtcPriceTicker = () => {
  const [btcData, setBtcData] = useState({
    price: null,
    changePercent24h: null,
    loading: true,
    error: false
  });

  useEffect(() => {
    const fetchBtcPrice = async () => {
      // API 1: CoinGecko
      try {
        console.log('1. Trying CoinGecko API...');
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true',
          {
            headers: { 'Accept': 'application/json' }
          }
        );

        if (!response.ok) throw new Error(`CoinGecko failed: ${response.status}`);

        const data = await response.json();
        if (data.bitcoin) {
          setBtcData({
            price: data.bitcoin.usd,
            changePercent24h: data.bitcoin.usd_24h_change,
            loading: false,
            error: false
          });
          console.log('✓ CoinGecko successful:', data.bitcoin.usd);
          return; // Success, exit early
        }
      } catch (error) {
        console.warn('✗ CoinGecko failed:', error.message);
      }

      // API 2: Coinbase
      try {
        console.log('2. Trying Coinbase API...');
        const response = await fetch('https://api.coinbase.com/v2/prices/BTC-USD/spot');
        const data = await response.json();

        if (data.data && data.data.amount) {
          setBtcData({
            price: parseFloat(data.data.amount),
            changePercent24h: null,
            loading: false,
            error: false
          });
          console.log('✓ Coinbase successful:', data.data.amount);
          return; // Success, exit early
        }
      } catch (error) {
        console.warn('✗ Coinbase failed:', error.message);
      }

      // API 3: Blockchain.info
      try {
        console.log('3. Trying Blockchain.info API...');
        const response = await fetch('https://blockchain.info/ticker');
        const data = await response.json();

        if (data.USD && data.USD.last) {
          setBtcData({
            price: data.USD.last,
            changePercent24h: null,
            loading: false,
            error: false
          });
          console.log('✓ Blockchain.info successful:', data.USD.last);
          return; // Success, exit early
        }
      } catch (error) {
        console.warn('✗ Blockchain.info failed:', error.message);
      }

      // API 4: Binance
      try {
        console.log('4. Trying Binance API...');
        const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
        const data = await response.json();

        if (data.price) {
          setBtcData({
            price: parseFloat(data.price),
            changePercent24h: null,
            loading: false,
            error: false
          });
          console.log('✓ Binance successful:', data.price);
          return; // Success, exit early
        }
      } catch (error) {
        console.warn('✗ Binance failed:', error.message);
      }

      // API 5: Kraken
      try {
        console.log('5. Trying Kraken API...');
        const response = await fetch('https://api.kraken.com/0/public/Ticker?pair=XBTUSD');
        const data = await response.json();

        if (data.result && data.result.XXBTZUSD && data.result.XXBTZUSD.c) {
          setBtcData({
            price: parseFloat(data.result.XXBTZUSD.c[0]),
            changePercent24h: null,
            loading: false,
            error: false
          });
          console.log('✓ Kraken successful:', data.result.XXBTZUSD.c[0]);
          return; // Success, exit early
        }
      } catch (error) {
        console.warn('✗ Kraken failed:', error.message);
      }

      // All APIs failed
      console.error('✗ All APIs failed to fetch BTC price');
      setBtcData(prev => ({ ...prev, loading: false }));
    };

    // Initial fetch
    fetchBtcPrice();

    // Update every 60 seconds
    const interval = setInterval(fetchBtcPrice, 60000);

    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price) => {
    if (!price) return '---';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const formatChange = (change) => {
    if (change === null || change === undefined) return '---';
    const sign = change >= 0 ? '+' : '';
    return `${sign}${change.toFixed(2)}%`;
  };

  const isPositive = btcData.changePercent24h >= 0;

  return (
    <div className="bg-black transition-all duration-700 ease-out">
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-3">
          {/* Bitcoin Logo */}
          <div className="flex items-center">
            <img
              src={btcLogo}
              alt="Bitcoin"
              className="h-32 w-auto md:h-40 lg:h-48 -mr-25"
            />
            <span className="text-white font-semibold text-lg md:text-xl lg:text-2xl">
              <span className="text-[#FF8C00]">BTC</span>/USD
            </span>
          </div>

          {/* Price Display */}
          <div className="flex items-center ml-3 md:ml-4">
            {btcData.loading ? (
              <div className="h-6 w-20 md:w-24 bg-[#2a2a2a] animate-pulse rounded"></div>
            ) : (
              <span className="text-[#FFBF00] font-bold text-base md:text-lg lg:text-xl">
                {formatPrice(btcData.price)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BtcPriceTicker;
