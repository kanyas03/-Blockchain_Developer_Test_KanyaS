# 🎓 Certificate Issuance & Verification dApp

A decentralized application (dApp) built with Solidity and React that allows an admin to issue certificates on-chain and users to verify them publicly.

---

## 🔧 Tech Stack

- **Smart Contract**: Solidity
- **Framework**: Hardhat
- **Frontend**: React + Tailwind CSS
- **Wallet**: MetaMask
- **Blockchain**: Ethereum (Sepolia Testnet)

---

## 📦 Prerequisites

Make sure you have installed:

- Node.js `v18+`
- [Hardhat](https://hardhat.org/)
- MetaMask extension
- A Sepolia testnet wallet with ETH

---

## 🚀 How to Run the Project

### 1️⃣ Clone the Repository

```bash
git clone git@github.com:kanyas03/-Blockchain_Developer_Test_KanyaS.git
cd Certificate-Issuance
```

### 2️⃣ Install Dependencies
```bash
npm install
```
### 3️⃣ Compile Smart Contract
```bash
npx hardhat compile
```
### 4️⃣ Set Up Environment Variables
Create a .env file:

PRIVATE_KEY=your_private_key

SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY

VITE_CONTRACT_ADDRESS=0xYourDeployedContractAddress

### 5️⃣ Deploy to Sepolia
```bash
Copy
Edit
npx hardhat run scripts/deploy.js --network sepolia
```

### 🔍 Features
* Admin can issue certificates on-chain.

* Users can verify any certificate using its ID.

* MetaMask integration for transaction signing.
