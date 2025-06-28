import { Router } from "express";
import Complaint from "../models/complaint.js";

const userauth = Router();




userauth.post("/addComplaint", async (req, res) => {
  const { userAddress, title, description } = req.body;

  if (!userAddress || !title || !description) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const complaint = new Complaint({ userAddress, title, description });
    await complaint.save();
    res.status(201).json({ message: "Complaint submitted", complaint });
  } catch (err) {
    res.status(500).json({ message: "Error submitting complaint", error: err.message });
  }
});

userauth.get("/GetComplaints", async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving complaints", error: err.message });
  }
});


userauth.put("/Complaint/:id/upvote", async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }

    complaint.upvotes += 1;
    await complaint.save();
    res.json({ message: "Complaint upvoted", complaint });
  } catch (err) {
    res.status(500).json({ message: "Error upvoting complaint", error: err.message });
  }
});


userauth.delete("/complaint/:id", async (req, res) => {
    const userAddress = req.query.userAddress;
    const ADMIN_ADDRESS = process.env.ADMIN_ADDRESS;

    if ( typeof userAddress !== "string" ||
        typeof ADMIN_ADDRESS !== "string" ||
        userAddress.trim().toLowerCase() !== ADMIN_ADDRESS.trim().toLowerCase()) {
      return res.status(403).json({ message: "Only admin can delete complaints" });
    }
  
    try {
      const deleted = await Complaint.findByIdAndDelete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ message: "Complaint not found" });
      }
  
      res.json({ message: "Complaint deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: "Error deleting complaint", error: err.message });
    }
  });
  

export default userauth;
