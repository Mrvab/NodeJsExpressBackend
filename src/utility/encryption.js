const crypt = require('crypto-js')
// const encryptionSecretKey = process.env.E_SECRET_KEY
const encryptionSecretKey = 'MYsecretENCRYPTIONkey'

module.exports.encryptData = (data) => {
  const encryptRecord = crypt.AES.encrypt(data, encryptionSecretKey).toString()
  return encryptRecord
}

module.exports.decryptionData = (data) => {
  const decryptedData = crypt.AES.decrypt(data, encryptionSecretKey)
  return decryptedData
}
