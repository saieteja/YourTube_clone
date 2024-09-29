import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    points:{type:Number,default:0},
    email: { type: String, required: true },
    name: { type: String },
    desc: { type: String },
    joinedon: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);