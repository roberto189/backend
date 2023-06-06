const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const toolRoutes = require('./toolRoutes');
const reviewRoutes = require('./reviewsRoutes');

router.use('/user', userRoutes);
router.use('/category', categoryRoutes);
router.use('/tool', toolRoutes);
router.use('/review',reviewRoutes)
module.exports = router;
