const router = require('express').Router();
const {user} = require('../models');
const bcrypt = require("bcrypt")

router.post("/",async(req,res)=>{
  try {
    const newuser = await user.create({
        username: req.body.username,
        password: bcrypt.hashSync(req,body.password, 4),

    });
    console.log(`newuser: ${newuser}`)
    res.status(200).json(newuser);
} catch (error) {
    console.log(error)
    res.status(500).json(error)
}
})
module.exports = router;