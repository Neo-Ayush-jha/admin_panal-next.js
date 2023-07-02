import mongoose from "mongoose"

const CategorySchema = new mongoose.Schema({
    cat_title: {
        type: String,
        required: [true, 'Please add a category title']
    }
}, { timestamps: true })

export default mongoose.models.Category || mongoose.model("Category", CategorySchema)