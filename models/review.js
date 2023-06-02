const { Schema, model, Types } = require('mongoose');
const userSchema = require('./user');
const toolSchema = require('./tool');

const reviewSchema = new Schema(
{
    // review_id:{
    //     type: ID
    // },
    reviewId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
    rating:{
        type:Number,
        required: true,
        integer: true,
        //Maxvalue: 5,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type:String
    }
},
);
const review = model('review', reviewSchema);

module.exports = review;