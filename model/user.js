import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 6
        
    },
    email: {
        type: String,
        required: true,
        unique: true,
        
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    date:{
        type: Date,
        default: Date.now
    }
   
}, {
    timestamps: true,
})

const user = mongoose.model("User", userSchema) 
export default user