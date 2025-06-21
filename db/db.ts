import mongoose from "mongoose";

const connectionFunction = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL!);
    
  } catch (error) {
    console.log("Error inside connectionFunction ",error)
  }
};


export default connectionFunction;