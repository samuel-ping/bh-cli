#! /usr/bin/env node
const { program } = require('commander');

const encode = require('./commands/encode');
const decode = require('./commands/decode');
const validate = require('./commands/validate');

program
  .name('bh-cli')
  .description('CLI to run the BlurHash commands in your terminal.')
  .version('1.0.0');

program.command('encode')
    .description('Encodes the image file into a BlurHash string and displays it in the terminal.')
    .argument('<image_file>', 'The image file to convert into a BlurHash string.')
    .option('-a, --replace-alpha <hex_color>', 'Replaces the alpha channel from the image file with specified color before encoding.', '#ffffff')
    .option('-x, --componentX <number>', 'Number of horizontal components', 4)
    .option('-y, --componentY <number>', 'Number of vertical components', 4)
    .action(encode);

program.command('decode')
    .description("Decodes the BlurHash string into an image file and displays it in the terminal.")
    .argument('<blurhash_string>', 'The BlurHash string to convert into an image file.')
    .requiredOption('-f, --filename <name>', 'Name of the output image file.')
    .option('-t, --type <string>', 'Type of the output image file.', 'png')
    .option('-w, --width <width>', 'Width of the output image file.', 32)
    .option('-h, --height <height>', 'Height of the output image file.', 32)
    .action(decode);

program.command('validate')
  .description('Validates the BlurHash string and displays the result in the terminal.')
  .argument('<blurhash_string>', 'The BlurHash string to validate.')
  .action(validate);

program.parse();