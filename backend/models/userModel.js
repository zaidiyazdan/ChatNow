import {Schema,model} from "mongoose"

const userSchema = Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    pic: {
        type: String,
        required: true,
        default: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
    }
},{ timestamps: true})

const User = model("User",userSchema);

export default User;