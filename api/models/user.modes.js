import mongoose from 'mongoose';
// Schema are set of rules for the user model
const Schema = mongoose.Schema;

// Making new schema for the user model with the rules
Schema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

// Make a model from the schema
const User = mongoose.model('User', Schema);
// Export it to use it in other files
export default User;
