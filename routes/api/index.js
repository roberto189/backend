const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const toolRoutes = require('./toolRoutes');
const reviewsRoutes = require('./reviewsRoutes');

router.use('/user', userRoutes);
router.use('/category', categoryRoutes);
router.use('/tool', toolRoutes);
router.use('/reviews',reviewsRoutes);
module.exports = router;
