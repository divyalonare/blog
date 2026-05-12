const { Schema,model } = require('mongoose');

const userSchema = new Schema({
    FullName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    salt: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    profileImageURL: {
        type: String,
        default: '/public/default.png',
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
},
{ timestamps: true }
);

const User = model('User', userSchema);

module.exports = User;