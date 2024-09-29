const {posting,user} = require('../models')
const path = require('path');

class postingController {
    static async  getPosting(req,res){
        try{
            let result = await posting.findAll({
                
            })
            res.status(200).json(result)
        }
        catch(err){
            res.status(500).json(err)
        }
    }
    static async create(req,res){
        try{
            
            const {tanggal,postingan,userId} = req.body
            
            let result = await posting.create({
                tanggal,postingan,userId
            })
            res.status(200).json(result)
            
        }
        catch(err){
            res.status(500).json(err)
        }
    }
}

module.exports = postingController