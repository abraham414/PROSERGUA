# PROSERGUA — Sitio web corporativo

Sitio web corporativo e informativo de **PROSERGUA** (Proyectos y Servicios de
Guatemala), empresa guatemalteca dedicada a remodelación, construcción,
servicios eléctricos, auditorías eléctricas y comercialización de suministros
para construcción y electricidad.

## Stack

- **Next.js 16** (App Router, TypeScript estricto)
- **React 19**, Server Components por defecto; Client Components solo donde
  hay interacción real (menú móvil, galería de proyectos, formulario de
  cotización, servicios interactivos, animaciones de scroll-reveal y
  contador en `components/motion/`).
- **Tailwind CSS v4**, tokens de diseño centralizados en `app/globals.css`
  (`@theme`): colores de marca, radios, sombras y fuentes.
- Fuentes **Inter** (texto) y **Sora** (títulos) vía `next/font/google`
  (se descargan en build y se sirven desde el propio dominio, sin llamadas a
  Google en tiempo de ejecución).
- Sin base de datos, sin autenticación, sin backend ni APIs propias: el sitio
  es 100% estático, exportado como HTML/CSS/JS puro (`output: "export"` en
  `next.config.ts`) para hosting compartido sin Node.js (Hostinger). Reduce
  la superficie de ataque y no depende de ningún servidor Next.js corriendo
  en producción.

## Estructura

```
app/                    Rutas (App Router)
  page.tsx              Inicio
  nosotros/
  servicios/
    [slug]/              Detalle de cada servicio (generateStaticParams)
  proyectos/
  contacto/
  not-found.tsx
  sitemap.ts / robots.ts Generados con las APIs nativas de Next.js
components/
  layout/               Navbar, Footer
  ui/                   Button, Card, Container, Logo, SectionHeading
  motion/               Reveal (scroll-reveal), Counter, hook useInView
  sections/             Hero, Intro, ServicesGrid, ServicesInteractive,
                         ValueProposition, Philosophy, Stats, Projects,
                         ProjectGallery, Clients, ContactCTA, QuoteForm,
                         ClosingStatement
data/                   Contenido corporativo separado de la presentación:
                         company.ts, services.ts, projects.ts, clients.ts
types/                  Tipos compartidos (Service, Project, Client, etc.)
lib/                    Utilidades (siteConfig, absoluteUrl)
public/images/          Fotografías reales de PROSERGUA (logo, equipo,
                         oficina, servicios, clientes, marcas, fondos)
```

### Carpetas que no son parte del sitio

En la raíz del proyecto también aparecen `.agents/`, `.claude/`, `.impeccable/`
y `skills-lock.json`. No son código del sitio web ni afectan lo que ve un
visitante: son "skills" (instrucciones) instaladas para los asistentes de IA
(Claude Code y compatibles) que ayudan a desarrollar el proyecto. `.agents/skills`
y `.claude/skills` son intencionalmente el mismo contenido duplicado (cada
asistente busca sus skills en una ruta distinta) y `skills-lock.json` registra
de dónde vino cada una para poder actualizarlas. `.impeccable/critique/`
guarda revisiones de diseño generadas por una de esas skills, a modo de
historial. Si algún día dejan de usarse los asistentes de IA en este
proyecto, las cuatro se pueden borrar sin romper el sitio.

## Contenido e identidad visual

Todo el contenido corporativo (misión, visión, valores, propuesta de valor,
servicios, clientes, datos de contacto) y el material fotográfico provienen
de la presentación oficial de PROSERGUA. No se inventó información ni
fotografías. El isotipo del logo se usó tal cual (`public/images/logo/prosergua-isotype.png`),
sin rediseñarlo.

La galería de "Proyectos destacados" reutiliza las fotografías reales de la
presentación. La presentación no asigna nombres individuales a los proyectos,
por lo que cada elemento se etiqueta como "Proyecto destacado" en vez de
inventar un nombre (ver comentario en `data/projects.ts`).

## Desarrollo

Requiere Node.js 20+ y npm.

