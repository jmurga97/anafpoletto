# Ana F. Poletto — Psicología

Sitio web y blog de Ana F. Poletto, construido con Astro y publicado en Cloudflare Workers.

## Desarrollo

```sh
bun install
bun run dev
```

El sitio local estará disponible en `http://localhost:4321`.

## Blog

Los artículos son archivos Markdown en `src/content/blog`. Su estructura está validada por Astro Content Collections y puede gestionarse desde [Pages CMS](https://app.pagescms.org/).

Campos disponibles:

- `title`: título del artículo.
- `description`: resumen para el listado y metadatos.
- `pubDate`: fecha de publicación.
- `coverImage` y `coverAlt`: portada opcional y su texto alternativo.
- `draft`: los borradores no se publican en producción.
- El contenido Markdown aparece debajo del frontmatter.

Las imágenes cargadas desde el CMS se guardan en `public/images/blog`.

## Publicación

```sh
bun run build
bun run deploy
```

Cloudflare Workers Builds está conectado a la rama `main`; cada commit del CMS genera automáticamente una nueva compilación y publicación.
