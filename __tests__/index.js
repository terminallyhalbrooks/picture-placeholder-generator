const generatePlaceholder = require('../index');
const fs = require('fs');
const path = require('path');

describe('Placeholder Generation', () => {
  it('should generate a placeholder image', async () => {
    const { placeholder } = await generatePlaceholder('https://example.com/image.jpg');
    expect(placeholder).toBeDefined();
    // Save placeholder to disk for manual inspection (optional)
    // fs.writeFileSync(path.resolve(__dirname, 'placeholder.jpg'), placeholder);
  });
});
