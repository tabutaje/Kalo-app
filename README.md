<p align="center">
  <img src="docs/feature-graphic.png" alt="Kalo — contador de calorías para España" width="100%"/>
</p>

<h1 align="center">Kalo 🥗</h1>

<p align="center">
  <b>Contador de calorías y macros pensado para España.</b><br/>
  Offline, sin cuentas, sin tracking, sin anuncios.
</p>

<p align="center">
  <img alt="versión" src="https://img.shields.io/badge/version-1.6.0-10b981"/>
  <img alt="plataforma" src="https://img.shields.io/badge/plataforma-Android-3ddc84"/>
  <img alt="licencia" src="https://img.shields.io/badge/licencia-MIT-blue"/>
  <img alt="stack" src="https://img.shields.io/badge/React-19-61dafb"/>
  <img alt="capacitor" src="https://img.shields.io/badge/Capacitor-8-119eff"/>
</p>

<p align="center">
  <a href="https://tabutaje.github.io/Kalo-app/"><img alt="Probar online" src="https://img.shields.io/badge/▶_Probar_online-10b981?style=for-the-badge&logoColor=white"/></a>
  <a href="https://github.com/tabutaje/Kalo-app/releases/latest"><img alt="Descargar APK" src="https://img.shields.io/badge/⬇_Descargar_APK-3ddc84?style=for-the-badge&logoColor=white"/></a>
</p>

---

Registra lo que comes buscando productos reales de **Mercadona, Lidl, Carrefour, Dia, Aldi, Eroski, AhorraMás, Alcampo, Consum, Hipercor** y muchos más supermercados españoles — la información nutricional ya viene cargada, solo eliges la cantidad.

### ✨ Características

- 🇪🇸 **Miles de productos españoles** con valores nutricionales reales precargados
- 📊 **Objetivos diarios** de calorías, proteínas, carbohidratos y grasas
- 🧑‍🤝‍🧑 **Multi-perfil** para toda la familia, cada uno con su avatar (foto o emoji)
- 🍳 **Recetas y productos personalizados** que puedes añadir tú
- 📅 **Calendario mensual** y dashboard semanal con tu progreso
- 🔒 **Privacidad total**: todo se guarda en tu dispositivo, sin cuentas, sin tracking, sin anuncios
- 📴 **Funciona 100% sin conexión**

### 📱 Capturas

<p align="center">
  <img src="docs/screenshots/01-home.jpg" width="22%" alt="Pantalla principal con progreso del día"/>
  <img src="docs/screenshots/02-comidas.jpg" width="22%" alt="Registro de comidas del día"/>
  <img src="docs/screenshots/03-productos.jpg" width="22%" alt="Buscador de productos españoles"/>
  <img src="docs/screenshots/04-calendario.jpg" width="22%" alt="Calendario mensual con balance calórico"/>
</p>
<p align="center">
  <img src="docs/screenshots/05-resumen.jpg" width="22%" alt="Resumen con racha y balance semanal/mensual"/>
  <img src="docs/screenshots/06-logros.jpg" width="22%" alt="Logros desbloqueables"/>
  <img src="docs/screenshots/07-ajustes.jpg" width="22%" alt="Ajustes de dieta y objetivos diarios"/>
  <img src="docs/screenshots/08-perfiles.jpg" width="22%" alt="Selección de perfil multi-usuario"/>
</p>

### 📥 Descarga

- **🌐 Versión web**: [tabutaje.github.io/Kalo-app](https://tabutaje.github.io/Kalo-app/) — funciona en cualquier navegador, sin instalar nada
- **🤖 APK directo**: [última release](https://github.com/tabutaje/Kalo-app/releases/latest) (descárgalo y ábrelo en tu Android)
- **▶️ Google Play Store**: *próximamente* (en revisión)

---

## Stack técnico

- **Frontend**: React 19 + TypeScript + Vite 6 + Tailwind CSS 3
- **Móvil**: Capacitor 8 (Android + iOS)
- **Persistencia**: `localStorage` con soporte multi-perfil
- **Routing**: React Router (HashRouter)

## Estructura del proyecto

```
Kalo/
├── src/                          # Código fuente React
│   ├── pages/                    # Páginas (DailyLog, Dashboard, etc.)
│   ├── components/               # Componentes reutilizables
│   ├── context/                  # Contextos (AppContext, ShellContext)
│   ├── data/                     # Base de datos de productos seed
│   ├── types/                    # Tipos TypeScript
│   └── utils/                    # Utilidades (nutrition, storage, dates)
├── android/                      # Proyecto Android (Capacitor)
├── ios/                          # Proyecto iOS (Capacitor)
├── scripts/                      # Scripts auxiliares (gen-splash.cjs)
├── public/                       # Assets estáticos (logo, favicon)
├── play-store-assets/            # Material para Google Play
├── build-aab.ps1                 # Genera App Bundle firmado
├── build-apk.ps1                 # Genera APK firmado
└── capacitor.config.ts           # Configuración Capacitor
```

## Desarrollo local

Requisitos: **Node.js 20+**, **Java JDK 21+** (incluido con Android Studio), **Android Studio** con SDK 36.

```bash
# Instala dependencias
npm install

# Arranca en modo dev (navegador)
npm run dev

# Compila el bundle web
npm run build

# Sincroniza cambios al proyecto Android
npx cap sync android

# Abre Android Studio
npx cap open android
```

## Compilar APK / AAB firmado

Necesitas un keystore Android. Si no tienes uno:

```bash
keytool -genkey -v -keystore kalo-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias kalo
```

Copia `android/keystore.properties.example` a `android/keystore.properties` y rellena los valores:

```properties
storeFile=../../kalo-release-key.jks
storePassword=tu_password
keyAlias=tu_alias
keyPassword=tu_password
```

Luego genera el build (en Windows con PowerShell):

```powershell
# APK (para instalar directo en un móvil o sideload)
powershell -ExecutionPolicy Bypass -File .\build-apk.ps1

# AAB (obligatorio para subir a Google Play Store)
powershell -ExecutionPolicy Bypass -File .\build-aab.ps1
```

El artefacto firmado aparecerá en `android/app/build/outputs/apk/release/app-release.apk` (o `bundle/release/app-release.aab`).

## Privacidad

Kalo **no recoge ningún dato personal**. Todo se almacena localmente en el dispositivo. Puedes consultar la política completa en [`play-store-assets/Readme.md`](play-store-assets/Readme.md).

## Licencia

MIT — consulta el archivo [`LICENSE`](LICENSE) para los detalles.

---

Hecho con cariño en España 🇪🇸
