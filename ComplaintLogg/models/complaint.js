import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
  userAddress: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  upvotes: { type: Number, default: 0 }
});

const Complaint = mongoose.model("Complaint", complaintSchema);
export default Complaint;
