import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    firstName:{
        required: true,
        type: String
    },
    lastName:{
        required: true,
        type: String
    },
    password:{
        required: true,
        type: String
    },
    email:{
        required: true,
        type: String
    },
    role:{
        required: true,
        default: "Student",
        type: String
    },
    phone:{
        required: false,
        type: String,
        default:""
    },
    bio:{
        required: false,
        type: String,
        default: ""
    },
    social_Media:{
        required: false,
        type: Object,
        default:""
    },   
  
    profilePicture:{
        required: false,
        type: String,
        default: "https://github.com/shadcn.png"
    },
    designation:{
        required: false,
        type: String,
        default: ""
    } ,
});
export const User = mongoose.models.User ?? mongoose.model("User",userSchema);