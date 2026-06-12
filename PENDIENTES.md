# Pendientes — Web MOMA Hair Salon

> Lista viva de tareas. Marcar `[x]` al completar. Última actualización: 12-jun-2026.
> El detalle del plan de despliegue está en `CLAUDE.md` (sección «Plan de despliegue»).

---

## ⭐ PRÓXIMA SESIÓN — PRIMERO ESTO (dejado el 12-jun-2026 por la tarde)

> Da igual en qué Mac te sientes: empezar por aquí.

1. **`git pull` en LAS DOS carpetas** (esta y `moma-panel-demo`). Deben llegar:
   - Web → commit `309bcd1` (línea de prueba de sync) + el commit de este mismo bloque.
   - Panel → commit `1c0917d` (adaptación a móvil).
2. **Si estás en la ACADEMIA:** ver la línea de prueba de sync en este archivo = ida confirmada ✅. Después haz un cambio pequeño allí, commit + push → al hacer pull en el personal queda confirmada **la vuelta** y la prueba cerrada.
3. **Recuerda lo que falta allí** (pasos 6-7 de la checklist de abajo): hook pre-commit + CLAUDE.md global. Hasta entonces, commits desde la academia con ojo.
4. **Panel demo:** ya está publicado para el cliente en **https://moma-panel-demo.vercel.app** (versión móvil OK). Si se toca el panel, redesplegar SOLO desde el Mac personal (`vercel deploy --prod`); el login de Vercel no existe en la academia.

*(Borrar este bloque cuando esté hecho.)*

---

## 🖥️ Setup Mac academia (hacer el próximo día allí, con Claude)

> Decidido 12-jun-2026: este proyecto se trabaja desde los DOS Macs vía git pull/push.
> `CLAUDE.md` y `PENDIENTES.md` ya viajan en el repo. `docs/` y `fotos-originales/` NO (solo Mac personal).

- [ ] **1. Borrar la carpeta vieja** «MOMA PARA ACADEMIA» del Mac de la academia (está desactualizada; primero a la Papelera, vaciar cuando el clone funcione).
- [ ] **2. Generar clave SSH** (la clave privada nunca sale de ese Mac): `ssh-keygen -t ed25519 -C "mac-academia"` — con passphrase, guardada en el Llavero de macOS.
- [ ] **3. Subir la clave PÚBLICA** (`~/.ssh/id_ed25519.pub`) a GitHub web → Settings → SSH and GPG keys (lo hace Miguel, como siempre con GitHub web).
- [ ] **4. Probar la conexión:** `ssh -T git@github.com` → debe saludar con el usuario.
- [ ] **5. Clonar:** `git clone git@github.com:miguelangelortegaalvarez-a11y/moma-hair-salon-web.git`
- [ ] **6. Configurar el hook pre-commit de escaneo de secrets** en ese Mac (en el personal es global vía `core.hooksPath`; en la academia no existe aún — Claude lo monta).
- [ ] **7. Copiar el `~/.claude/CLAUDE.md` global** (reglas de trabajo de Miguel) por AirDrop desde el Mac personal → así Claude trabaja igual en ambos. La memoria global NO se copia (decisión de seguridad 12-jun: solo necesita MOMA, y el contexto de MOMA ya viaja en este repo).
- [ ] **8. Verificar Claude Code:** instalado y con sesión iniciada en la cuenta de Miguel.
- [ ] **9. Ritual a partir de ahí, en ambos Macs:** `git pull` al sentarse · commit + `git push` al terminar.
- [ ] **10. Proyecto CRM demo (vive solo en el Mac academia):** convertirlo en repo git allí — `.gitignore` ANTES del primer commit (hook del paso 6 ya activo), repo GitHub **PRIVADO**, `CLAUDE.md` propio versionado desde el inicio, push. Después clonarlo en el Mac personal. Mismo ritual pull/push.

> Prueba sync Mac personal → academia 12-jun-2026: si lees esta línea en el Mac de la academia tras `git pull`, la ida y vuelta funciona.

---

## 🟢 Puedo hacerlo YA (sin esperar al cliente)

### Web — antes de publicar (obligatorio)
- [x] **Favicon** (logo MOMA): `favicon.ico` + `favicon-32.png` + `apple-touch-icon.png` generados y enlazados.
- [x] **Meta tags SEO + Open Graph + Twitter** + imagen `img/og-image.jpg` (1200×630) + **JSON-LD HairSalon** (horario, 4,8★/68, dirección, tel).
  - Dominio definitivo `barberiamoma.es` ya puesto en las 8 URLs absolutas (canonical, og:url, og:image, twitter:image + 3 del JSON-LD). Solo falta que el cliente lo compre y el DNS.

### Web — pulido
- [x] **Sección Productos → "Próximamente" (10-jun-2026).** Se quitó la rejilla de 7 productos y se eliminaron TODAS las fotos de producto (a la Papelera): `img/prod/` (prod1-7 + `_orig/`) + sobras `img/producto.jpg`, `img/productos.jpg`. Motivo: **el dueño enviará fotos nuevas**. La palabra "Productos" sigue en el menú; al pulsarla sale un bloque "Próximamente". El CSS de la rejilla (`.prods`/`.prod`) se dejó intacto para reusar. ⏳ **Rehacer la sección cuando lleguen las fotos del dueño.**
- [x] **Responsive repasado (10-jun):** menú **hamburguesa** en móvil + orden de los 2 barberos arreglado. (Queda solo, opcional, una comprobación final en un móvil físico).
- [x] **Revisados TODOS los enlaces** (10-jun): anclas internas ✓, imágenes ✓, Booksy/Instagram/Maps/reseñas → 200 ✓, tel/email correctos.
- [x] **Botón de WhatsApp añadido** (hero + footer) con mensaje pre-escrito.
- [x] **Enlaces de Google Maps y Reseñas afinados (10-jun):** ya apuntan directos a la ficha real vía **Place ID `ChIJs7sia5L7cg0R487xymxbXDs`**. "Ver reseñas" → `search.google.com/local/reviews?placeid=…`; "Google Maps →" → `google.com/maps/search/?api=1&query=…&query_place_id=…`. Probados en móvil ✓.

