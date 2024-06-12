const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    FullName: String,
    NumberOfActions: Number,
    CustomId: String
})

// Fixing error:  mongoose.models is an object that contain all the models that alredy definde. if userModel (the model) alredy exist we us it. if (=OR) not exist we define it with mongoose.model
const userModel = mongoose.models.userModel || mongoose.model("user", userSchema);

module.exports = userModel