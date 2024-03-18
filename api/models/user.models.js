import mongoose from 'mongoose';
// Schema are set of rules for the user model
let Schema = mongoose.Schema;

// Making new schema for the user model with the rules
Schema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    profilePicture: {
      type: String,
      default: 'https://static.vecteezy.com/system/resources/thumbnails/024/766/962/small/silver-gradient-social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-free-vector.jpg',
    },
  },
  { timestamps: true }
);

// Make a model from the schema
const User = mongoose.model('User', Schema);
// Export it to use it in other files
export default User;