```bash
npm install
npm run dev       # http://localhost:3000
```

## Calidad

```bash
npm run lint       # ESLint (eslint-config-next)
npx tsc --noEmit   # TypeScript estricto
npm run build      # Genera el sitio estático en out/
npm run serve      # Sirve out/ localmente (revisa el puerto que muestre la terminal) para probarlo tal cual quedará en Hostinger
```

## Variables de entorno

Copiar `.env.example` a `.env.local` y ajustar según el entorno:

```bash
cp .env.example .env.local
```

| Variable                | Descripción                                                  |
| ------------------------ | ------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`  | URL pública y canónica del sitio (usada en metadata, Open Graph, `sitemap.xml` y `robots.txt`). Sin slash final. |

`.env`, `.env.local` y similares están excluidos de git (`.gitignore`).
Nunca deben commitearse secretos: actualmente el proyecto no usa ninguno.

## Seguridad

Cabeceras configuradas en `public/.htaccess` (Apache/Hostinger; el export
estático no tiene servidor Next.js para aplicarlas vía `next.config.ts`),
aplicadas a todas las rutas:

- **Content-Security-Policy**: diseñada para las dependencias reales del
  proyecto (sin scripts, estilos ni imágenes de terceros). Usa
  `'unsafe-inline'` en `script-src`/`style-src` porque Next.js App Router
  necesita esto para su script de hidratación y los estilos en línea que
  agrega `next/image`; se evaluó deliberadamente no usar un CSP con nonce
  dinámico porque eso forzaría renderizado dinámico en un sitio que es
  100% estático por diseño. `frame-ancestors 'none'` protege contra
  clickjacking.
- **Strict-Transport-Security** (HSTS), **X-Content-Type-Options: nosniff**,
  **X-Frame-Options: DENY**, **Referrer-Policy: strict-origin-when-cross-origin**,
  **Permissions-Policy** restrictiva (cámara, micrófono y geolocalización
  deshabilitados).

Otras decisiones de seguridad:

- Sin backend ni envío de formularios propio: los datos de contacto se
  muestran directamente (email, teléfono, dirección con enlace a Google Maps
  por búsqueda de texto, sin coordenadas inventadas). El formulario de
  cotización (`components/sections/QuoteForm.tsx`) es 100% cliente: arma el
  mensaje con los datos ingresados y lo entrega vía enlaces `wa.me`/`mailto`,
  sin enviar nada a un servidor propio. Si más adelante se requiere un envío
  real desde el servidor, deberá evaluarse validación server-side,
  sanitización, rate limiting y manejo seguro de errores antes de
  implementarlo.
- Sin `dangerouslySetInnerHTML` con contenido dinámico o de usuario; el único
  uso es para insertar JSON-LD (`Organization`, `WebSite`) generado a partir
  de datos estáticos y controlados del propio proyecto.
- Dependencias mínimas: solo Next.js, React y Tailwind CSS. `npm audit`
  reporta 0 vulnerabilidades al momento de esta entrega.

## SEO

- `generateMetadata`/`metadata` por página (title, description, Open Graph,
  Twitter Card) y una URL canónica (`alternates.canonical`) por ruta, para
  evitar contenido duplicado.
- `app/sitemap.ts` y `app/robots.ts` generados con las APIs nativas de Next.js.
- `app/opengraph-image.tsx` genera la imagen para compartir en redes/WhatsApp
  (logo + nombre + tagline reales, sin contenido inventado).
- `app/manifest.ts` (Web App Manifest) para "agregar a inicio" en Android.
- JSON-LD `Organization`/`GeneralContractor` y `WebSite` en `app/layout.tsx`,
  con datos reales (sin inventar coordenadas, horarios, precios ni redes
  sociales no documentadas).
- Imágenes optimizadas con `next/image` (AVIF/WebP, tamaños responsive,
  lazy loading por defecto).

Antes de darlo por terminado, valida el sitio ya desplegado (URL pública)
con estas herramientas de Google, que no se pueden correr desde el código:

1. [Rich Results Test](https://search.google.com/test/rich-results): confirma
   que el JSON-LD `Organization`/`GeneralContractor` se lea sin errores.
2. [PageSpeed Insights](https://pagespeed.web.dev/): mide Core Web Vitals
   (LCP, INP, CLS) reales, que sí son factor de posicionamiento.
3. [Google Search Console](https://search.google.com/search-console): hay que
   verificar la propiedad del dominio y enviar `sitemap.xml` manualmente —
   esto requiere la cuenta de Google del negocio, no se puede automatizar.

Ninguna de estas herramientas ni el cumplimiento técnico garantiza aparecer
"de primero" en Google: eso también depende de competencia, antigüedad del
dominio, enlaces entrantes y señales fuera del sitio (por ejemplo, el perfil
de Google Business).

## Despliegue (Hostinger, hosting compartido)

El sitio se exporta como HTML/CSS/JS estático — no necesita Node.js en el
servidor. Pasos para publicarlo en Hostinger:

1. Si agregaste fotos nuevas en `public/images/`, primero
   `npm run optimize-images` (ver "Mantenimiento" más abajo).
2. Confirmar `NEXT_PUBLIC_SITE_URL` en `.env.local` con el dominio
   definitivo (`https://www.prosergua.com`, sin slash final).
