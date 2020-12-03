require('dotenv').config()
const jwt = require('jsonwebtoken')
module.exports = function (req, res, next) {
  const token = req.headers['authorization']
  if (token == null) return res.sendStatus(401)
  try {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send({ msg: 'Token invalid' })
      }
      else {
        req.user = decoded.user
        next()
      }
    })

  } catch (err) {
    return res.status(401).send('Error')
  }
}