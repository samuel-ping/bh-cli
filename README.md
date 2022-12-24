# BH CLI (BlurHash Command-Line Interface)

This is a CLI to run BlurHash utility commands in your terminal. This includes encoding image files into a BlurHash string, decoding a BlurHash string into an image file, and validating BlurHash strings.

## Installation
```bash
$ npm install -g bh-cli
```

## Usage
### Encoding an image file to a BlurHash
```bash
$ bh encode [options] <image_file>
```

### Decoding a BlurHash string into an image file
```bash
$ bh decode [options] <blurhash>
```

### Validating a BlurHash string
```bash
$ bh validate <blurhash>
```

## Contributing
Go for it!

## Credit
All credit goes to the [BlurHash](https://github.com/woltapp/blurhash) and [sharp](https://github.com/lovell/sharp) packages, I just smushed the two together into a CLI.