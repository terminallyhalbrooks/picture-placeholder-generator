const axios = require('axios');
const sharp = require('sharp');
const Jimp = require('jimp');
const fetch = require('node-fetch');
const { createCanvas } = require('canvas');

// Function to generate placeholder
async function generatePlaceholder(url, width = 150, height = 150, color = '#cccccc', textColor = '#969696') {
  try {
    // Fetch the image from the URL
    const response = await axios({ url, responseType: 'arraybuffer' });
    const originalImage = await sharp(response.data).resize(width, height).toBuffer();

    // Create a placeholder canvas
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Fill the background color
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);

    // Add text
    ctx.fillStyle = textColor;
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Placeholder', width / 2, height / 2);

    // Convert canvas to image buffer
    const placeholder = await canvas.toBuffer();

    // Return the original and placeholder images
    return { original: originalImage, placeholder };
  } catch (error) {
    console.error('Error generating placeholder:', error);
    throw error;
  }
}

module.exports = generatePlaceholder;
