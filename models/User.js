const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },                // 'name' must be a string and is required
  email: { type: String, required: true, unique: true }, // 'email' is unique and required
  password: { type: String, required: true },            // 'password' is required
  isAdmin: { type: Boolean, default: false }             // 'isAdmin' defaults to false if not provided
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function (next) {
  // if password is not modified we can continue to next step 
  if (!this.isModified('password')) return next();
  // create salt using default bcrypt method 
  const salt = await bcrypt.genSalt(10);
  // here hash the password 
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Remove the password field when converting to JSON or an object
userSchema.set('toJSON', {
  transform: function (doc, ret) {
    delete ret.password;
    return ret;
  },
});

userSchema.set('toObject', {
  transform: function (doc, ret) {
    delete ret.password;
    return ret;
  },
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema)

module.exports = User