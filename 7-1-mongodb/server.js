import mongoose from "mongoose";

const MONGO_URI =
  "mongodb+srv://abdullahfz:YOUR_PASSWORD@cluster0.zloieip.mongodb.net/labDB?retryWrites=true&w=majority&appName=Cluster0";

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  major: String,
});
//aa
const Student = mongoose.model("Student", studentSchema);

try {
  await mongoose.connect(MONGO_URI);
  console.log("✅ Connected to MongoDB");
} catch (error) {
  console.error("❌ Error:", error.message);
} finally {
  await mongoose.disconnect();
  console.log("🔌 Disconnected");
}