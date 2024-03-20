# Image Placeholder Generator

Generates image placeholders on the fly with custom dimensions and colors.

## Features

- Generate placeholders from image URLs.
- Customize dimensions and background/text color.
- Utilizes `sharp`, `jimp`, and `canvas` for image processing.

## Installation

```sh
npm install picture-placeholder-generator
```

## Usage

```javascript
const generatePlaceholder = require('picture-placeholder-generator');

async function createPlaceholder() {
const { original, placeholder } = await generatePlaceholder('https://your-image-url.com/image.jpg', 200, 200, '#cccccc', '#969696');
// Use `original` and `placeholder` buffers as needed
}

createPlaceholder();
```

## API

`generatePlaceholder(url, width, height, color, textColor)`

- `url`: Image URL to generate the placeholder for.
- `width`: Width of the placeholder image (default 150).
- `height`: Height of the placeholder image (default 150).
- `color`: Background color of the placeholder (default `\#cccccc`).
- `textColor`: Color of the placeholder text (default `\#969696`).

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.

## License

MIT
