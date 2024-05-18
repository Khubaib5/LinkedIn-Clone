import mongoose, { Document, Model } from "mongoose";

// export interface IUserDocument extends IUser, Document{
//     createdAt:Date,
//     updatedAt:Date
// }
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    
    profilePhoto:{
        type:String,
        default:""
    },
    bio:{
        type:String,
        default:""
    }
},{timestamps:true});
export const User = mongoose.models?.User || mongoose.model("User", userSchema);