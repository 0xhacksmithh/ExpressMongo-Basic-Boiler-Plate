import mongoose from "mongoose";


export const connectDB = ()=>{
    mongoose.connect("mongodb://root:root@localhost:27017/test-mongoDB?authSource=admin&w=1");
}