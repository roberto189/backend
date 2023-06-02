const router = require('express').Router();
const {user} = require('../../models');
const bcrypt = require("bcrypt")

router.post("/",async(req,res)=>{
  try {
    const newuser = await user.create({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 4),

    });
    console.log(`newuser: ${newuser}`)
    res.status(200).json(newuser);
} catch (error) {
    console.log(error)
    res.status(500).json(error)
}
})
router.get("/",async(req,res)=>{
  user.find()
      .then(async (users) => {
      
        return res.json(users);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
})
module.exports = router;