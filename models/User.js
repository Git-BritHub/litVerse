const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      max_length: 50,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      validate: {
        validator: (v) => /^([a-z0-9_\.-]+)@([\da-z\.\-]+)\.([a-z\.]{2,6})$/.test(v),
        message: (props) => `${props.value} is not a valid email address`,
        },
      required: [true, 'User email required'],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const User = model('user', userSchema);

module.exports = User;