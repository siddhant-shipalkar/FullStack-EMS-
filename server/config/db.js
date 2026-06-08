import mongoose from "mongoose";
import dns from "dns";

const connectDb = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in .env");
    }

    dns.setServers(["8.8.8.8", "1.1.1.1"]);

    mongoose.connection.on("connected", () => {
      console.log("Database Connected");
    });

    mongoose.connection.on("error", (err) => {
      console.error("Mongoose connection error:", err.message);
    });

    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    });
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1);
  }
};

export default connectDb;
