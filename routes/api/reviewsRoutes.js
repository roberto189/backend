const router = require('express').Router();
const {
  getSinglereviews,
  getreviewss,
  createreviews,
} = require('../../controllers/reviewsController');

router.route('/').get(getreviewss).reviews(createreviews);

router.route('/:reviewsId').get(getSinglereviews);

module.exports = router;
