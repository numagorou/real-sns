const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require:true,
    min: 3,
    max: 25,
    unipue: true,
  },
  email: {
    type: String,
    require: true,
    max: 50,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    min: 6,
    max: 50,
  },
  profilePicture: {
    type: String,
    default: "",
  },
  coverPicture: {
    type: String,
    default: "",
  },
  followers: {
    type: Array,
    default: "",
  },
  followings: {
    type: Array,
    default: "",
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  desc: {
    type: String,
    max: 70,
  },
  city: {
    type: String,
    max: 50,
  },
},

{timestamps: true }
);

module.exports = mongoose.model("User",UserSchema);
