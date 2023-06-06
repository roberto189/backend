const router = require('express').Router();
const { category } = require('../../models');
// const {review} = require('../../models');

router.post("/", async (req, res) => {
  const newcategory = new category({ ...req.body });
  const insertedcategory = await newcategory.save();
  return res.status(201).json(insertedcategory);
});

router.get("/", async (req, res) => {
  const allcategorys = await category.find();
  return res.status(200).json(allcategorys);
});
router.get("/:id", async(req, res) => {
  category.findOne({ _id: req.params._id })
  .then((category) =>
  !category
  ? res.status(404).json({ message: 'No category with that ID' })
  : res.json(category)
  )
  .catch((err) => res.status(500).json(err));
}),
module.exports = router;


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