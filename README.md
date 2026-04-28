# Chairwala

A catalogue of chairs that changed the way we think about sitting.

48 iconic chair designs, each with an original SVG illustration, browsable in three views:

- **Grid** — visual overview sorted A–Z or by year
- **Timeline** — chairs grouped by decade
- **List** — compact numbered list

Clicking a chair opens a modal with the full description, materials, origin, and manufacturer. The designer name filters to all chairs by that designer; the movement tag filters by design movement.

## Stack

- React + Vite
- CSS custom properties for theming (light/dark, auto-detected by time of day)
- No external UI libraries

## Development

```bash
npm install
npm run dev
```

## Deploy

Netlify: build command `npm run build`, publish directory `dist`.
