/* Generate Google Play Store graphic assets:
 *  - icon-512.png         : 512x512 hi-res app icon (emerald BG, white rounded tile, logo)
 *  - feature-graphic.png  : 1024x500 feature graphic for the top of the store listing
 */
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const PROJECT = path.resolve(__dirname, '..');
const LOGO = path.join(PROJECT, 'public', 'logo.png');
const OUT = path.join(PROJECT, 'play-store-assets');

if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const EMERALD = { r: 0x10, g: 0xB8, b: 0x81 };
const EMERALD_DARK = '#059669';
const TILE_BG = '#FFFFFF';

async function buildRoundedTile(size, cornerRatio = 0.22, logoInsideRatio = 0.78) {
  const r = Math.round(size * cornerRatio);
  const logoSize = Math.round(size * logoInsideRatio);

  const logoBuf = await sharp(LOGO)
    .resize(logoSize, logoSize, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .png()
    .toBuffer();

  const tileSvg = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
       <rect x="0" y="0" width="${size}" height="${size}" rx="${r}" ry="${r}" fill="${TILE_BG}"/>
     </svg>`
  );

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([
      { input: tileSvg, top: 0, left: 0 },
      {
        input: logoBuf,
        top: Math.round((size - logoSize) / 2),
        left: Math.round((size - logoSize) / 2),
      },
    ])
    .png()
    .toBuffer();
}

async function buildHiResIcon() {
  // 512x512 icon — Play Console requires it as a 32-bit PNG with no alpha preference, but alpha is allowed.
  // Emerald background with rounded white tile + logo — matches the splash and launcher look.
  const SIZE = 512;
  const tileSize = Math.round(SIZE * 0.80);
  const tile = await buildRoundedTile(tileSize);

  return sharp({
    create: {
      width: SIZE,
      height: SIZE,
      channels: 3,
      background: EMERALD,
    },
  })
    .composite([
      {
        input: tile,
        top: Math.round((SIZE - tileSize) / 2),
        left: Math.round((SIZE - tileSize) / 2),
      },
    ])
    .png()
    .toBuffer();
}

async function buildFeatureGraphic() {
  // 1024x500 — no transparency, must be PNG or JPEG.
  // Emerald gradient background, rounded-square logo tile on the left,
  // app name + tagline on the right, in white text.
  const W = 1024;
  const H = 500;

  const tileSize = 300;
  const tile = await buildRoundedTile(tileSize, 0.22, 0.78);

  const bgSvg = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
       <defs>
         <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
           <stop offset="0%" stop-color="#10B981"/>
           <stop offset="100%" stop-color="${EMERALD_DARK}"/>
         </linearGradient>
       </defs>
       <rect x="0" y="0" width="${W}" height="${H}" fill="url(#g)"/>
       <!-- subtle decorative circles -->
       <circle cx="880" cy="80"  r="110" fill="#ffffff" fill-opacity="0.06"/>
       <circle cx="960" cy="420" r="160" fill="#ffffff" fill-opacity="0.05"/>
       <circle cx="100" cy="450" r="90"  fill="#ffffff" fill-opacity="0.06"/>
     </svg>`
  );

  const textSvg = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
       <style>
         .title    { font: 700 92px 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; fill: #ffffff; }
         .subtitle { font: 500 34px 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; fill: #ECFDF5; }
         .pill     { font: 600 22px 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; fill: #065F46; }
       </style>
       <text x="430" y="215" class="title">Kalo</text>
       <text x="430" y="275" class="subtitle">Contador de calorías</text>
       <text x="430" y="315" class="subtitle">y nutrición en España</text>
       <!-- feature pills -->
       <g transform="translate(430,350)">
         <rect x="0"   y="0" width="170" height="44" rx="22" ry="22" fill="#ffffff"/>
         <text x="85"  y="29" class="pill" text-anchor="middle">Sin conexión</text>
         <rect x="186" y="0" width="170" height="44" rx="22" ry="22" fill="#ffffff"/>
         <text x="271" y="29" class="pill" text-anchor="middle">Multi-perfil</text>
       </g>
     </svg>`
  );

  return sharp({
    create: { width: W, height: H, channels: 3, background: EMERALD },
  })
    .composite([
      { input: bgSvg, top: 0, left: 0 },
      { input: tile, top: Math.round((H - tileSize) / 2), left: 80 },
      { input: textSvg, top: 0, left: 0 },
    ])
    .png()
    .toBuffer();
}

async function main() {
  const icon = await buildHiResIcon();
  fs.writeFileSync(path.join(OUT, 'icon-512.png'), icon);
  console.log('wrote play-store-assets/icon-512.png 512x512');

  const feature = await buildFeatureGraphic();
  fs.writeFileSync(path.join(OUT, 'feature-graphic.png'), feature);
  console.log('wrote play-store-assets/feature-graphic.png 1024x500');

  console.log('\nDone.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
