const {tokenVerifier} = require('../helper/jsonwebtoken')

const authentication = (req,res,next)=>{
    const access_token = req.headers.access_token
    if(access_token){
        console.log("ada token")
        try{
            let verifyToken = tokenVerifier(access_token)
            req.userData = verifyToken
            next()
        }
        catch(err){
            res.status(404).json(err)
        }
    }
    else{
        res.status(404).json({
            message:"token salah"
        })
    }
}

module.exports = {authentication}
