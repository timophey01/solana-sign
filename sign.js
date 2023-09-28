const web3 = require('@solana/web3.js');
const bs58 = require('bs58');
const { readFileSync } = require('fs');
const { Transaction, StakeProgram, Authorized, Lockup, PublicKey, SendTransactionError } = web3

const { setTimeout } = require('timers/promises');
const config = JSON.parse(readFileSync('./config.json'));

(async () => {

  let connection = new web3.Connection(web3.clusterApiUrl(config.network), );
  let payer = web3.Keypair.fromSecretKey(new Uint8Array(bs58.decode(config.privateKey)));
  let recentBlockhash = await connection.getRecentBlockhash();
  console.log(recentBlockhash)
  let tx = Transaction.from(Buffer.from(process.argv[2], 'base64'));

  tx.sign(payer)
  console.log(tx.serialize().toString('base64'))
})();
