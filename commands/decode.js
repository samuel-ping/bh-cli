const { decode: blurhashDecode } = require('blurhash');
const sharp = require('sharp');

async function decode(blurhash, options) {
    const pixelArray = blurhashDecode(blurhash, options.width, options.height);

    const {err, info} = await sharp(pixelArray, {
        raw: {
            width: options.width,
            height: options.height,
            channels: 4
        }
    }).toFile(`${options.filename}.${options.type}`);

    console.log("Wrote image to file: ", `${options.filename}.${options.type}`);
}

module.exports = decode;