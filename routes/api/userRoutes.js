const router = require('express').Router();
const {user} = require('../../models');
const bcrypt = require("bcrypt")

router.post("/login", async (req,res)=>{
  user.findOne({
      where:{
          username:req.body.username
      }
  }).then(founduser=>{
      if(!founduser){
          return res.status(401).json({msg:"invalid username"})
      } else if(!bcrypt.compareSync(req.body.password,founduser.password)){
          return res.status(401).json({msg:"invalid password"})
      } else {
         return res.json(founduser)
      }
  })
})

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
router.get("/:userId",async(req,res) => {
user.findOne({ _id: req.params.userId })
// .select('-__v')
.then((user) =>
  !user
    ? res.status(404).json({ message: 'No user with that ID' })
    : res.json(user)
)
.catch((err) => res.status(500).json(err));
})
// router.get("/:userid"), async (req, res)=>{
//     const user = await user.findOne({_Id: req.params.id})
//     .select('-__v')
//     res.send(user)
// }

module.exports = router;