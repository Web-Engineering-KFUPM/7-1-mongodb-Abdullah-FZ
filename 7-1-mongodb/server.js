import mongoose from "mongoose";

const MONGO_URI =
  "mongodb+srv://abdullahfz:YOUR_PASSWORD@cluster0.zloieip.mongodb.net/labDB?retryWrites=true&w=majority&appName=Cluster0";

try {
  await mongoose.connect(MONGO_URI);
  console.log("✅ Connected to MongoDB");
} catch (error) {
  console.error("❌ Error:", error.message);
} finally {
  await mongoose.disconnect();
  console.log("🔌 Disconnected");
}