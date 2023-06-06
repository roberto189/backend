const router = require('express').Router();
const {review} = require('../../models');
// const {review} = require('../../models');

router.post("/", async (req, res) => {
  const newreview = new review({ ...req.body });
  const insertedreview = await newreview.save();
  return res.status(201).json(insertedreview);
});

router.get("/", async (req, res) => {
  const allreviews = await review.find();
  return res.status(200).json(allreviews);
});
router.get("/:id", async(req, res) => {
  review.findOne({ _id: req.params.reviewId })
  .then((review) =>
    !review
      ? res.status(404).json({ message: 'No review with that ID' })
      : res.json(review)
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

