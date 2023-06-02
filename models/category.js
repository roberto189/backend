const { Schema, model } = require('mongoose');

const categorySchema = new Schema(
{
    category_id:{
        type: ID,
    },
    categoryname: {
        type: String,
        required: true,
        unique: true,
    },
    backgroundImage: {
        type: String,
        required: true,
    },
    tool: [{ type: Schema.Types.ObjectId, ref: 'tool' }],
}
);
const category = model('category', categorySchema);

module.exports = category;