# Stefan Saladino Portfolio

Frontend-only portfolio built with Next.js, React, TypeScript and custom CSS. The production build is a fully static export for Cloudflare Pages.

## Run locally

```powershell
npm ci
npm run dev
```

## Validate locally

```powershell
npm run typecheck
npm test
```

`npm test` creates the static export in `out` and verifies all public routes, contact privacy, LinkedIn, GA4 events, mobile-safe case-study titles, homepage orbit and CRM framing, and the absence of backend starter files.

## Cloudflare Pages with native Git integration

Push this source project to a private GitHub repository, then create a Git-connected Cloudflare Pages project with:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | `/` |

Node.js is pinned to `22.16.0` in `.node-version` so Cloudflare and local builds use a known compatible runtime. The committed lockfile keeps dependency installation deterministic.

The build includes GA4 measurement ID `G-7ZZLSDQWS9`. The canonical fallback is `https://stefansaladino.pages.dev`. If Cloudflare assigns a different project URL or you later connect a custom domain, set `NEXT_PUBLIC_SITE_URL` in both Production and Preview environment variables, then redeploy.

Recommended release workflow:

1. Create a feature branch.
2. Push changes and review Cloudflare's preview deployment.
3. Merge the approved branch into `main`.
4. Cloudflare builds and publishes production automatically.

## Readable copies of generated HTML

Next.js intentionally compresses production HTML into one line. That is expected and should remain unchanged for deployment.

To make every exported HTML page readable for code review, run:

```powershell
node .\tools\format-exported-pages.mjs .\out
```

The script creates `out-formatted-review` and formats every `.html` file inside it. It never alters `out`.
