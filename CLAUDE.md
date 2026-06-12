# Web MOMA Hair Salon

Web one-page para **MOMA Hair Salon** (Barbería MOMA), barbería de un **cliente externo** en Torremolinos. **No es de Academia Esparta** — es un encargo aparte. Sitio estático, HTML + CSS autocontenido (todo el `<style>` y `<script>` inline en el propio HTML).

**Estado (10-jun-2026):** web **técnicamente lista para publicar**. Hecho en esta fase: bloque de reseñas (cifras + **contador animado** + **testimonios rotando**), barberos **Rubén y Sergio**, dirección **58 confirmada**, **favicon + SEO + Open Graph + JSON-LD**, enlaces revisados, **botón WhatsApp**, hero con **3 botones** (Reservar/WhatsApp/Llamar). **Sección Productos en «Próximamente»** (10-jun): se retiró la rejilla de 7 productos y se eliminaron todas las fotos de producto (a la Papelera) — **el dueño enviará fotos nuevas** y se rehará la sección. **PUBLICADA (10-jun-2026)** en GitHub Pages → **https://miguelangelortegaalvarez-a11y.github.io/moma-hair-salon-web/** (repo público `moma-hair-salon-web` en `miguelangelortegaalvarez-a11y`, push a `main` vía SSH, Pages en `main`/`root`, **Enforce HTTPS** ✅, HTTP 200 verificado). **Solo falta enchufar el dominio** `barberiamoma.es` (ya puesto en el HTML) cuando el cliente lo compre: crear `CNAME` + DNS en Don Dominio (ver «Plan de despliegue» FASE 4-5). Enlaces de Maps/Reseñas afinados con el **Place ID real** (`ChIJs7sia5L7cg0R487xymxbXDs`). Responsive móvil repasado (menú **hamburguesa**, orden de barberos). Pendiente menor: rehacer Productos con las fotos nuevas del dueño. **BLOG añadido y PUBLICADO (10-jun-2026):** nueva sección `blog/` (HTML suelto por post + `blog.css`/`blog.js` compartidos; portada = índice tipográfico SIN fotos) con **2 artículos** publicados y enlace «Blog» en el menú de la home — detalle en la sección «Blog» más abajo. **Nota:** `PENDIENTES.md` es la lista viva de tareas (suele ir más al día que este archivo). Desde el **12-jun-2026** tanto `PENDIENTES.md` como este `CLAUDE.md` **se versionan en el repo** para el trabajo multi-Mac (Mac personal + Mac academia) — **OJO: el repo es PÚBLICO**, lo que se escriba en estos dos archivos es visible en GitHub. Nada sensible aquí (estrategia, precios pactados con el cliente, datos personales): eso va a la memoria del proyecto o al repo privado `moma-panel-demo`.

---

## Estructura del proyecto

```
moma-hair-salon-web/
│
├── CLAUDE.md                 # Este archivo — referencia completa del proyecto
├── README.md                 # Descripción mínima del repo
├── .gitignore                # Ignora secrets, docs/ (datos personales), fotos-originales/, vídeos
│
│  ── Web ACTIVA ──
├── index.html                # ⭐ LA WEB BUENA (era propuesta-minimal.html). Home one-page, CSS+JS inline.
│
├── blog/                     # 📝 Sección BLOG (detalle en la sección «Blog» más abajo)
│   ├── index.html            #    Portada del blog: índice editorial tipográfico, SIN fotos.
│   ├── blog.css              #    Estilos COMPARTIDOS del blog (heredan la marca).
│   ├── blog.js               #    Hamburguesa + scroll-reveal (compartido por todos los posts).
│   ├── la-importancia-del-cuidado-masculino.html   # Post 1 (editorial de bienvenida)
│   └── cada-cuanto-cortarse-el-pelo.html           # Post 2 (guía por tipo de corte)
│
│  ── Descartados (movidos a _descartes/, GITIGNORADO — solo histórico) ──
├── _descartes/               # propuesta-clara/oscura/minimal-oscura.html, cine.html + sobras de img/
│
├── img/                      # Imágenes que USA la web minimal
│   ├── logo-moma.png         # Logo "MOMA / HAIR SALON" recortado (marco fino). Referencia de estilo.
│   ├── moma-about.jpg        # Barbero 1 (tatuado) — bloque "Más que un corte"
│   ├── moma-feature.jpg      # Barbero 2 — bloque "Cada cliente, su estilo"
│   ├── g1.jpg … g6.jpg       # Galería (3 con logo MOMA de fondo, 3 sin). B&N → color al pasar ratón.
│   ├── (img/prod/ ELIMINADA 10-jun → Papelera) # productos en «Próximamente»; el dueño enviará fotos nuevas
│   └── (moma-g*, barbero-*, etc. = sobras de iteraciones, no usadas)
│
├── docs/                     # ⚠️ Referencias internas (GITIGNORADO — lleva datos personales)
│   ├── info-moma.md          # Datos del negocio
│   ├── letra-referencia.png  # Captura de la tarifa real
│   ├── instagram-*.png       # Capturas del perfil/grid de Instagram
│   └── datos-whatsapp-*.png  # Capturas WhatsApp Business (tel personal → no commitear)
│
└── fotos-originales/         # ⚠️ 38 fotos fuente de la barbería (GITIGNORADO — pesan, material bruto)
    └── 00-CONTACTO-todas.jpg # Hoja de contacto numerada de todas las fotos
```

