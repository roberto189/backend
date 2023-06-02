const router = require('express').Router();
const {
  gettool,
  getSingletool,
  createtool,
  deletetool,
} = require('../../controllers/toolController');

// /api/tool
router.route('/').get(gettool).post(createtool);

// /api/tool/:tool_id
router.route('/:tool_id').get(getSingletool).delete(deletetool);

module.exports = router;