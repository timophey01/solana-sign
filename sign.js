const web3 = require('@solana/web3.js');
const bs58 = require('bs58').default;
const { readFileSync } = require('fs');
const { Transaction } = web3
const config = JSON.parse(readFileSync('./config.json'));

(async () => {

  let connection = new web3.Connection(web3.clusterApiUrl(config.network), );

  let tx = Transaction.from(Buffer.from(process.argv[2], 'base64'));

  for (const pk of config.privateKeys) {
    const signer = web3.Keypair.fromSecretKey(new Uint8Array(bs58.decode(pk)));
    tx.partialSign(signer)
  }
  console.log(tx.serialize().toString('base64'))
})();
