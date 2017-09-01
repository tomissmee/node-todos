const mongoose = require('mongoose');

// this is a todo => constructor function
var Todo = mongoose.model('Todo', {
    text: {
        type: 'string',
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {Todo};
