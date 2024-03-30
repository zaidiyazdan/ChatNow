import { Schema, model } from "mongoose";

const messageSchema = Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    msg:{
        type: String,
        trim: true
    },
    chat:{
        type: Schema.Types.ObjectId,
        ref: "Chat"
    }
}, { timestamps: true });

const Message = model("Message", messageSchema);

export default Message;