---

## Datos oficiales del negocio

- **Dirección:** Calle de Europa **58** · 29620 Torremolinos. ✅ **CONFIRMADO por el cliente (10-jun-2026):** es el **58** (el 56 del WhatsApp Business era erróneo). La web ya pone 58 en todos los sitios.
- **Tel / WhatsApp:** +34 613 603 857
- **Email:** momahairsalon@gmail.com
- **Reservas:** Booksy → https://barberiamoma.booksy.com/a
- **Instagram:** @moma_barberia
- **Google Place ID:** `ChIJs7sia5L7cg0R487xymxbXDs` (de la ficha real, confirmado 10-jun). Enlaces directos ya en la web → reseñas: `https://search.google.com/local/reviews?placeid=ChIJs7sia5L7cg0R487xymxbXDs` · Maps: `https://www.google.com/maps/search/?api=1&query=MOMA%20Hair%20Salon%20Torremolinos&query_place_id=ChIJs7sia5L7cg0R487xymxbXDs`. Para "escribir reseña": `https://search.google.com/local/writereview?placeid=ChIJs7sia5L7cg0R487xymxbXDs`.
- **Desde:** 2020 · **Horario:** L–V 10–14 / 16–20, S 10–14
- **Barberos (confirmado 10-jun):** **Rubén** (el tatuado — bloque "Más que un corte", foto `moma-about.jpg`) y **Sergio** (bloque "Cada cliente, su estilo", foto `moma-feature.jpg`). Falta el @ de Instagram de cada uno (opcional).
- **Reseñas:** Google **4,8 ★ · 68 reseñas**. Booksy **5,0 ★ · 264 reseñas**. **+4.000 citas** reservadas (dato del cliente). La web usa los de **Google** + las +4.000 reservas.

### Tarifa real (no inventar precios)
Corte 14€ · Corte+perfilado barba 16€ · Corte+barba completa 18€ · Corte+barba+peinado 20€ · Recorte barba 8€ · Niños 2–8 11€ · Suplemento lavado+peinado +2€.

### Productos (7, datos reales del catálogo)
> ⏳ **La sección está ahora en «Próximamente»** (las fotos se eliminaron; el dueño enviará nuevas). Estos datos quedan aquí para **rehacer la sección** cuando lleguen.
Máquina de barba 3 en 1 **19€** (antes 25€) · Cera mate 10€ · Cera spider Nish Man 10€ · Activador de rizos 10€ · Agua de mar 10€ · After Shave de melón **10€** (antes 12€) · Polvos de volumen profesionales 10€.

---

## Dirección de diseño (CLAVE)

**Minimal lujo / "blanco roto".** Fondo claro, negro, beige. **CERO colores fuertes** (verde/dorado descartados). Tipografía fina muy espaciada, muchísimo aire, estilo marca de moda de gama alta.

