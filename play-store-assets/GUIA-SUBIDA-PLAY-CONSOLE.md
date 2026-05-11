# 📤 Subida de Kalo a Google Play Console

Esta guía cubre **dos flujos** muy distintos:

- **[A. Subida recurrente](#a-subida-recurrente-a-pruebas-cerradas)** de una nueva versión a la pista de pruebas cerradas. Esto es lo que se hace en cada release a partir de la v1.6.0 (cuando ya se hizo el setup inicial).
- **[B. Setup inicial](#b-setup-inicial-en-play-console-histórico)** de la app en Play Console. Se hizo **una sola vez** con la v1.6.0. Queda aquí como referencia histórica.

A lo largo de la guía verás `{VERSION}` (ej: `1.7.0`) y `{VERSION_CODE}` (ej: `10`). Sustitúyelos por los valores actuales tomados de `package.json` y `android/app/build.gradle`.

---

## A. Subida recurrente a Pruebas cerradas

### A.0 Prerrequisitos

Antes de abrir Play Console:

- [ ] La versión está **sincronizada en los 6 sitios** del repo:
  - `package.json` → `version`
  - `android/app/build.gradle` → `versionName` y `versionCode`
  - `README.md` → badge de versión
  - `public/privacy.html` → texto del footer
  - `play-store-assets/Readme.md` → texto del footer
  - `play-store-assets/store-listing.txt` → cabecera y bloque "VERSIONADO"
- [ ] El `versionCode` Android es **estrictamente mayor** que el último subido a cualquier pista de Play Console (interna, cerrada, producción). Play rechaza un `versionCode` repetido aunque sea de una pista distinta.
- [ ] Has ejecutado todo el build:

  ```powershell
  cd "C:\Users\JESUS\Escritorio\Proyecto Claude\Kalo"
  npm run build
  npx cap sync android
  powershell -ExecutionPolicy Bypass -File .\build-apk.ps1
  powershell -ExecutionPolicy Bypass -File .\build-aab.ps1
  Copy-Item "android\app\build\outputs\apk\release\app-release.apk" "Kalo-v{VERSION}.apk"
  Copy-Item "android\app\build\outputs\bundle\release\app-release.aab" "Kalo-v{VERSION}.aab"
  ```

  Y tienes en la raíz `Kalo\` los archivos `Kalo-v{VERSION}.apk` y `Kalo-v{VERSION}.aab`.

- [ ] (Opcional pero recomendado) Has creado el **GitHub release v{VERSION}** con el APK adjunto antes de tocar Play Console — así los testers que prefieran APK directo lo tienen ya.

### A.1 Subir el AAB a la pista cerrada

1. Entra en `https://play.google.com/console` → app **Kalo**.
2. Menú lateral: **Pruebas → Pruebas cerradas** → selecciona tu pista (la que tiene a los testers).
3. Pulsa **Crear nueva versión** (arriba derecha).
4. En la sección **App bundles**, pulsa **Subir** y selecciona `Kalo-v{VERSION}.aab`.
5. Play Console valida el bundle (~30 s — 1 min). Si todo va bien:
   - **Nombre de la versión** se autocompleta como `{VERSION} ({VERSION_CODE})`.
   - Aparece la firma verificada.

### A.2 Notas de la versión

Baja a la sección **Notas de la versión**. Localiza el bloque del idioma `es-ES` (o el bloque por defecto, según cómo lo tengas configurado). Si tienes otros idiomas activos (en-US, etc.), pega lo mismo o tradúcelo — pero el `es-ES` es el importante para la audiencia objetivo.

Límite: **500 caracteres por idioma**. Mantén las notas accionables (qué hace nueva la versión desde el punto de vista del usuario, no qué archivos cambiaron).

Plantilla a rellenar:

```
Novedades de v{VERSION}: [breve frase con la mejora principal].

[Descripción accionable de lo que el usuario puede hacer ahora que antes no podía].

[Detalle adicional sobre experiencia o casos de uso típicos si queda espacio].
```

### A.3 Revisar y lanzar

1. Pulsa **Siguiente** abajo a la derecha.
2. Play Console muestra el resumen con cualquier advertencia:
   - ⚠️ **Warnings rojos** (permisos nuevos sin justificar, tamaño +10% inesperado, política de datos sin actualizar): **para** y revisa antes de continuar.
   - 🟡 Warnings amarillos/info son informativos, puedes seguir.
3. Pulsa **Guardar** → **Revisar versión** → **Empezar lanzamiento a Pruebas cerradas**.
4. Confirma en el modal.

### A.4 Verificación post-release

- La versión queda inicialmente en estado **"En revisión"**. En pista cerrada suele tardar minutos.
- Cuando pasa a **"Disponible para los testers"**, Play empieza a notificar a los dispositivos.
- Los testers reciben la actualización en pocas horas si tienen actualizaciones automáticas activadas. Si no, deben ir a la ficha de la app en Play Store y pulsar **Actualizar** manualmente.
- Verifica en Play Console → **Estadísticas → Versiones de Android** que la nueva versión empieza a registrar instalaciones tras 24-48 h.

### A.5 Promoción a producción (opcional, NO obligatorio en cada release)

Mientras la app está en prueba cerrada, no hay obligación de promocionarla. Promocionas solo cuando hayas validado con tus testers que es estable (sin crashes en Play Console → **Vitales de la app**, sin reportes negativos en el grupo de testers).

Pasos:

1. **Test y publicación → Producción** → **Crear nueva versión**.
2. Pulsa **Promocionar** sobre la versión que está en Pruebas cerradas (no hay que volver a subir el AAB; se reutiliza el mismo bundle).
3. Las notas de release se heredan automáticamente; ajústalas si quieres.
4. **Revisar** → **Empezar implementación**.
5. Google revisa la versión. **Versiones posteriores a la primera** suelen aprobarse en horas; ocasionalmente puede tardar días si hay cambios en permisos, política de datos o categoría.

### A.6 Errores comunes en el upload

| Error en Play Console | Causa | Solución |
|---|---|---|
| `El versionCode ya se ha usado` | Subiste un AAB con un `versionCode` ya existente en cualquier pista | Bump `versionCode` en `android/app/build.gradle`, rebuild AAB, reintenta. Decide si también bumpeas `versionName` (patch) o lo dejas igual. |
| `Has subido un APK que no está firmado` | Confundiste APK con AAB | Sube `Kalo-v{VERSION}.aab` (el `.aab`, no el `.apk`) |
| `Nivel de API de destino inferior al requerido` | Google subió el mínimo `targetSdk` | Actualiza `targetSdkVersion` en `android/variables.gradle`, rebuild |
| `Política de privacidad inaccesible` | La URL de la política devuelve 4xx/5xx | Verifica que GitHub Pages está sirviendo `privacy.html` (Settings → Pages, último deploy verde) |
| `Tamaño descargable inesperadamente grande` | Crece >10% respecto a la versión anterior por un asset olvidado | Revisa `dist/` para ver si entró algún archivo nuevo enorme antes de `cap sync` |
| `Permiso nuevo declarado sin justificación` | Plugin de Capacitor añadió un permiso | Justifica en la pantalla de permisos sensibles, o quita el plugin si no lo usas |

---

## B. Setup inicial en Play Console (histórico)

> ℹ️ Este bloque documenta cómo se **creó la app por primera vez** en Play Console al lanzar la v1.6.0. Se hace **una sola vez por app**. No se repite en releases recurrentes.
>
> Lo conservamos aquí por si en el futuro hay que:
> - Reconfigurar alguna sección que Google requiera reaceptar (clasificación IARC, seguridad de datos, etc.).
> - Crear una segunda app derivada de Kalo.
> - Dar de alta una app similar para otro mercado.

### B.0 Antes de empezar: publicar la política de privacidad

Google Play **obliga** a tener una URL pública para la política de privacidad.

La forma más rápida y gratis (la que se usó):

1. Activar **GitHub Pages** en el repo `Kalo-app` (Settings → Pages → Source = "GitHub Actions").
2. Publicar `public/privacy.html` como página estática (ya está en el repo).
3. URL resultante: `https://tabutaje.github.io/Kalo-app/privacy.html`.

Antes de publicar, asegúrate de que el **email de contacto** que aparece en `privacy.html` y en `store-listing.txt` está actualizado.

### B.1 Crear la aplicación en Play Console

1. Entrar en `https://play.google.com/console` con la cuenta de desarrollador verificada.
2. Botón **"Crear app"** (arriba derecha).
3. Rellenar:
   - **Nombre**: `Kalo: Calorías y Nutrición`
   - **Idioma predeterminado**: Español (España) – es-ES
   - **¿App o juego?**: App
   - **¿Gratuita o de pago?**: Gratuita
   - Aceptar las dos declaraciones (directrices + leyes EEUU exportación).
4. **Crear app**.

### B.2 Configuración inicial del panel

Play Console muestra un checklist en **"Configura tu app"**:

#### B.2.1 Acceso a la app
→ "Toda la funcionalidad está disponible sin restricciones especiales" → **Guardar**.

#### B.2.2 Anuncios
→ "No, mi app no contiene anuncios" → **Guardar**.

#### B.2.3 Clasificación del contenido (IARC)
- Categoría: **Utilidad, productividad, comunicación u otra**
- Email de contacto: el del desarrollador
- Responder **NO** a todas las preguntas sensibles (violencia, miedo, sexo, lenguaje, drogas, apuestas, compras, ubicación, interacción entre usuarios, etc.).
- Resultado esperado: **PEGI 3 / Todos los públicos**. Aceptar.

#### B.2.4 Público objetivo y contenido
- **Rangos de edad**: marcar **13-15, 16-17 y 18+**
- ¿Interesa a menores no seleccionados? → **No**
- Designed for Families → **No**
- **Guardar y siguiente** hasta terminar.

#### B.2.5 Seguridad de los datos
Crítico porque Kalo **NO** recoge datos personales:
- ¿Tu app recopila o comparte algún dato requerido? → **No**
- ¿Cifras los datos en tránsito? → **Sí** (HTTPS por defecto en la WebView)
- ¿Los usuarios pueden solicitar la eliminación de sus datos? → **Sí, proporcionamos un método** (desinstalar la app o "Borrar datos" desde ajustes del sistema)
- Resultado: Google genera automáticamente la sección "Seguridad de los datos" con "No se recogen datos".

#### B.2.6 App gubernamental / financiera / salud
→ **No** a todas. Aunque Kalo trata datos nutricionales, no es una app médica regulada.

#### B.2.7 Categoría y detalles de contacto
- **Categoría**: Salud y bienestar
- **Email**: el del desarrollador (será visible en la ficha pública)
- **Sitio web**: opcional
- **Teléfono**: opcional

### B.3 Ficha de Play Store (Store listing)

Menú izquierda → **Crecimiento → Presencia en Play Store → Ficha principal de Store**.

Abre `play-store-assets/store-listing.txt` y copia/pega:

| Campo Play Console | Sección en store-listing.txt |
|---|---|
| Nombre de la app | "NOMBRE DE LA APP" |
| Descripción breve | "DESCRIPCIÓN BREVE" |
| Descripción completa | "DESCRIPCIÓN COMPLETA" |

Sube los gráficos:

| Asset | Archivo en repo | Tamaño exacto |
|---|---|---|
| Icono | `play-store-assets/icon-512.png` | 512 × 512 |
| Gráfico destacado | `play-store-assets/feature-graphic.png` | 1024 × 500 |
| Capturas de teléfono | `docs/screenshots/*.jpg` | mín. 2, máx. 8, lado largo entre 320 y 3840 px |

#### B.3.1 Capturar pantallas nuevas (si hace falta)

Desde el móvil con Kalo instalado:
1. Pasa por las pantallas a capturar.
2. **Volumen ↓ + Encendido** simultáneamente para captura.
3. Sugerencia de cobertura: selector de perfil, "Hoy" con comidas/progreso, buscador de productos, dashboard, calendario, gestor de perfiles.
4. Pasa las capturas al PC (USB, Drive, correo).

Alternativa: emulador de Android Studio → botón de cámara en el panel lateral.

### B.4 Política de privacidad

Menú izquierda → **Políticas → Política de privacidad de la app**.
- Pega la URL: `https://tabutaje.github.io/Kalo-app/privacy.html`
- **Guardar**.

### B.5 Primera subida del AAB

Esto coincide en buena parte con [A.1 — A.4](#a1-subir-el-aab-a-la-pista-cerrada), con dos particularidades de la primera vez:

- **Play App Signing**: cuando subes el primer AAB, Play te pide activar **Play App Signing**. Acéptalo. Google gestiona la clave de firma de lanzamiento (la que llega a los dispositivos); tú mantienes tu **clave de carga** local (`kalo-release-key.jks`) para firmar los AAB que subes.
- **Lista de testers inicial**: en la pestaña **Testers** dentro de la pista cerrada, crea la lista de correos (el tuyo + familiares/early adopters), **Guardar cambios**, y comparte el **enlace de opt-in** que aparece. Los testers aceptan el enlace y entonces pueden instalar la app desde Play Store.

### B.6 Promoción inicial a producción

La primera promoción a producción (cuando Kalo deje la fase cerrada y se publique a todo el mundo) sigue exactamente [A.5](#a5-promoción-a-producción-opcional-no-obligatorio-en-cada-release), con un detalle: la **primera revisión** suele tardar **3-7 días**. Versiones posteriores son mucho más rápidas (horas).

---

## C. Checklist rápida (úsala en cada release)

Antes de pulsar **"Empezar lanzamiento"** en Play Console:

- [ ] Versión sincronizada en los 6 sitios del repo.
- [ ] `versionCode` Android estrictamente mayor que el último subido a Play.
- [ ] `npm run build && npx cap sync android` sin errores.
- [ ] `build-apk.ps1` y `build-aab.ps1` con `BUILD_EXIT_CODE=0`.
- [ ] Tag `v{VERSION}` creado y empujado a GitHub.
- [ ] GitHub Release publicado con `Kalo-v{VERSION}.apk` adjunto.
- [ ] Notas de release en `es-ES` listas (≤500 caracteres).
- [ ] La política de privacidad sigue accesible.
- [ ] Si es promoción a producción: la versión lleva ≥2-3 días en pruebas cerradas sin crashes nuevos en **Vitales de la app**.

---

## D. Post-release

- **Métricas**: Play Console → Estadísticas y Vitales reporta instalaciones, países, ratings, crashes y ANRs (aunque Kalo no recoge telemetría propia, Play sí captura crashes nativos).
- **Reseñas**: responde en los primeros días — ayuda al posicionamiento orgánico y a los testers les transmite que hay alguien al otro lado.
- **Versionado en el repo**: tras publicar, considera ya bumpear `versionCode` en `build.gradle` para el siguiente ciclo, así evitas olvidos cuando empieces la siguiente feature.

---

¡Suerte con la siguiente! 🚀
