const crypto = require('node:crypto');
// const i18next = require('i18next');

// const secret = "Somekey"
// const hash = crypto.createHmac('sha512', secret).update("This is secret message").digest('hex');
// console.log(hash.length);

// let a = crypto.createCipheriv("aes-128-ccm", Buffer(secret), Buffer("This is secret message"), 2);
// console.log(a);

// const ciphers = crypto.getCiphers();
// console.log(ciphers);

// const cipherInfo = crypto.getCipherInfo('aes-128-cbc');
// console.log(cipherInfo);


const server = crypto.createDiffieHellman(512);
const prime = server.getPrime('hex');

console.log(prime);


const alice = crypto.createDiffieHellman(prime);
alice.generateKeys();

const alicePub = alice.getPublicKey('hex');
console.log("AlicePub: ", alicePub);


const bob = crypto.createDiffieHellman(prime);
bob.generateKeys();

const bobPub = bob.getPublicKey('hex');
console.log("BobPub: ", bobPub);

const baSecret = bob.computeSecret(alicePub);
const abSecret = alice.computeSecret(bobPub);

console.log(baSecret);
console.log("------------");
console.log(abSecret);

// const plainText = "Hello, world!!!";
// const iv = crypto.randomBytes(12);
// const cipher = crypto.createCipheriv('aes-128-ccm', alicePub, iv, {authTagLength: 16});

// const encrypted = cipher.update(plainText, 'utf8', 'hex');
// encrypted += cipher.final('hex');
// console.log("Encrypted: ", encrypted);

// const authTag = cipher.getAuthTag().toString('hex');
// console.log(authTag);