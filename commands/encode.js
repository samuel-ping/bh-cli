const { encode: blurhashEncode } = require('blurhash');
const sharp = require('sharp');

async function encode(imageFile, options) {
    const { err, data, info } = await sharp(imageFile)
        .raw()
        .flatten({ background: options.replaceAlpha }) // replace alpha channel with specified color
        .ensureAlpha() // seems redundant, but need to add the alpha channel back
        .toBuffer({ resolveWithObject: true });
    
    const pixelArray = new Uint8ClampedArray(data.buffer);

    const blurhash = blurhashEncode(pixelArray, info.width, info.height, options.componentX, options.componentY);

    console.log(blurhash);
}

module.exports = encode