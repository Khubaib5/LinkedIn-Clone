import mongoose, { Model } from "mongoose";


const commentSchema = new mongoose.Schema({
    textMessage:{
        type:String,
        required:true
    },
    user:{
        userId:{
            type:String,
            required:true
        },
        profilePhoto:{
            type:String,
            required:true
        },
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        }
    }
},{timestamps:true});
export const Comment = mongoose.models?.Comment || mongoose.model("Comment", commentSchema);