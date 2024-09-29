const jwt = require('jsonwebtoken')
const secretCode = process.env.SECRET_CODE||'@*$(!$!'

const tokenGenerator = (data)=>{
    const {id,userName,email,passwod} = data
    return(
        jwt.sign({id,userName,email,passwod},secretCode)
    )
}

const tokenVerifier = (data)=>{
    return jwt.verify(data,secretCode)
    
}

module.exports = {tokenGenerator,tokenVerifier}