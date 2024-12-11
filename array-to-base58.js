
const bs58 = require('bs58').default;

console.log(bs58.encode(new Uint8Array(process.argv[2].split(','))));
