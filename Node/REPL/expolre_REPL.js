// Import the crypto module
const crypto = require('crypto');

// List methods provided by the crypto module
console.log(Object.keys(crypto));

// Generate a random ID using the randomBytes method
const randomBytes = crypto.randomBytes(8).toString('hex');
console.log('Random ID:', randomBytes);