- **Fuentes:** Cormorant Garamond (serif, titulares) + Jost (sans, textos/labels).
- **Paleta:** `--paper:#F4F1EC · --paper-2:#EDE8E0 · --ink:#1B1B1A · --grey:#6f6c66 · --soft:#9a968e · --line:#d9d3c8`.
- **Botones rectos** (sin redondear), bordes finos.
- **Logo** = referencia de estilo de toda la web. En fondos oscuros se invierte por CSS (`filter:invert(1) brightness(2)`).
- **Fotos:** verticales de móvil → **NUNCA a sangre estiradas** (se ven gigantes/borrosas). Usar contenidas o en rejilla. Galería y barberos en **B&N que pasan a color + zoom** al pasar el ratón.

### Rechazado (no volver a proponer)
Tema oscuro tipo MadMen · versión con acento verde/dorado · fotos a sangre.

---

## Secciones de `propuesta-minimal.html` (orden)

1. **Nav** (3 columnas, logo centrado) — Servicios · Productos · Nosotros · Galería · **Blog** · Contacto · Reservar. *(El enlace «Blog» apunta a `blog/index.html` —archivo concreto— para que funcione también en local `file://`, no solo en Pages.)*
2. **Hero** tipográfico: "MOMA" gigante + efecto **máquina de escribir** "el cuidado como oficio".
2b. **Prueba social** (`#resenas`, banda beige bajo el hero) — 3 cifras en serif itálica: **4,8 ★ Google · 68 reseñas · +4.000 citas** + enlace "Ver reseñas en Google".
3. **Ventajas** ("Cuidado en cada detalle") — 4 iconos SVG línea: persona, tijeras, **navaja** (no la del check), bote.
4. **Servicios** (tarifa) — **2 columnas**, cada línea aparece escalonada al hacer scroll.
5. **Productos** — **OCULTA por defecto**; aparece solo al pulsar "Productos" en el menú (JS). **Ahora muestra solo un bloque "Próximamente"** (`.soon`): la rejilla de 7 productos se retiró y las fotos se eliminaron (el dueño enviará nuevas). El CSS de la rejilla (`.prods`/`.prod`) sigue en el `<style>` para reutilizarlo al rehacerla.
6. **Nosotros** ("Conócenos") — 2 bloques de barbero alternados; fotos B&N→color; entran deslizando al hacer scroll.
7. **Galería** — 6 fotos verticales (tiles 3/4), B&N→color+zoom, entran en cascada.
7b. **Testimonios** (`#testimonios`, `.testi2`, fondo beige) — **"cita que rota"**: una reseña grande centrada en serif itálica que hace cross-fade cada **4 s** (transición 0,5 s), con 5 estrellas y puntos clicables. 4 reseñas reales de Google. JS propio al final del `<body>` (intervalo 4000 ms; clic en punto reinicia el timer).
8. **CTA** "Tu próxima cita" + botón Reservar.
9. **Footer** oscuro — logo + Dónde / Horario / Contacto.

### Animaciones (sistema `.reveal`)
`.reveal` + IntersectionObserver añade `.in` al entrar en viewport. Variantes: `--left/--right` (deslizan desde los lados), `--pop` (cascada galería/productos). `data-d="1/2"` = retraso escalonado. Respeta `prefers-reduced-motion`.

---

## Blog

Sección añadida y **publicada el 10-jun-2026** para mejorar el SEO y mantener la web «viva». Vive en la carpeta **`blog/`**, **separada** de la home.

**Enfoque (decidido con Miguel):**
- **HTML suelto por post**, NO Jekyll. Como **Claude escribe los borradores** (y Miguel los **revisa y valida**), Markdown no aporta ventaja; así hay cero build y encaja con la simplicidad del repo.
- **`blog.css` y `blog.js` COMPARTIDOS** por todos los posts (a diferencia de la home, que es todo inline). Un único sitio donde tocar estilos/JS del blog. `blog.js` = menú hamburguesa + scroll-reveal.
- **Portada = índice editorial tipográfico, SIN fotos** (`.post-index` / `.post-entry`). Decisión consciente: no hay fotos infinitas para cada post y el estilo tipográfico pega con la marca. Añadir un post = sumar un `<a class="post-entry">` al índice.
- Cada post: SEO propio (`title`, `meta description`, Open Graph, **JSON-LD `BlogPosting`**) + nav y footer replicados + CTA a reservar. Se mantiene una **`og:image` de fondo** aunque no se vea foto en la página (para la previa al compartir por WhatsApp/redes).
- Misma marca exacta que la home: paleta, Cormorant + Jost, nav con hamburguesa, footer.

