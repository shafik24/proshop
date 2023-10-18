import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    if (conn) console.log(`DB Connected Successfully`);
  } catch (error) {
    console.log(`Connection failed`);
  }
};

export default dbConnect;
