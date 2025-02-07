const jwt = require('jsonwebtoken');
const User = require('../models/User');

//Authorization middleware
const requireAuth = async (req,res,next) => {

    const {authorization} = req.headers;

    if(!authorization){
        return res.status(401).json({error: "Authorization token is required to access this resource"});
    }

    const token = authorization.split(' ')[1];

    try{
        const {_id} = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findOne({_id:_id}).select('_id');

        next();
    } catch(error){
        console.log(error);
        res.status(401).json({error: "Unauthorized request"});
    }
}

module.exports = {requireAuth};