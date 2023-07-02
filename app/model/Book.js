import mongoose from "mongoose"

const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a book name."]
    },
    author: {
        type: String,
        required: [true, "Please add a book author."]
    },
    nop: {
        type: Number,
        required: [true, "Please add a book numbers of page."]
    },
    isbn: {
        type: Number,
        unique:true,
        required: [true, "Please add a book isbn number."]
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId, ref: "Category"
    }
}, { timestamps: true })

export default mongoose.models.Book || mongoose.model("Book", BookSchema)