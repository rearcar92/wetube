import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({
    text: {
        type: String,
        required: "Text is required"
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

const model = mongoose.model("Commnet", CommentSchema);
export default model;