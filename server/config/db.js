import mongoose from "mongoose";
import dns from "dns";

const connectDb = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI?.trim();

    if (!mongoUri) {
      throw new Error("MONGODB_URI is not defined in server/.env");
    }

    if (mongoUri.includes("YOUR_PASSWORD") || mongoUri.includes("<password>")) {
      throw new Error(
        "MONGODB_URI still contains a placeholder password. Replace 'YOUR_PASSWORD' in server/.env with your real MongoDB Atlas password."
      );
    }

    dns.setServers(["8.8.8.8", "1.1.1.1"]);

    mongoose.connection.on("connected", () => {
      console.log("Database Connected");
    });

    mongoose.connection.on("error", (err) => {
      console.error("Mongoose connection error:", err.message);
    });

    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    });
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1);
  }
};

export default connectDb;
