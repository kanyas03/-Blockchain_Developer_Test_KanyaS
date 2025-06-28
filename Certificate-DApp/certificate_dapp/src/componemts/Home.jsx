import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [account, setAccount] = useState(null);


  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("Please install MetaMask!");
        return;
      }

      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
      console.log(" Connected to wallet:", accounts[0]);
    } catch (err) {
      console.error("MetaMask connection error:", err);
      alert("Failed to connect wallet.");
    }
  };

  useEffect(() => {
    const checkConnectedWallet = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          console.log("Auto-connected to:", accounts[0]);
        }
      }
    };

    checkConnectedWallet();

    window.ethereum?.on("accountsChanged", (accounts) => {
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        console.log("Account changed:", accounts[0]);
      } else {
        setAccount(null); 
      }
    });

    
    return () => {
      window.ethereum?.removeAllListeners("accountsChanged");
    };
  }, []);

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

          {!account ? (
            <button
              onClick={connectWallet}
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 font-semibold"
            >
              Connect Wallet
            </button>
          ) : (
            <p className="text-xs text-green-700 font-medium">
              Connected: {account.slice(0, 6)}...{account.slice(-4)}
            </p>
          )}
        </div>
      </nav>

      <main className="flex justify-center items-center h-[80vh] text-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-700">
            Welcome to Certificate dApp
          </h2>
          <p className="mt-2 text-gray-500">
            Issue and verify blockchain certificates easily
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
