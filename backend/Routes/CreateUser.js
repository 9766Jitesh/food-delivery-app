const express = require('express');
const router = express.Router();
const User = require('../models/User')
const {body,validationResult}=require('express-validator')

router.post('/createuser',
[body('enail').isEmail(),
body('password','Incorrect password').isLength({min: 5}),
body('name','enter Valid Name').isLength({min: 5})]
,async (req, res) => {
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({error :errors.array() })
    }
    try {
        await User.create({
            name: req.body.name,
            location: req.body.location,
            email:req.body.email,
            password:req.body.password,
            
        })

        res.json({ sucess: true });
    } catch (error) {
        console.log(error);
        res.json({ sucess: false })
    }
});

module.exports = router;