**Artículos publicados (2):**
1. **«La importancia del cuidado masculino»** (`la-importancia-del-cuidado-masculino.html`) — editorial de bienvenida; va **primero** en el índice.
2. **«¿Cada cuánto hay que cortarse el pelo?»** (`cada-cuanto-cortarse-el-pelo.html`) — guía por tipo de corte; enlaza internamente al post 1.

**Próximos temas propuestos (pendientes de escribir):** cuidar la barba · qué corte favorece según la forma de la cara · tipos de degradado (fade).

**Cómo añadir un post nuevo:** copiar un `.html` de post existente como plantilla → cambiar `title`/SEO/slug/cuerpo (y el JSON-LD) → añadir su entrada `<a class="post-entry">` en `blog/index.html` → recargar Safari → tras OK de Miguel, `git add` rutas concretas + commit + push.

**Matiz SEO honesto:** para una barbería local lo que más mueve la aguja es la **ficha de Google Business + reseñas**; el blog suma y mantiene la web activa, pero es **secundario** frente a eso.

---

## Flujo de trabajo con la web

- **La home es `index.html`** (era `propuesta-minimal.html`): el CSS y el JS van **inline** en ese archivo. **El blog vive en `blog/`** (posts HTML sueltos + `blog.css`/`blog.js` compartidos) — ver sección «Blog».
- Tras un cambio, **recargar Safari** con AppleScript (el navegador cachea):
  ```
  osascript -e 'tell application "Safari" to set URL of (tabs of windows whose URL contains "propuesta-minimal") to ...'
  ```
  (o `open -a Safari "file://…/propuesta-minimal.html"`).
- **Procesado de fotos:** Python + PIL (`ImageOps.fit` con `centering` para encuadrar, contact sheets para elegir). Recortes de galería 900×1200 (3/4), productos 1290×1290 recortando la franja de la captura.
- **Elegir fotos sin gastar contexto:** generar hoja de contacto numerada y revisarla, en vez de abrir foto a foto.

---

## Seguridad en commits — OBLIGATORIO

El hook global `~/.git-hooks/pre-commit` escanea secrets en cada commit (ya activo vía `core.hooksPath`). Aun así, antes de cualquier `git commit`:

1. `git status` y mostrar qué entra. **Nunca `git add -A` / `git add .`** — siempre rutas concretas.
2. **NO commitear** `docs/` (lleva tel personal de WhatsApp Business) ni `fotos-originales/` (material bruto pesado). Ya están en `.gitignore`.
3. Solo commitear lo trabajado en la sesión. Si aparece algo "modified" no tocado → parar y preguntar.
4. Commit **solo tras OK explícito de Miguel**. Tras commitear, `git show --stat HEAD` para verificar.
5. **Antes de un `git push` → aviso destacado**: es el paso que PUBLICA (este repo es público) y decir qué commits van a subir.

---

## Plan de despliegue (producción) — GitHub Pages + Don Dominio

**Decidido 10-jun-2026.** Hosting **GitHub Pages gratis** desde un repo **PÚBLICO** en la cuenta de Miguel (`miguelangelortegaalvarez-a11y`), repo nuevo **`moma-hair-salon-web`**, **separado** de la academia. Es la misma fórmula que `academia-esparta-web` (también público + Pages). **Miguel mantiene** la web (edita en local → `git push`). **El cliente** compra y paga **solo el dominio** en **Don Dominio**, a su nombre — es lo único suyo. **No se paga hosting** (plan free de Miguel; Pages sobre repo público es gratis).

