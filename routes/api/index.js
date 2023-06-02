const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const toolRoutes = require('./toolRoutes');

router.use('/user', userRoutes);
router.use('/category', categoryRoutes);
router.use('/tool', toolRoutes);

module.exports = router;
