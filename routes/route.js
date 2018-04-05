const express = require('express');
const router = express.Router();

const Builder = require('../models/builders');
const builder = require('./../controller/builder')
//here api is contact

router.get('/',(req,res,next)=>{ 
  console.log('..........')
  res.json({success: true});
});

router.get('/builders',(req,res,next)=>{ 
    Builder.find(function(err,builders){
        res.json(builders);
    })
});
// for signup
router.get('/register',builder.register);

router.post('/register', (req, res, next) => {
    let newUser = new User({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    });
  
    User.addUser(newUser, (err, user) => {
      if(err){
        res.json({success: false, msg:'Failed to register user'});
      } else {
        res.json({success: true, msg:'User registered'});
      }
    });
  });

// Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
  
    User.getUserByUsername(username, (err, user) => {
      if(err) throw err;
      if(!user){
        return res.json({success: false, msg: 'User not found'});
      }
  
      User.comparePassword(password, user.password, (err, isMatch) => {
        if(err) throw err;
        if(isMatch){
          const token = jwt.sign({data: user}, config.secret, {
            expiresIn: 604800 // 1 week
          });
  
          res.json({
            success: true,
            token: `Bearer ${token}`,
            user: {
              id: user._id,
              name: user.name,
              username: user.username,
              email: user.email
            }
          });
        } else {
          return res.json({success: false, msg: 'Wrong password'});
        }
      });
    });
  });


router.post('/builder',(req,res,next)=>{
    let newBuilder = new Builder({
        name: req.body.name,
        designation: req.body.designation,
        phone: req.body.phone,
        email: req.body.email,
        website: req.body.website,
        address: req.body.address,
        pinf: req.body.pinf,
        caption: req.body.caption,
        university: req.body.university,
        uni_sub: req.body.uni_sub,
        detailed_qualification: req.body.detailed_qualification,
        uni_duration: req.body.uni_duration,
        university: req.body.university,
        uni_su: req.body.uni_su,
        detailed_qualificatio: req.body.detailed_qualificatio,
        uni_duratio: req.body.uni_duratio,
        tech_heading: req.body.tech_heading,
        tech_detail: req.body.tech_detail

    });
    newBuilder.save((err,builder)=>{
        if(err){
            res.json({msg: 'Failed to add contcact'});
        }
        else{
            res.json({msg: 'contcact added successfully'});
        }
    });
    
});

router.delete('/builder/:id',(req,res,next)=>{

});
module.exports = router;