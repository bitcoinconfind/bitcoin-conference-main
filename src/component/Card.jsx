// Card.jsx
import Swal from "sweetalert2";
import Button from "./Button";
import bitLogo from "../assets/imgs/logo/BitcoinLogo.svg";
import "sweetalert2/dist/sweetalert2.min.css";

const Card = ({ title, price, currency = "USD", buttonLabel, features, onBuy }) => {
  return (
    <div className="h-full">
      <div
        className="bg-[#1F1F1F] rounded-4xl p-8 shadow-lg h-full flex flex-col 
        hover:shadow-2xl hover:bg-gradient-to-b from-[#1B1A17] to-[#2B2A25] 
        transition-all ease-in-out duration-300"
      >
        {/* Title Section */}
        <div className="mb-6">
          <div className="space-y-3 py-5">
            <h1 className="text-white text-3xl font-familjen sm:text-4xl md:text-4xl font-bold">
              {title}
            </h1>
            <h2 className="text-gray-500 font-familjen sm:text-2xl md:text-3xl font-bold mb-4">
              <span className="font-bold text-white sm:text-2xl md:text-4xl">
                ${price}
              </span>{" "}
              {currency}
            </h2>
          </div>
          <Button
            label={buttonLabel}
            className="w-full"
            onClick={() => {
              if (typeof onBuy === "function") {
                onBuy({ title, price, currency });
                return;
              }
              Swal.fire({
                text: "Comming Soon!!",
                timer: 2000,
              });
            }}
          />
        </div>

        {/* Features List */}
        <div className="space-y-5 flex-grow">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <img src={bitLogo} className="h-5 w-5" />
              <p className="text-[#FFFFFF66]  font-inter font-semibold text-md">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
