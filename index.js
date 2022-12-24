#! /usr/bin/env node
const { program } = require('commander')

const encode = require('./commands/encode')

program
  .name('blurhash-cli')
  .description('CLI to use BlurHash utilities in your terminal.')
  .version('1.0.0');

program.command('encode')
    .description('Encodes the image file into a BlurHash string and displays it in the terminal.')
    .argument('<image_file>', 'The image file to convert into a BlurHash string.')
    .option('-x, --componentX <int>', 'Number of horizontal components', '4')
    .option('-y, --componentY <int>', 'Number of vertical components', '4')
    .action(encode)

program.parse()