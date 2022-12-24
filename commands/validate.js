const { isBlurhashValid  } = require('blurhash');

async function validate(blurhash) {
    const {result, errorReason} = isBlurhashValid(blurhash);
    
    if(result) {
        console.log('BlurHash is valid.');
    } else {
        console.log('Invalid BlurHash: ', errorReason);
    }
}

module.exports = validate;