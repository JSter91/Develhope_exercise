const crypto = require('crypto');

console.log(Object.keys(crypto));

const randomBytes = crypto.randomBytes(8).toString('hex');
console.log('Random ID:', randomBytes);
