# 📤 Guía paso a paso para subir Kalo a Google Play Console

> Archivos que necesitas tener a mano (en `C:\Users\JESUS\Escritorio\Proyecto Claude\`):
>
> - `Kalo-v1.6.0.aab` — el App Bundle firmado ← se sube aquí
> - `play-store-assets\icon-512.png` — icono de alta resolución
> - `play-store-assets\feature-graphic.png` — gráfico destacado
> - `play-store-assets\store-listing.txt` — textos para copiar/pegar
> - `play-store-assets\PRIVACY_POLICY.md` — política de privacidad
> - Capturas de pantalla del móvil (mín. 2) — las haces ahora

---

## 0. Antes de empezar: publicar la política de privacidad

Google Play **obliga** a tener una URL pública para la política de privacidad.

La forma más rápida y gratis:

1. Crea un repo público en GitHub llamado por ejemplo `kalo-privacy`.
2. Sube `PRIVACY_POLICY.md` renombrándolo a `README.md`.
3. Copia la URL del archivo en GitHub (ej: `https://github.com/tu-usuario/kalo-privacy/blob/main/README.md`).
4. (Opcional pero mejor) Activa **GitHub Pages** en Settings → Pages → branch main → save. Te da una URL bonita tipo `https://tu-usuario.github.io/kalo-privacy/`.

Guárdate esa URL, la usarás en el paso 4.

> Antes de publicar, **edita el email** `[tu-email@aquí]` en `PRIVACY_POLICY.md` y en `store-listing.txt`.

---

## 1. Crear la aplicación en Play Console

1. Entra en **https://play.google.com/console** con la cuenta ya verificada.
2. Botón **"Crear app"** (arriba derecha).
3. Rellena:
   - **Nombre**: `Kalo: Calorías y Nutrición`
   - **Idioma predeterminado**: Español (España) – es-ES
   - **¿App o juego?**: App
   - **¿Gratuita o de pago?**: Gratuita
   - Acepta las dos declaraciones (directrices + leyes EEUU exportación).
4. **Crear app**.

---

## 2. Configuración inicial del panel

Play Console te muestra una lista de tareas tipo checklist en **"Configura tu app"**. Ves marcándolas:

### 2.1 Acceso a la app
→ "Toda la funcionalidad está disponible sin restricciones especiales" → **Guardar**.

### 2.2 Anuncios
→ "No, mi app no contiene anuncios" → **Guardar**.

### 2.3 Clasificación del contenido
Abre el cuestionario IARC y elige:
- Categoría: **Utilidad, productividad, comunicación u otra**
- Email de contacto: el tuyo
- Responde **NO** a todas las preguntas (violencia, miedo, sexo, lenguaje, drogas, apuestas, compras, ubicación, interacción entre usuarios, etc.).
- Resultado esperado: **PEGI 3 / Todos los públicos**. Acepta.

### 2.4 Público objetivo y contenido
- **Rangos de edad**: marca **13-15, 16-17 y 18+**
- ¿Interesa a menores no seleccionados? → **No**
- (Familias / Designed for Families → **No**, no aplicamos).
- **Guardar y siguiente** hasta terminar.

### 2.5 Seguridad de los datos
Aquí es crítico porque Kalo **NO** recoge datos. Respuestas:
- ¿Tu app recopila o comparte algún dato requerido? → **No**
- ¿Cifras los datos en tránsito? → **Sí** (HTTPS por defecto en la WebView)
- ¿Los usuarios pueden solicitar la eliminación de sus datos? → **Sí, proporcionamos un método** (desinstalar la app o "Borrar datos" desde ajustes del sistema)
- Guardar. Google te generará automáticamente la sección "Seguridad de los datos" con "No se recogen datos".

### 2.6 Esta app es una app gubernamental / financiera / salud
→ Responde **No** a todas.

### 2.7 Categoría y detalles de contacto
- **Categoría de la app**: Salud y bienestar
- **Email**: el tuyo (obligatorio, será visible en la ficha)
- **Sitio web**: opcional
- **Teléfono**: opcional

---

## 3. Ficha de Play Store (Store listing)

Menú izquierda → **Crecimiento → Presencia en Play Store → Ficha principal de Store**.

Abre `play-store-assets\store-listing.txt` y pega:

| Campo | De dónde sacarlo |
|---|---|
| Nombre de la app | Sección "NOMBRE DE LA APP" |
| Descripción breve | Sección "DESCRIPCIÓN BREVE" |
| Descripción completa | Sección "DESCRIPCIÓN COMPLETA" |

Sube los gráficos:

| Campo | Archivo | Tamaño |
|---|---|---|
| Icono de la app | `play-store-assets\icon-512.png` | 512 × 512 |
| Gráfico destacado | `play-store-assets\feature-graphic.png` | 1024 × 500 |
| Capturas de pantalla de teléfono | tuyas (ver siguiente paso) | mín. 2, máx. 8, entre 320 y 3840 px |

### 3.1 Cómo capturar las pantallas (si aún no las tienes)

**Desde el móvil con la app instalada:**
1. Abre Kalo (`Kalo-v1.6.0.apk`).
2. Pantalla por pantalla, pulsa **Volumen ↓ + Encendido** a la vez para capturar.
3. Sugerencia de 6 capturas:
   - Selector de perfil ("¿Quién usa Kalo?")
   - Pantalla "Hoy" con comidas y progreso
   - Buscador de productos (mostrando Mercadona / Lidl)
   - Resumen / Dashboard
   - Calendario mensual
   - Gestionar perfiles con avatares
4. Pásalas al PC (USB, Google Drive, correo). Súbelas en la Play Console.

**Alternativa**: usa el emulador de Android Studio → botón de cámara en el panel lateral.

---

## 4. Política de privacidad

Menú izquierda → **Políticas → Política de privacidad de la app**.

- Pega la URL que creaste en el paso 0.
- **Guardar**.

---

## 5. Subir el AAB

Menú izquierda → **Test y publicación → Testing → Pruebas internas**.

> ⚠️ **Empieza por "Pruebas internas" (Internal testing)**, no por producción. Es instantáneo y reversible. Solo los testers que invites por email podrán descargarla. Cuando todo esté OK, lo promocionas a producción con un clic.

1. Pestaña **"Testers"**:
   - Crea una lista de correos con tu email (y el de familiares si quieres).
   - **Guardar cambios**.
2. Pestaña **"Crear nueva versión"**:
   - Si es la primera vez, Play te pedirá activar **Play App Signing**. Acepta (Google gestiona la clave de firma de lanzamiento, tú sigues teniendo la tuya de carga).
   - Botón **Subir** → selecciona **`Kalo-v1.6.0.aab`**.
   - Espera a que se procese (1-2 min).
   - **Nombre de la versión**: `1.6.0` (autocompletado).
   - **Notas de la versión** (en español):

     ```
     Primera versión pública de Kalo. Novedades:
     • Pantalla de selección de usuario al abrir la app.
     • Avatares personalizables con foto por perfil.
     • Splash screen verde esmeralda.
     • Más de 200 productos nuevos (Mercadona, Lidl, Danone, Kellogg's, Milka, Oreo, Casa Tarradellas, Heura, MyProtein…).
     ```

3. **Revisar versión** → **Guardar** → **Empezar implementación para pruebas internas**.

---

## 6. Enlace de prueba y promoción a producción

1. Tras publicar, en la misma pantalla verás un **"Copiar enlace"** de opt-in de testers. Compárteselo a los testers: abren el enlace, aceptan, y pueden instalar desde Play Store. La revisión interna tarda **unos minutos / horas**.

2. Una vez verificado que funciona, vuelves a **Test y publicación → Producción**:
   - **Crear nueva versión**.
   - **Promocionar** desde la versión de pruebas internas (no hace falta volver a subir el AAB).
   - **Notas de la versión**: las mismas.
   - **Revisar** → **Empezar implementación**.

3. Google revisará la app. **Tiempo normal: 3-7 días** para la primera publicación (versiones posteriores suelen ser en horas). Recibirás emails en cada paso.

---

## 7. Checklist rápida antes de pulsar "Publicar"

- [ ] Aceptada la política de desarrollador de Google Play.
- [ ] Email de contacto visible en la ficha actualizado (no `[tu-email@aquí]`).
- [ ] Política de privacidad con URL accesible desde fuera.
- [ ] Categoría: Salud y bienestar.
- [ ] Clasificación IARC completada (PEGI 3).
- [ ] Seguridad de los datos: "No se recogen datos".
- [ ] Público objetivo: 13+.
- [ ] Icono 512×512 subido.
- [ ] Gráfico destacado 1024×500 subido.
- [ ] Mínimo 2 capturas de teléfono subidas.
- [ ] AAB subido a pista interna.
- [ ] Versión 1.6.0 / versionCode 7.
- [ ] Probado instalándolo desde el enlace de tester.

---

## 8. Errores comunes y cómo resolverlos

| Error | Causa | Solución |
|---|---|---|
| "Has subido un APK que no está firmado" | Subiste el `.apk` en lugar del `.aab` | Sube `Kalo-v1.6.0.aab` |
| "El versionCode ya se ha usado" | Intentas subir un bundle con el mismo versionCode | Sube versionCode 8 la próxima vez (`android/app/build.gradle` línea 10) |
| "Nivel de API de destino inferior al requerido" | targetSdk < 35 (Aug 2025) | Kalo apunta a 36 ✅ no debería fallar |
| "Falta política de privacidad" | URL no accesible o 404 | Comprueba que GitHub Pages esté activado |
| "Tu app contiene contenido delicado para menores" | Marcaste mal el público | Vuelve a "Público objetivo" y asegúrate de 13+ |
| La revisión se atasca >10 días | Normal la primera vez | Paciencia; si pasa de 14 días, abre incidencia desde Play Console > Ayuda |

---

## 9. Después de publicar

- **Actualizaciones**: para cada nueva versión sube `versionCode` en `android/app/build.gradle` (8, 9, 10…) y `versionName` en `package.json`. Rebuild con `build-aab.ps1`. Sube el AAB a la pista interna, valida, promociona a producción.
- **Métricas**: Play Console → Estadísticas te dará instalaciones, países, ratings, crashes (aunque no recogemos telemetría, Play igualmente reporta ANRs/crashes nativos).
- **Responde a las reseñas** en los primeros días — ayuda al posicionamiento.

---

¡Suerte con la publicación! 🚀
