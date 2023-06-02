const { Schema, model } = require('mongoose');
const userSchema = new Schema(
{
    // user_id:{
    //     type: ID,
    // },
    userId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        Minlength: 8,
    }
}
);
const user = model('user', userSchema);

module.exports = user;