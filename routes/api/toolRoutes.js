
const router = require('express').Router();
const {tool} = require('../../models');

router.post("/", async (req, res) => {
  const newtool = new tool({ ...req.body });
  const insertedtool = await newtool.save();
  return res.status(201).json(insertedtool);
});

router.get("/", async (req, res) => {
  const alltools = await tool.find();
  return res.status(200).json(alltools);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const tool = await tool.findById(id);
  return res.status(200).json(dog);
});
router.post("/tool",async(req,res)=>{
  try {
    const newtool = await tool.create({
      toolName: req.body.toolName,
      amazonLink: req.body.amazonLink
      // review: [{ type: Schema.Types.ObjectId, ref: 'review' }],
    });
    console.log(`newtool: ${newtool}`)
    res.status(200).json(newtool);
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})
// router.get("/",async(req,res)=>{
//   tool.find()
//   .then(async (tools) => {
//     return res.json(tools);
//   })
//   .catch((err) => {
//     console.log(err);
//     return res.status(500).json(err);
//   });
// })
// const router = require('express').Router();
// const {
//   getTools,
//   getSingletool,
//   createtool,
// } = require('../../controllers/toolController');

// // /api/tools
// router.route('/').get(getTools).post(createtool);

// // /api/tools/:toolId
// router.route('/:toolId').get(getSingletool);

// module.exports = router;
module.exports = router;