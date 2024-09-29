const { tokenVerifier,tokenGenerator } = require('../helper/jsonwebtoken')
const { decryptPassword } = require('../helper/bcrypt')
const {user,posting} = require('../models')

class userController{
    static async getUser(req,res){
        try{
            let result = await user.findAll({
            })
            res.status(200).json(result)
        }
        catch(err){
            res.status(500).json(err)
        }
    }
    static async create(req,res){
        try{
        const {userName,email,passwod} = req.body

            let result = await user.create({
                userName,email,passwod
            })
            res.status(200).json(result)
        }
        catch(err){
            res.status(500).json(err)
        }
    }
    static async login(req, res) {
        try {
            const { email, passwod } = req.body;
            let foundEmail = await user.findOne({
              where: { email },
            });
            if(foundEmail){
                if(decryptPassword(passwod,foundEmail.passwod)){
                    let access_token = tokenGenerator(foundEmail)
                    res.status(201).json({access_token})
                    
                    let verifyToken = tokenVerifier(access_token)
                    console.log(verifyToken)
                }
                else{
                    res.status(404).json(err)
                }
            }
            else{

            }
          } catch (err) {
            res.status(404).json(err);
          }
      }
}

module.exports = userController