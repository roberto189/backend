const router = require('express').Router();
const { category, tool } = require('../../models');

// const {review} = require('../../models');

router.post("/", async (req, res) => {
  const newcategory= new category({ ...req.body });
  const insertedcategory = await newcategory.save();
  return res.status(201).json(insertedcategory);
});
// router.post("/", (req,res)=>{
//   const newcategory = new category({
//     ...req.body
//   })
//   newcategory.save();
//   if (newcategory){
//     res.status(200).json(newcategory)
//   }else{
//     res.status(500)
//   }
// })

router.get("/", async (req, res) => {
  const allcategorys = await category.find();
  return res.status(200).json(allcategorys);
});

router.get("/:categoryid", async(req, res) => {

  console.log("GET ALL category!")
  category.findOne({ _id: req.params.categoryid })
  .select('-__v')
  .populate('tool')
  .then((category) =>
  !category
  ? res.status(404).json({ message: 'No category with that ID' })
  : res.json(category)
  )
  .catch((err) => res.status(500).json(err));
});
// router.get("/:categoryid/tools", async (req, res) => {
//   category.findOne({ _id: req.params.categoryid })
//   .select('-__v')
//   .populate('tool')
//   .then((category) =>
//   !category
//   ? res.status(404).json({ message: 'No category with that ID' })
//   : res.json(category.tool)
//   )
//   .catch((err) => res.status(500).json(err));
// });
router.delete("/:categoryid", async (req,res)=>{
  category.findOneAndDelete({ _id: req.params.categoryid })
      .then((category) =>{
        console.log(category)
        !category
          ? res.status(404).json({ message: 'No category with that ID' })
          : tool.deleteMany({ _id: { $in: category.tool } })   
           .then(() => res.json({ message: 'category and tools deleted!' }))
}
      )
      .catch((err) =>  {
        console.log(err)
        res.status(500).json(err)
      }) ;
})
module.exports = router;

// router.get("/:userId",async(req,res) => {
//   user.findOne({ _id: req.params.userId })
//   // .select('-__v')
//   .then((user) =>
//     !user
//       ? res.status(404).json({ message: 'No user with that ID' })
//       : res.json(user)
//   )
//   .catch((err) => res.status(500).json(err));
//   })
// const {
    //   getcategory,/*  */
    //   getSinglecatego/*  */ry,
    //   createcategory,/*  */
    // } = require('../../controllers/categoryController');

// const { category } = require('../../models');

    
//     // // /api/category
//     // router.route('/api/category').get(getcategory).post(createcategory);
    
//     // // /api/categorys/:categoryId
//     // router.route('/:categoryId').get(getSinglecategory);