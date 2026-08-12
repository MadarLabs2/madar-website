# MADAR Website

Premium multi-page digital agency website for **MADAR (مدار)** — React frontend + Node.js/Express backend, with English, Arabic, and Hebrew.

## Stack

- **Frontend:** React (Vite), React Router, Framer Motion, i18next
- **Backend:** Node.js, Express, Helmet, CORS, rate limiting, validation

## Quick start

```bash
npm run install:all
npm run dev
```

- Site: http://localhost:5173  
- API: http://localhost:5001  

Or run separately:

```bash
npm run dev:client
npm run dev:server
```

## Environment

Copy `server/.env.example` to `server/.env`.

Optional client variable:

```bash
# client/.env
VITE_API_URL=http://localhost:5001
```

When empty, the Vite dev proxy forwards `/api` to the server.

## Routes

`/`, `/about`, `/services`, `/services/:slug`, `/projects`, `/project/:id`, `/process`, `/contact`, `/faq`, `/privacy-policy`, `/terms`

## API

- `POST /api/contact`
- `GET /api/projects`
- `GET /api/projects/:id`
- `GET /api/services`
- `GET /api/services/:slug`
- `GET /api/faq`
- `GET /api/health`

## Content

Editable data lives in:

- `client/src/data/` — services, projects, FAQ, stats, process, technologies
- `client/src/i18n/locales/` — `en.json`, `ar.json`, `he.json`
- `server/src/data/` — API content mirrors

## Production

```bash
npm run build
npm start
```

The Express server serves `client/dist` in production.
