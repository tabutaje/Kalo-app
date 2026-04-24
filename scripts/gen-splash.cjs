/* Generate splash.png files for Android with:
 *  - emerald green (#10B981) background
 *  - centered white rounded-square tile containing the Kalo logo
 */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PROJECT = path.resolve(__dirname, '..');
const RES = path.join(PROJECT, 'android', 'app', 'src', 'main', 'res');
const LOGO = path.join(PROJECT, 'public', 'logo.png');

const EMERALD = { r: 0x10, g: 0xB8, b: 0x81 };  // #10B981
const TILE_BG = '#FFFFFF';                       // white rounded square
const CORNER_RATIO = 0.22;                       // radius relative to tile size
const TILE_RATIO = 0.55;                         // tile size = min(w,h) * ratio
const LOGO_INSIDE_RATIO = 0.78;                  // logo relative to tile

const targets = [
  // portrait (landscape swaps w/h)
  { dir: 'drawable',              w: 320,  h: 480  },
  { dir: 'drawable-port-ldpi',    w: 240,  h: 320  },
  { dir: 'drawable-port-mdpi',    w: 320,  h: 480  },
  { dir: 'drawable-port-hdpi',    w: 480,  h: 800  },
  { dir: 'drawable-port-xhdpi',   w: 720,  h: 1280 },
  { dir: 'drawable-port-xxhdpi',  w: 960,  h: 1600 },
  { dir: 'drawable-port-xxxhdpi', w: 1280, h: 1920 },
  { dir: 'drawable-night',              w: 320,  h: 480  },
  { dir: 'drawable-port-night-ldpi',    w: 240,  h: 320  },
  { dir: 'drawable-port-night-mdpi',    w: 320,  h: 480  },
  { dir: 'drawable-port-night-hdpi',    w: 480,  h: 800  },
  { dir: 'drawable-port-night-xhdpi',   w: 720,  h: 1280 },
  { dir: 'drawable-port-night-xxhdpi',  w: 960,  h: 1600 },
  { dir: 'drawable-port-night-xxxhdpi', w: 1280, h: 1920 },
  // landscape
  { dir: 'drawable-land-ldpi',    w: 320,  h: 240  },
  { dir: 'drawable-land-mdpi',    w: 480,  h: 320  },
  { dir: 'drawable-land-hdpi',    w: 800,  h: 480  },
  { dir: 'drawable-land-xhdpi',   w: 1280, h: 720  },
  { dir: 'drawable-land-xxhdpi',  w: 1600, h: 960  },
  { dir: 'drawable-land-xxxhdpi', w: 1920, h: 1280 },
  { dir: 'drawable-land-night-ldpi',    w: 320,  h: 240  },
  { dir: 'drawable-land-night-mdpi',    w: 480,  h: 320  },
  { dir: 'drawable-land-night-hdpi',    w: 800,  h: 480  },
  { dir: 'drawable-land-night-xhdpi',   w: 1280, h: 720  },
  { dir: 'drawable-land-night-xxhdpi',  w: 1600, h: 960  },
  { dir: 'drawable-land-night-xxxhdpi', w: 1920, h: 1280 },
];

async function buildTile(size) {
  // Rounded-square white tile containing the logo.
  const r = Math.round(size * CORNER_RATIO);
  const logoSize = Math.round(size * LOGO_INSIDE_RATIO);

  // resize logo preserving aspect ratio, padded to square with transparent background
  const logoBuf = await sharp(LOGO)
    .resize(logoSize, logoSize, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .png()
    .toBuffer();

  // white rounded-square with logo on top
  const maskSvg = Buffer.from(
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
      { input: maskSvg, top: 0, left: 0 },
      {
        input: logoBuf,
        top: Math.round((size - logoSize) / 2),
        left: Math.round((size - logoSize) / 2),
      },
    ])
    .png()
    .toBuffer();
}

async function buildSplash(w, h) {
  const tileSize = Math.round(Math.min(w, h) * TILE_RATIO);
  const tile = await buildTile(tileSize);

  return sharp({
    create: {
      width: w,
      height: h,
      channels: 3,
      background: EMERALD,
    },
  })
    .composite([
      {
        input: tile,
        top: Math.round((h - tileSize) / 2),
        left: Math.round((w - tileSize) / 2),
      },
    ])
    .png()
    .toBuffer();
}

async function main() {
  for (const t of targets) {
    const outDir = path.join(RES, t.dir);
    if (!fs.existsSync(outDir)) {
      console.log('skip (missing dir):', t.dir);
      continue;
    }
    const buf = await buildSplash(t.w, t.h);
    const out = path.join(outDir, 'splash.png');
    fs.writeFileSync(out, buf);
    console.log('wrote', path.relative(PROJECT, out), `${t.w}x${t.h}`);
  }

  // Also write ic_splash_logo.png for Android 12+ themed splash (used in styles).
  const icDir = path.join(RES, 'drawable');
  const iconSize = 432;  // recommended for windowSplashScreenAnimatedIcon
  const tile = await buildTile(iconSize);
  fs.writeFileSync(path.join(icDir, 'ic_splash_logo.png'), tile);
  console.log('wrote drawable/ic_splash_logo.png', `${iconSize}x${iconSize}`);

  console.log('\nDone.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
