import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price : {
        type : Number,
        require : true
    },
    image: {
        type: String,
        required: false
    }
});

const book = mongoose.model("Book", bookSchema);

export default book;