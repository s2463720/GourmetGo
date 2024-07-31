import mongoose from "mongoose";

export const connectDB= async() => {
    await mongoose.connect('mongodb+srv://gourmetgogo:031280@cluster0.1mrrida.mongodb.net/gourmet-go').then(()=>console.log("DB Connected"));
}