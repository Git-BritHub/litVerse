const { Schema, model } = require('mongoose');

// Schema to create a thought model
const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            // must be between 1 and 280 characters
        },
        createdAt: {
            // Date
            // Set default value to the current timestamp
            // Use a getter method to format the timestamp on query
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionsSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const Thought = model('thought', thoughtsSchema);

module.exports = Thought;