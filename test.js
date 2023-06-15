const crypto = require('crypto')
const algorithm = 'aes-256-cbc' // Using AES encryption
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

// Encrypting text
function encrypt (text) {
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv)
  let encrypted = cipher.update(text)
  encrypted = Buffer.concat([encrypted, cipher.final()])
  return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') }
}

// Decrypting text
function decrypt (text) {
  const iv = Buffer.from(text.iv, 'hex')
  const encryptedText = Buffer.from(text.encryptedData, 'hex')
  const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv)
  let decrypted = decipher.update(encryptedText)
  decrypted = Buffer.concat([decrypted, decipher.final()])
  return decrypted.toString()
}

function createHash (text) {
  const hashed = crypto.sign(algorithm, text, key)
  return hashed
}

function verifyHash (text) {
  const verified = crypto.verify(algorithm, text, key)
  return verified
}

console.log(createHash("my supper secret password that should be safe "))

// Text send to encrypt function
// const hw = encrypt('Welcome to Tutorials Point...')
// console.log(hw)
// console.log(decrypt(hw))
