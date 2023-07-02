import mongoose from "mongoose"

const Connect = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/bookStore")
    } catch (e) {
        throw new Error("Database is not connected with your project.")
    }
}
export default Connect