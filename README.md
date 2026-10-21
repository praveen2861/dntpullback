# DON'T PULL BACK

A sarcastic, unofficial Pullback holder prayer room. Includes a prayer popup, a session prayer counter, rotating cope quotes, and responsive layouts.

## Run locally

Requires Node.js 20 or newer. No dependencies or installation needed.

```sh
npm run check
npm run build
npm start
```

Open http://127.0.0.1:4173. Set `PORT` and optionally `HOST` to change the server address; the default host is `127.0.0.1`.

## Files and deployment

- Edit `src/index.html`, `src/style.css`, and `src/app.js`.
- `npm run build` checks JavaScript syntax and local HTML asset references, then copies the site into `dist/`.
- For static hosting, use `npm run build` as the build command and `dist` as the output directory.
- The optional Node preview server serves `dist/`.

### Vercel

The committed `vercel.json` selects the Other framework preset, runs `npm run build`, and publishes `dist/` as static files. The preview server lives in `scripts/serve.cjs` to avoid detection as a production Node application. No serverless function is needed.

Fonts load from Google Fonts; system fallback fonts are provided. All interactions run locally in the visitor's browser. The chart is an illustration, and the site has no wallet connection, transactions, or live market data.

This project is unaffiliated with Pullback. The original project is https://pullback.cards/.
