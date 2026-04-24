# Kalo 🥗

App móvil de seguimiento de calorías y macros pensada para España: registra lo que comes buscando productos reales de Mercadona, Lidl, Carrefour, Dia, Aldi, Eroski, AhorraMás, Alcampo, Consum, Hipercor y más.

- 🇪🇸 Miles de productos españoles con la información nutricional ya cargada
- 📊 Objetivos diarios de calorías, proteínas, carbos y grasas
- 🧑‍🤝‍🧑 Multi-perfil para toda la familia (con foto o emoji como avatar)
- 🍳 Recetas y productos personalizados
- 📅 Calendario mensual y dashboard semanal
- 🔒 Privacidad total: todo se guarda en local, sin cuentas, sin tracking, sin anuncios
- 📴 Funciona 100% sin conexión

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
