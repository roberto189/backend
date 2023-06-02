const router = require('express').Router();
const {
  getcategory,
  getSinglecategory,
  createcategory,
  deletecategory,
} = require('../../controllers/categoryController');

// /api/category
router.route('/').get(getcategory).post(createcategory);

// /api/category/:category_id
router.route('/:category_id').get(getSinglecategory).delete(deletecategory);

module.exports = router;