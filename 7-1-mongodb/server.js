import mongoose from "mongoose";

const MONGO_URI =
  "mongodb+srv://abdullahfz:abdullahfz@cluster0.zloieip.mongodb.net/labDB?retryWrites=true&w=majority&appName=Cluster0";

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  major: String,
});

const Student = mongoose.model("Student", studentSchema);

async function createStudents() {
  await Student.insertMany([
    { name: "Ali", age: 21, major: "CS" },
    { name: "Sara", age: 23, major: "SE" },
  ]);
  console.log("✅ Inserted");
}

try {
  await mongoose.connect(MONGO_URI);
  console.log("✅ Connected to MongoDB");

  await createStudents();
} catch (error) {
  console.error("❌ Error:", error.message);
} finally {
  await mongoose.disconnect();
  console.log("🔌 Disconnected");
}