---

## 🟡 Bloqueado — necesito datos del cliente
- [x] **Dirección confirmada (10-jun): Calle Europa 58.** La web ya lo pone correctamente en todos los sitios.
- [x] **Nombres de los 2 barberos** → Rubén (tatuado, "Más que un corte") y Sergio ("Cada cliente, su estilo"). Aplicado en la web.
- [x] **Instagram de los barberos:** DESCARTADO (10-jun). No se ponen los personales; va solo el de la peluquería **@moma_barberia** (ya está en nav, Productos y footer).
- [x] **Dominio decidido (10-jun): `barberiamoma.es`** — ya puesto en el HTML. Falta que el cliente lo **compre** en Don Dominio.
- [ ] **OK del cliente** para ejecutar el despliegue.

---

## 🔵 Despliegue
> **PUBLICADA (10-jun-2026)** en GitHub Pages → https://miguelangelortegaalvarez-a11y.github.io/moma-hair-salon-web/
- [x] Renombrar `propuesta-minimal.html` → **`index.html`**.
- [x] Apartar descartes (`propuesta-clara/oscura/minimal-oscura`, `cine`) → `_descartes/` + `.gitignore`. También sobras de `img/` → `_descartes/img-sobras/`.
- [x] Verificado que `docs/`, `fotos-originales/`, `_descartes/`, `CLAUDE.md` y `PENDIENTES.md` **NO** suben (escaneo de secretos limpio).
- [x] Repo **público** `moma-hair-salon-web` creado → push a `main` (vía SSH).
- [x] **GitHub Pages activo** (Source: branch `main` / `root`) + **Enforce HTTPS** ✅. Web online (HTTP 200).
- [ ] **Crear `CNAME`** con `barberiamoma.es` + **DNS en Don Dominio** (4 registros A + CNAME `www`) → cuando el cliente compre el dominio.
- [ ] Tras propagar DNS: poner el dominio en Settings → Pages (Custom domain) y verificar candado.

---

## 📝 Blog (SEO)
> **Creado y PUBLICADO (10-jun-2026).** Carpeta `blog/` separada de la home → online en …/moma-hair-salon-web/blog/
- [x] **Infraestructura:** `blog.css` + `blog.js` **compartidos** + portada `blog/index.html` (índice editorial tipográfico, **SIN fotos**) + enlace «Blog» en el menú de la home (→ `blog/index.html`).
- [x] **Enfoque decidido:** **HTML suelto por post** (NO Jekyll). **Claude escribe los borradores, Miguel revisa y valida.**
- [x] **Post 1:** «La importancia del cuidado masculino» (editorial; va primero en el índice).
- [x] **Post 2:** «¿Cada cuánto hay que cortarse el pelo?» (guía por tipo de corte; enlaza al post 1).
- [x] Cada post con **SEO propio** (title, meta, Open Graph, JSON-LD `BlogPosting`). Commit + push a `main` hecho.
- [ ] **Próximos posts:** cuidar la barba · corte según la forma de la cara · tipos de degradado (fade).

---

## ⚪ Post-publicación / mejoras futuras
- [ ] Poner el enlace en la **bio de Instagram** (@moma_barberia).
- [ ] (Opcional) Ficha de **Google Business** enlazando la web.
- [ ] **Rehacer la sección Productos** cuando el dueño envíe las **fotos nuevas** (ahora pone "Próximamente"). El CSS de la rejilla sigue en el HTML listo para reutilizar; el catálogo real de 7 productos con precios está en `CLAUDE.md`.

---

## ✅ Hecho
- [x] **Blog publicado (10-jun):** carpeta `blog/` con 2 posts + índice tipográfico sin fotos + enlace «Blog» en el menú (ver sección «📝 Blog»).
- [x] **Hero: 3 botones** RESERVAR CITA · WHATSAPP · LLAMAR (todos rectángulo con borde, fondo blanco → negro al hover).
- [x] **Favicon + SEO + Open Graph + Twitter + JSON-LD** (ver bloque «antes de publicar»).
- [x] **Contador animado** (count-up): las 3 cifras suben desde 0 al entrar en viewport (4,8 con decimal · 68 · +4.000 con separador de millar). Una sola vez; respeta reduced-motion.
- [x] **Sección de testimonios** ("cita que rota", fade cada 4 s) antes del CTA, con 4 reseñas reales de Google.
- [x] **Bloque de prueba social** (reseñas) bajo el hero: 4,8 ★ Google · 68 reseñas · +4.000 citas.
- [x] **Nombres de barberos** aplicados en "Conócenos": Rubén y Sergio.
- [x] Diseño minimal lujo "blanco roto" elegido (`propuesta-minimal.html`).
- [x] Hosting/dominio decididos (10-jun): GitHub Pages público + Don Dominio.
- [x] `docs/` y `fotos-originales/` en `.gitignore` (verificado 10-jun).
