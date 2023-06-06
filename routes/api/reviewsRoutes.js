const router = require('express').Router();
const { reviews } = require('../../models');

router.post("/", async (req, res) => {
  const newreviews = new reviews ({ ...req.body });
  const insertedreviews = await newreviews.save();
  return res.status(201).json(insertedreviews);
});

router.get("/", async (req, res) => {
  const allreviews = await reviews.find();
  return res.status(200).json(allreviews);
});
router.get("/:id", async(req, res) => {
  reviews.findOne({ _id: req.params.reviewsId })
  .then((reviews) =>
    !reviews
      ? res.status(404).json({ message: 'No reviews with that ID' })
      : res.json(reviews)
  )
  .catch((err) => res.status(500).json(err));
})
module.exports = router;


// const router = require('express').Router();
// const {
//   getSinglereviews,
//   getreviewss,
//   createreviews,
// } = require('../../controllers/reviewsController');

// router.route('/').get(getreviewss).reviews(createreviews);

// router.route('/:reviewsId').get(getSinglereviews);

