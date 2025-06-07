import mongoose from "mongoose"
export const connectDB= async()=>{
    try{
    const connection= await mongoose.connect(process.env.MONGO_URI)
    console.log("Mongo db connected");
    } 
    catch(error){
        process.exit(1);
    }
}