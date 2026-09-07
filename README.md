# Hoja de Vida — Alejandro Muñoz

Portafolio / hoja de vida personal: **React + Vite + Tailwind CSS** (sitio estático)
más una **API de contacto minimalista en Node.js** que envía los mensajes del
formulario por correo mediante **Resend**.

La API no usa base de datos ni frameworks: es un único archivo Node sin
dependencias externas (`api/server.js`). El registro de cada mensaje es el
propio correo que llega al buzón.

## Arquitectura

| Pieza | Qué es | Se duerme |
|---|---|---|
| **Frontend** (`/`) | Sitio estático Vite, servido como archivos. | No |
| **API** (`/api`) | Servicio Node `POST /api/contact` → valida, escapa HTML, limita por IP y envía vía Resend. | Sí (plan free de Render) |

El envío de correo se hace **solo en el servidor**: la API key de Resend nunca
llega al navegador.

## Tecnologías

- **Frontend:** React 19, Vite, Tailwind CSS v4, lucide-react, framer-motion.
- **API:** Node.js ≥18 (sin dependencias), `fetch` nativo, Resend HTTP API.
- **Anti-abuso:** honeypot + rate-limit por IP + validación estricta. Turnstile opcional.
- **Despliegue:** Render (Blueprint `render.yaml`).

## Puesta en marcha (desarrollo)

Dos procesos en paralelo:

```bash
# 1) API de contacto
cd api
cp .env.example .env     # completa RESEND_API_KEY y MAIL_TO
npm start                # http://localhost:3001
```

```bash
# 2) Frontend
npm install
npm run dev              # http://localhost:5173
```

> El proxy de Vite reenvía `/api` a `http://localhost:3001`, así que en
> desarrollo no hay CORS.

## Producción (Render)

Conecta el repo y usa `render.yaml` (Blueprint). Actualmente configura solo el frontend estático:

- **hoja-de-vida-react** (Static Site) — build `npm install && npm run build`, publica `dist/`.

Para la API de contacto, crea manualmente un **Web Service** en Render apuntando a la carpeta `api/`:

Variables a definir en el panel de Render:

| Servicio | Variable | Valor |
|---|---|---|
| cv-contact-api | `RESEND_API_KEY` | tu API key de Resend (secreto) |
| cv-contact-api | `MAIL_TO` | buzón que recibe los mensajes |
| cv-contact-api | `ALLOWED_ORIGINS` | URL pública del frontend |
| cv-frontend | `VITE_API_URL` | URL pública de la API |

Opcional — captcha anti-bot con Cloudflare Turnstile: define `TURNSTILE_SECRET`
en la API y `VITE_TURNSTILE_SITE_KEY` en el frontend. Si se dejan vacíos, se
desactiva y siguen operando el honeypot y el rate-limit.

## Estructura

```
src/components/   Componentes de la UI (Hero, About, Skills, Experience, Projects, Contact, Footer, Navbar)
api/server.js     API de contacto (Node sin dependencias): valida + envía vía Resend
public/           Recursos estáticos (foto-alejo.jpg, favicon: alejo1994.png, logo: alejoS.png, icons.svg)
render.yaml       Blueprint de Render (frontend estático + API)
```

## Comandos útiles

```bash
npm run dev        # Desarrollo frontend
npm run build      # Build producción
npm run lint       # Oxlint
npm run preview    # Preview build local
```

## Recursos estáticos

- **Favicon / Loader:** `public/alejo1994.png`
- **Logo Navbar & Footer:** `public/alejo1994.png`
- **Foto perfil Hero:** `public/foto-alejo.jpg`
- **CV descargable:** `public/hoja_de_vida_alejandro_munoz.pdf`