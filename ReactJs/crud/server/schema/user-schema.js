import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:String,
    mobile:Number,
    image:String
})

const User = mongoose.model('msitreact', userSchema)

export default User