> ⚠️ Por qué público sin problema: el HTML de una web ya es visible por cualquiera (escaparate). Lo único sensible —`docs/` (tel personal) y `fotos-originales/`— **ya está en `.gitignore` y NO debe subir** (verificado en vivo 10-jun ✅). Privado solo haría falta si se quisiera ocultar el código, y eso requeriría pagar GitHub Pro: no merece la pena aquí.

### Antes de ejecutar — confirmar con el cliente
- **Dominio DECIDIDO (10-jun): `barberiamoma.es`** (coherente con @moma_barberia y el Booksy `barberiamoma`). Ya está puesto en el HTML (canonical, OG, Twitter, JSON-LD → `https://www.barberiamoma.es/`). Falta que el **cliente lo compre** en Don Dominio (su tarjeta, su cuenta) y configurar el DNS.
- **Acceso al panel DNS** de Don Dominio (lo configura Miguel, o lo hacen juntos).
- **Dirección 56 vs 58** y **nombres + Instagram de los 2 barberos** (van dentro de la web).

### Pasos numerados

> **ESTADO (10-jun-2026): FASES 0-3 EJECUTADAS ✅** — web online en `https://miguelangelortegaalvarez-a11y.github.io/moma-hair-salon-web/`. **Queda solo FASE 4-5 (el dominio):** crear `CNAME` con `barberiamoma.es`, los 4 registros A + CNAME `www` en Don Dominio, poner el Custom domain en Settings → Pages y reactivar Enforce HTTPS. Hacerlo **cuando el cliente compre el dominio**.

**FASE 0 · Contenido**
1. Aplicar en la web: dirección correcta + nombres e Instagram de los barberos.
2. Revisar TODOS los enlaces: Booksy, WhatsApp (+34 613 603 857), Instagram (@moma_barberia), email (momahairsalon@gmail.com), Google Maps.
3. Productos va como **«Próximamente»** en v1 (fotos eliminadas). Rehacer la sección cuando el dueño envíe las fotos nuevas — no bloquea el despliegue.
4. Probar en un **móvil real** (la mayoría entra desde la bio de Instagram).

**FASE 1 · Preparar la carpeta local**
5. `git status` → confirmar que `docs/` y `fotos-originales/` NO aparecen (ya ignoradas ✅).
6. Renombrar `propuesta-minimal.html` → **`index.html`** (Pages sirve `index.html` por defecto). *(El `index.html` viejo y su `styles.css` se eliminaron el 10-jun → a la Papelera.)*
7. Apartar los descartes para que NO se suban: `propuesta-clara.html`, `propuesta-oscura.html`, `cine.html` → moverlos a `_descartes/` (añadir esa carpeta al `.gitignore`) o borrarlos. El repo del cliente solo debe tener la web buena.
8. Añadir **favicon** (logo MOMA) y **meta tags SEO + Open Graph** en el `<head>` del `index.html`.
9. Crear archivo **`CNAME`** (sin extensión) con UNA línea = el dominio del cliente (p.ej. `momahairsalon.es`).

**FASE 2 · Subir a GitHub**
10. En GitHub (cuenta de Miguel) → botón **New** → repo **público** `moma-hair-salon-web`, sin inicializar con README (ya hay uno).
11. En local: `git remote add origin git@github.com:miguelangelortegaalvarez-a11y/moma-hair-salon-web.git`.
12. `git status` otra vez → revisar que solo entra lo bueno. **Nunca `git add -A` / `git add .`** — rutas concretas.
13. `git add <rutas>` → `git commit` → `git push -u origin main`.
14. `git show --stat HEAD` → verificar que NO subió `docs/` ni `fotos-originales/`.

**FASE 3 · Activar GitHub Pages**
15. Repo → **Settings → Pages** → Source: **Deploy from a branch** → `main` / `(root)` → Save.
16. Esperar el despliegue (sale URL `miguelangelortegaalvarez-a11y.github.io/moma-hair-salon-web`) y comprobar que carga.
17. **Settings → Pages → Custom domain** → escribir el dominio del cliente → Save (GitHub valida vía el `CNAME`).

