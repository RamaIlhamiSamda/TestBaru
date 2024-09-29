const bcrypt = require('bcrypt')
const saltRound  = process.env.SALT || 5

const encryptPassword = (data)=>{
    return(
        bcrypt.hashSync(String(data),saltRound)
    )
}

const decryptPassword = (data,hashPwd)=>{
    return(
        bcrypt.compareSync(data,hashPwd)
    )
}


module.exports = {encryptPassword,decryptPassword}