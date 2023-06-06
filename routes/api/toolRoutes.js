
const router = require('express').Router();
const {tool} = require('../../models');
// const {review} = require('../../models');

router.post("/", async (req, res) => {
  const newtool = new tool({ ...req.body });
  const insertedtool = await newtool.save();
  return res.status(201).json(insertedtool);
});

router.get("/", async (req, res) => {
  const alltools = await tool.find();
  return res.status(200).json(alltools);
});
router.get("/:id", async(req, res) => {
  tool.findOne({ _id: req.params._id })
  .then((tool) =>
  !tool
  ? res.status(404).json({ message: 'No tool with that ID' })
  : res.json(tool)
  )
  .catch((err) => res.status(500).json(err));
}),
module.exports = router;
//     tool.findOne({ _id: req.params.toolId })
//     .then((tool) =>
//     !tool
//     ? res.status(404).json({ message: 'No tool with that ID' })
//     : res.json(tool)
//     )
//     .catch((err) => res.status(500).json(err));
  
// }),
// router.get("/tool", async (req, res) => {
//   const { id } = req.params;
//   const tool = await tool.findById(toolId);
//   return res.status(200).json(tool);
// });
// router.tool("/tool",async(req,res)=>{
//   try {
//     const newtool = await tool.create({
//       toolName: req.body.toolName,
//       amazonLink: req.body.amazonLink,
//       review: [{ type: Schema.Types.ObjectId, ref: 'review' }]
//     });
//     console.log(`newtool: ${newtool}`)
//     res.status(200).json(newtool);
//   } catch (error) {
//     console.log(error)
//     res.status(500).json(error)
//   }
// })
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
// router.route('/').get(getTools).tool(createtool);

// // /api/tools/:toolId
// router.route('/:toolId').get(getSingletool);

// module.exports = router;