**FASE 4 · DNS en Don Dominio**
18. Panel de Don Dominio (cuenta del cliente) → **Zona DNS** del dominio.
19. Crear **4 registros A** para el dominio raíz (`@`) apuntando a GitHub Pages:
    - `185.199.108.153`
    - `185.199.109.153`
    - `185.199.110.153`
    - `185.199.111.153`
20. Crear **1 registro CNAME** para `www` → `miguelangelortegaalvarez-a11y.github.io`.
21. Guardar y esperar propagación DNS (normalmente <1 h; hasta 24-48 h).

**FASE 5 · HTTPS y verificación**
22. Cuando el DNS propague, en **Settings → Pages** marcar **Enforce HTTPS**.
23. Comprobar: `https://dominio` carga con candado, probar con `www` y sin `www`, en móvil y escritorio.
24. Compartir el enlace por WhatsApp y ver que sale bien la previa (Open Graph).

**FASE 6 · Post-publicación**
25. Poner el enlace en la **bio de Instagram** (@moma_barberia).
26. (Opcional) Ficha de **Google Business** enlazando la web.

> **Datos fijos (para no buscarlos):** IPs A de GitHub Pages = `185.199.108.153 / .109 / .110 / .111`. CNAME `www` → `miguelangelortegaalvarez-a11y.github.io`. Usuario GitHub = `miguelangelortegaalvarez-a11y`. Repo = `moma-hair-salon-web` (público).

---

## Pendientes

- [x] **Dirección confirmada (10-jun): Calle Europa 58.** La web ya lo refleja.
- [x] **Nombres de los dos barberos** (10-jun): Rubén y Sergio, ya aplicados en "Conócenos". Falta solo el **@ de Instagram** de cada uno (opcional).
- [x] **Sección Productos → «Próximamente»** (10-jun): retirada la rejilla de 7 y eliminadas todas las fotos de producto (a la Papelera: `img/prod/` + sobras `producto.jpg`/`productos.jpg`). **El dueño enviará fotos nuevas.**
- [x] **DESPLEGADA (10-jun):** repo público creado, push a `main`, **GitHub Pages activo** (main/root) + HTTPS → **online** en `https://miguelangelortegaalvarez-a11y.github.io/moma-hair-salon-web/`. Ya se renombró a `index.html` y se apartaron descartes.
- [x] **Responsive móvil (10-jun):** menú **hamburguesa** en móvil (panel desplegable limpio; el JS está al final del `<body>`) + arreglado el orden de los 2 barberos en "Conócenos" (encabezado → foto → texto, con grid de 2 filas en escritorio).
- [x] **BLOG creado y PUBLICADO (10-jun):** carpeta `blog/` (HTML suelto por post + `blog.css`/`blog.js` compartidos; índice tipográfico sin fotos) con **2 posts** publicados + enlace «Blog» en el menú. Commit + push a `main` hecho. Ver sección «Blog».
- [ ] **Escribir más posts del blog:** cuidar la barba · corte según la forma de la cara · tipos de degradado (fade). Claude escribe los borradores, Miguel valida.
- [ ] **Enchufar el dominio `barberiamoma.es`** cuando el cliente lo compre: crear `CNAME` + 4 registros A + CNAME `www` en Don Dominio + Custom domain en Settings → Pages (FASE 4-5 del plan).
- [ ] **Rehacer la sección Productos** cuando lleguen las fotos nuevas del dueño (CSS de rejilla ya listo en el `<style>`; catálogo real arriba).

---

## Cuando vuelvas a este proyecto

1. Abre esta carpeta (`~/Desktop/moma-hair-salon-web/`).
2. Lee este `CLAUDE.md` — tienes estructura, datos, dirección de diseño y pendientes.
3. La home es **`index.html`** (todo inline; era `propuesta-minimal.html`). El **blog** está en **`blog/`** (posts HTML sueltos + `blog.css`/`blog.js` compartidos — ver sección «Blog»). Los `propuesta-*` y `cine.html` son descartes (en `_descartes/`).
4. Para encuadrar fotos: PIL + hoja de contacto. Originales en `fotos-originales/`.
5. Antes de tocar precios/datos → mirar la tarifa y datos reales de arriba (no inventar).
6. No re-proponer lo de la lista "Rechazado".
