#!/usr/bin/env node

/**
 * Script to generate favicon files from the Roadrunners logo SVG
 * 
 * This script requires the 'sharp' package to be installed:
 * npm install --save-dev sharp
 * 
 * Then run: node scripts/generate-favicons.js
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is installed
let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.log('⚠️  The "sharp" package is not installed.');
  console.log('📦 Please install it by running:');
  console.log('   npm install --save-dev sharp');
  console.log('\nThen run this script again:');
  console.log('   node scripts/generate-favicons.js');
  process.exit(1);
}

const svgPath = path.join(__dirname, '../public/images/roadrunners-logo-on-dark.svg');
const publicDir = path.join(__dirname, '../public');

// Favicon configurations
const faviconSizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-96x96.png', size: 96 },
  { name: 'favicon-192x192.png', size: 192 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'apple-touch-icon-precomposed.png', size: 180 },
];

async function generateFavicons() {
  console.log('🏃 Generating favicons from Roadrunners logo...\n');

  // Check if SVG exists
  if (!fs.existsSync(svgPath)) {
    console.error('❌ SVG file not found at:', svgPath);
    process.exit(1);
  }

  // Read the SVG file
  const svgBuffer = fs.readFileSync(svgPath);

  // Generate each favicon size
  for (const config of faviconSizes) {
    try {
      await sharp(svgBuffer)
        .resize(config.size, config.size, {
          fit: 'contain',
          background: { r: 33, g: 31, b: 54, alpha: 1 } // Dark background color from the theme
        })
        .png()
        .toFile(path.join(publicDir, config.name));
      
      console.log(`✅ Generated ${config.name} (${config.size}x${config.size})`);
    } catch (error) {
      console.error(`❌ Failed to generate ${config.name}:`, error.message);
    }
  }

  // Generate ICO file (multi-resolution)
  try {
    // For ICO, we'll use the 32x32 version as a base
    await sharp(svgBuffer)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 33, g: 31, b: 54, alpha: 1 }
      })
      .png()
      .toFile(path.join(publicDir, 'favicon.ico'));
    
    console.log('✅ Generated favicon.ico');
  } catch (error) {
    console.error('❌ Failed to generate favicon.ico:', error.message);
  }

  // Generate site.webmanifest
  const manifest = {
    name: 'Roadrunners Track Club',
    short_name: 'Roadrunners',
    description: 'Professional track & field training for youth athletes',
    icons: [
      {
        src: '/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
    theme_color: '#211F36',
    background_color: '#211F36',
    display: 'standalone',
    start_url: '/',
    orientation: 'portrait'
  };

  fs.writeFileSync(
    path.join(publicDir, 'site.webmanifest'),
    JSON.stringify(manifest, null, 2)
  );
  console.log('✅ Generated site.webmanifest');

  console.log('\n🎉 All favicons generated successfully!');
  console.log('📁 Files saved to: /public/');
  console.log('\n💡 Next steps:');
  console.log('1. Install the sharp package if you haven\'t: npm install --save-dev sharp');
  console.log('2. Run the build to see the favicons in action: npm run dev');
}

// Run the script
generateFavicons().catch(console.error);
