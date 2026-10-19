# San Diego Leisure — rediseño (vista previa)

Este es el sitio rediseñado de **sandiegoleisure.com**: los mismos textos, títulos, descripciones y nombres de página que el sitio actual, pero con un diseño nuevo.
Es HTML, CSS y JavaScript puros: no hay que compilar nada ni instalar dependencias.

> ⚠️ Esta copia es **solo de vista previa**. Ninguna página se deja indexar en Google (lleva la etiqueta `noindex` y `robots.txt` bloquea todo). Así, la vista previa en GitHub Pages no compite con el sitio real.

---

## 1. Abrirlo en Visual Studio Code

1. Descomprime el zip y abre la carpeta `sandiegoleisure-web` en VS Code (**File → Open Folder…**).
2. VS Code te va a sugerir la extensión **Live Server**; instálala.
3. Haz clic derecho en `index.html` y elige **Open with Live Server**. El sitio se abre en `http://127.0.0.1:5500` y se recarga solo cada vez que guardas un cambio.

## 2. Subirlo a GitHub

**Opción fácil, desde la web:**

1. En github.com, ve a **New repository**. Ponle un nombre, por ejemplo `sandiegoleisure-web`, y elige **Public**. GitHub Pages es gratis en repositorios públicos.
2. En el repositorio vacío, entra a **uploading an existing file**, arrastra **todo el contenido** de la carpeta y haz clic en **Commit changes**.
   - Arrastra el contenido, no la carpeta.
   - Incluye `.nojekyll`. Si no se ve, actívalo en tu sistema para que se muestren los archivos ocultos.

**Opción con git (terminal de VS Code):**

```bash
git init
git add .
git commit -m "Rediseño San Diego Leisure - vista previa"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/sandiegoleisure-web.git
git push -u origin main
```

## 3. Publicarlo con GitHub Pages

1. En el repositorio, ve a **Settings → Pages**.
2. En **Build and deployment**, selecciona **Source: Deploy from a branch**, con **Branch: `main`** y carpeta **`/ (root)`**. Luego haz clic en **Save**.
3. Espera uno o dos minutos y recarga. Arriba aparecerá la dirección:
   `https://TU-USUARIO.github.io/sandiegoleisure-web/`

## 4. Compartirlo con Jorge

Mándale esa dirección. Se ve igual en computadora, tablet y celular, y él no necesita cuenta ni instalar nada.

Ejemplo de mensaje:

> Hola Jorge, aquí puede ver la propuesta del nuevo diseño de su página: https://TU-USUARIO.github.io/sandiegoleisure-web/
> Es solo una vista previa: su página actual sigue funcionando igual y Google no ve esta copia. Todos los textos son los mismos de su sitio; lo único que cambia es el diseño. Cualquier comentario, con gusto lo ajustamos.

Para mandarle cambios, edita, haz commit y push (o sube los archivos de nuevo). Pages se actualiza solo en uno o dos minutos.

---

## Estructura

| Archivo | Qué es |
|---|---|
| `index.html` … `us-visa-renewal.html` | Las 18 páginas, con los mismos nombres que en el sitio actual |
| `styles.css` | Todo el diseño |
| `main.js` | Menú del celular, encabezado al hacer scroll, botón de tamaño de letra, animaciones suaves |
| `images/` | Fotos, logo y muestras de documentos |
| `robots.txt` | Para la vista previa bloquea todo. **Hay que cambiarlo al publicar** |
| `.nojekyll` | Hace que GitHub Pages sirva los archivos tal cual |

## Antes de publicarlo en sandiegoleisure.com (producción)

No hacer esto en la vista previa; solo el día que el sitio nuevo reemplace al actual.

- [ ] **Quitar el `noindex`** de todas las páginas. Es la línea marcada con `<!-- VISTA PREVIA: quitar al publicar ... -->`. En VS Code: Buscar y reemplazar en todos los archivos (Ctrl+Shift+H).
- [ ] **Cambiar `robots.txt`** por:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://www.sandiegoleisure.com/sitemap.xml
  ```
- [ ] Agregar `sitemap.xml` con todas las páginas, con su dirección real terminada en `.html`. El sitemap actual lista direcciones sin `.html` (por ejemplo `http://sandiegoleisure.com/tr-mexico-visa`) y todas dan error 404. Mandarlo en Google Search Console.
- [ ] Agregar la etiqueta `<link rel="canonical">` en cada página, apuntando a la versión con `www`.
- [x] Crear la página **Mexico Green Card** (`mexico-green-card.html`), con el texto del sitio actual.
- [ ] Configurar las **redirecciones 301** de las direcciones viejas en el hosting (Netlify o Cloudflare Pages).
- [ ] Bajar a `images/` las imágenes de la galería que todavía se cargan desde los servidores de Google (`lh3.googleusercontent.com`).
- [ ] DNS: cambiar **solo** el registro A y el CNAME de `www`. **No tocar** MX, SPF ni DMARC, para que el correo siga en Turbify.
