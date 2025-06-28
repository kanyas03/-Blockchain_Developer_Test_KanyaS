import React, { useState } from "react";
import { ethers } from "ethers";
import abi from "../abi/certificate.json";
import { Link } from "react-router-dom";

const VerifyCertificate = () => {
  const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;

  const [id, setId] = useState("");
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState("");

  const handleVerify = async () => {
    try {
      if (!window.ethereum) throw new Error("MetaMask not found");

      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();

      const contract = new ethers.Contract(contractAddress, abi.abi, signer);

      const cert = await contract.verifyCertificate(parseInt(id));

      if (!cert.name) {
        setCertificate(null);
        setError("Certificate not found.");
        return;
      }

      setCertificate(cert);
      setError("");
    } catch (err) {
      console.error("Error verifying certificate:", err);
      setCertificate(null);
      setError("Failed to verify certificate. Check ID or try again.");
    }
  };

  return (

    <div className="min-h-screen bg-gray-100">
        
        <nav className="flex justify-between items-center p-4 bg-white shadow-md">
            <h1 className="text-xl font-bold text-blue-600">Certificate dApp</h1>
            <div className="flex space-x-4 items-center">
                <Link to="/issueCertificate" className="text-blue-600 hover:underline">
                Issue
                </Link>
                <Link to="/getcertificate" className="text-blue-600 hover:underline">
                Verify
                </Link>
            </div>
        </nav>
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
  
      <h2 className="text-xl font-bold mb-4">Verify Certificate</h2>

      <input
        type="text"
        placeholder="Enter Certificate ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      <button
        onClick={handleVerify}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Verify
      </button>

      {certificate && (
        <div className="mt-4 p-4 border rounded bg-gray-50">
          <h3 className="text-lg font-semibold mb-2">Certificate Details</h3>
          <p><strong>Name:</strong> {certificate.name}</p>
          <p><strong>Course:</strong> {certificate.course}</p>
          <p><strong>Grade:</strong> {certificate.grade}</p>
          <p><strong>Date:</strong> {certificate.issueDate}</p>
        </div>
      )}

      {error && <p className="mt-4 text-red-600">{error}</p>}
    </div>
    </div>
  );
};

export default VerifyCertificate;