3. `npm run build` — genera la carpeta `out/` con el sitio completo,
   incluyendo `.htaccess` (copiado desde `public/.htaccess`).
4. Opcional: `npm run serve` para revisar `out/` localmente antes de subirlo.
5. Subir **todo el contenido de `out/`** (no la carpeta `out/` en sí, sino
   lo que hay adentro, incluyendo `.htaccess` que es un archivo oculto) a
   `public_html/` en el Administrador de archivos de hPanel, o por FTP/SFTP.
6. En hPanel, activar el certificado SSL del dominio (Hostinger lo emite
   gratis) para que el sitio cargue por HTTPS — varias de las cabeceras de
   `.htaccess` (HSTS, `upgrade-insecure-requests`) lo asumen.

Cada vez que se actualice contenido (`data/*.ts`, textos, fotos), hay que
repetir el build (paso 3) y volver a subir el contenido de `out/`; no hay
despliegue automático porque no hay servidor corriendo el proyecto.

### Problema conocido (no afecta a visitantes ni a Google)

En desarrollo aparecen errores 404 en la consola del navegador para unos
archivos internos de Next.js (`__next.<ruta>.__PAGE__.txt`) que el propio
framework pide para acelerar la navegación entre páginas sin recargar. Es
un problema conocido de esta versión de Next.js con exportación estática +
`trailingSlash`, no de este proyecto: cada página sigue cargando completa y
correctamente (verificado con clics reales y con carga directa de URLs),
tanto para visitantes como para Googlebot. Se puede ignorar; si una futura
versión estable de Next.js lo corrige, esos errores desaparecerán solos al
actualizar la dependencia.

## Mantenimiento

Todo el contenido corporativo vive en `data/*.ts`, separado de los
componentes visuales. Para actualizar textos, servicios, proyectos o
clientes no es necesario tocar el JSX de los componentes.

**Fotos nuevas**: como el sitio es estático, no hay servidor que optimice
imágenes al vuelo. Al agregar una foto:

1. Colócala como `.jpg`/`.jpeg` en la carpeta que corresponda dentro de
   `public/images/` (`backgrounds`, `team`, `office`, `services`, `clients`
   o `brands`).
2. Corre `npm run optimize-images` — convierte cada `.jpg` nueva a `.webp`
   (redimensionada según esa carpeta; ver `scripts/optimize-images.mjs`
   para los tamaños exactos). El `.jpg` original no se borra ni se toca.
3. Usa el `.webp` resultante en `data/*.ts` o el componente correspondiente.

Información pendiente de confirmar por PROSERGUA (marcada explícitamente en
el código donde aplica):

- Nombres individuales de los proyectos de la galería.
- Cualquier red social u horario de atención, ya que la presentación oficial
  no los especifica.
