import React, { useState } from 'react';
import { ethers } from 'ethers';
import abi from '../abi/certificate.json'
import { Link } from 'react-router-dom';

const IssueCertificate = () => {
    const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
  
    const [form, setForm] = useState({
      id: '',
      name: '',
      course: '',
      grade: '',
      date: '',
    });
    const [status, setStatus] = useState('');
  
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("");
  
      try {
        if (!window.ethereum) throw new Error("MetaMask not found");
  
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
  
        const contract = new ethers.Contract(contractAddress, abi.abi, signer);
  
        const signerAddress = await signer.getAddress();
        const owner = await contract.owner();
        console.log(" Connected wallet:", signerAddress);
        console.log(" Contract owner:", owner);
  
        if (signerAddress.toLowerCase() !== owner.toLowerCase()) {
          setStatus(" You are not the contract owner.");
          return;
        }
  
        const certificateId = parseInt(form.id);
        if (isNaN(certificateId)) {
          setStatus(" Certificate ID must be a number.");
          return;
        }
  
        const tx = await contract.issueCertificate(
          certificateId,
          form.name,
          form.course,
          form.grade,
          form.date
        );
  
        await tx.wait();
        setStatus(" Certificate issued successfully.");
      } catch (err) {
        console.error(" Error issuing certificate:", err);
        setStatus(" Failed to issue certificate. Check console.");
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
  
     
        <div className="p-6 bg-white shadow rounded max-w-md mx-auto mt-10">
          <h2 className="text-xl font-semibold mb-4">Admin: Issue Certificate</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="id" placeholder="Certificate ID" value={form.id} onChange={handleChange} className="w-full border p-2 rounded" required />
            <input type="text" name="name" placeholder="Recipient Name" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" required />
            <input type="text" name="course" placeholder="Course" value={form.course} onChange={handleChange} className="w-full border p-2 rounded" required />
            <input type="text" name="grade" placeholder="Grade" value={form.grade} onChange={handleChange} className="w-full border p-2 rounded" required />
            <input type="text" name="date" placeholder="Issue Date (YYYY-MM-DD)" value={form.date} onChange={handleChange} className="w-full border p-2 rounded" required />
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Issue Certificate
            </button>
          </form>
          {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
        </div>
      </div>
    );
  };
  
  export default IssueCertificate;
