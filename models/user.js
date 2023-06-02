const { Schema, model } = require('mongoose');
const userSchema = new Schema(
{
    user_id:{
        type: ID,
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