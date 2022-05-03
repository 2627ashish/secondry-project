const parttypes = require('../Models/Parttype');

exports.getparttyes=(req,res)=>{
    parttypes.find()
    .then(response=>{
        res.status(200).json({
            message:"Pats Fetched",
            pats:response
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
}