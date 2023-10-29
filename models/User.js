const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max_length: 50,
    //   Trimmed
    },
    email: {
      type: String,
      required: true,
      unique: true,
    //   Must match a valid email address, look into matching validation
    },
    thoughts: [thoughtsSchema],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;