import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
// Minimal SEO injection plugin: reads src/seo.config.json and injects into index.html
function seoInjectionPlugin() {
  return {
    name: 'seo-injection-plugin',
    transformIndexHtml(html) {
      try {
        const configPath = path.resolve(process.cwd(), 'src/seo.config.json')
        if (!fs.existsSync(configPath)) return html
        const raw = fs.readFileSync(configPath, 'utf-8')
        const seo = JSON.parse(raw)

        let out = html

        if (seo.title) {
          out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${seo.title}</title>`)
        }
        if (seo.description) {
          if (out.match(/<meta name="description"[^>]*>/)) {
            out = out.replace(/<meta name=\"description\"[^>]*>/, `<meta name="description" content="${seo.description}">`)
          } else {
            out = out.replace('</head>', `  <meta name="description" content="${seo.description}">\n    </head>`)
          }
        }

        // Replace hreflang block if provided
        if (Array.isArray(seo.hreflangs) && seo.hreflangs.length > 0) {
          // Remove existing alternate links
          out = out.replace(/\n\s*<link rel=\"alternate\"[^>]*>\s*/g, '\n')
          const canonical = seo.canonical || 'https://bitcoinconferenceindia.com'
          const altLinks = seo.hreflangs.map(h => `    <link rel="alternate" hreflang="${h.lang}" href="${h.href || canonical}" />`).join('\n')
          out = out.replace('</head>', `${altLinks}\n    </head>`)
        }

        // Open Graph updates
        if (seo.og) {
          if (seo.og.title) out = replaceOrInsertMeta(out, 'property', 'og:title', seo.og.title)
          if (seo.og.description) out = replaceOrInsertMeta(out, 'property', 'og:description', seo.og.description)
          if (seo.og.url) out = replaceOrInsertMeta(out, 'property', 'og:url', seo.og.url)
          if (seo.og.image) out = replaceOrInsertMeta(out, 'property', 'og:image', seo.og.image)
        }

        // Twitter updates
        if (seo.twitter) {
          if (seo.twitter.title) out = replaceOrInsertMeta(out, 'name', 'twitter:title', seo.twitter.title)
          if (seo.twitter.description) out = replaceOrInsertMeta(out, 'name', 'twitter:description', seo.twitter.description)
          if (seo.twitter.image) out = replaceOrInsertMeta(out, 'name', 'twitter:image', seo.twitter.image)
        }

        return out
      } catch (e) {
        return html
      }
    }
  }
}

function replaceOrInsertMeta(html, attr, key, value) {
  const regex = new RegExp(`<meta ${attr}=\\"${key}\\"[^>]*>`) // eslint-disable-line
  const tag = `<meta ${attr}="${key}" content="${value}">`
  if (html.match(regex)) return html.replace(regex, tag)
  return html.replace('</head>', `  ${tag}\n    </head>`)
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seoInjectionPlugin()],
  server: {
    host: true,
    proxy: {
      '/api': {
        target: process.env.API_PROXY_TARGET || 'http://127.0.0.1:8787',
        changeOrigin: true,
      },
    },
  },
})
