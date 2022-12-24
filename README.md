# BH CLI (BlurHash Command-Line Interface)

This is a CLI to run BlurHash utility commands in your terminal. This includes encoding image files into a BlurHash string and decoding a BlurHash string into an image file.

## Installation
```bash
$ npm install -g bh-cli
```

## Usage
### Encoding an image file to a BlurHash
```bash
$ blurhash encode [options] <image_file>
```

### Decoding a BlurHash string into an image file
```bash
$ blurhash decode [options] <blurhash>
```

## Contributing
Go for it!

## Credit
All credit goes to the [BlurHash](https://github.com/woltapp/blurhash) and [sharp](https://github.com/lovell/sharp) packages, I just smushed the two together into a CLI.