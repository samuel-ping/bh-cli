const { encode: blurhashEncode } = require('blurhash')
const sharp = require('sharp');

async function encode(imageFile, options) {
    const { err, data, info } = await sharp(imageFile).raw().toBuffer({ resolveWithObject: true })
    if(err) console.error("Error parsing file: ", err);
    
    const pixelArray = new Uint8ClampedArray(data.buffer);

    const blurhash = blurhashEncode(pixelArray, info.width, info.height, options.componentX, options.componentY);
    console.log(blurhash);
}

module.exports = encode