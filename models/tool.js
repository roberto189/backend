const { link } = require('fs');
const { Schema, model } = require('mongoose');
const reviews = require('./review');

const toolSchema = new Schema(
{
    tool_id:{
        type: ID,
    },
    toolName:{
        type: String,
        required: true,
        unique: true,
    },
    amazonLink:{
        type: String,
    },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'reviews' }],
},
);
const tool = model('tool', toolSchema);

module.exports = tool;