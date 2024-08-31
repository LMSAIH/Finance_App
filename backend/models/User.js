const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

//Creates the user schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  }, { timestamps: true });

  //Function to sign in and create the user this exists inside the userschema 
UserSchema.statics.signup = async function (email, password) {

    //Check in case there is no mail or password
  if (!email || !password) {
    throw Error("Missing fields");
  }

  //Check if the mail is not a valid one
  if (!validator.isEmail(email)) {
    throw Error("The mail is not a valid email");
  }

  //Check if the password is not strong enough
  if (!validator.isStrongPassword(password)) {
    throw Error(
      "The password is not a strong password. A strong password must include at least 1 uppercase letter, 1 lowercase letter, one symbol and one number. Its length must be or exceed 8."
    );
  }

  //Check if the email exists
  const exists = await this.findOne({email});

  //If it does exist, throw error
  if(exists){
    throw Error("A user with this email already exists, please try another one");
  }

  //Create the hashed password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password,salt);

  //Create the user, this is used because it refers to the same object as the schema
  const user = await this.create({
    email: email,
    password: hash
  });

  return user
  
}

//Static function that exists inside the userschema and can be called to validate, if everythig is valid, return the user
UserSchema.statics.login = async function(email,password){

    if(!email || !password){
        throw Error("Missing fields");
    }
    //Find a match inside this context with the email
    const user = await this.findOne({email});

    if(!user){
        throw Error("No user exists");
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match){
        throw Error("Incorrect password");
    }

    return user
}

module.exports = mongoose.model("user", UserSchema);
