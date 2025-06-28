# 🎓 Certificate dApp – Frontend

This is the frontend for the **Certificate Issuance and Verification DApp**, built using **React**, **Tailwind CSS**, and **Ethers.js**, allowing admins to issue blockchain-based certificates and users to verify them using MetaMask.

---


## 🧱 Built With

- [React](https://reactjs.org/)
- [Ethers.js](https://docs.ethers.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [MetaMask](https://metamask.io/)

---



## 🧪 Features

✅ Admin wallet connection using MetaMask  
✅ Issue a certificate with fields: `ID`, `Name`, `Course`, `Grade`, `Date`  
✅ Verify certificate by ID  
✅ Blockchain interaction via Ethers.js  
✅ React Router for navigation  
✅ Tailwind CSS for UI styling  
✅ Responsive layout

---

## 🛠️ Getting Started

### 1️⃣ Prerequisites

- Node.js `v18+`
- MetaMask browser extension
- Deployed smart contract address & ABI
- Contract deployed to Sepolia or compatible Ethereum testnet

---

### 2️⃣ Clone and Install

```bash
git clone https://github.com/yourusername/certificate-frontend.git
cd certificate-dApp
npm install
```
### 3️⃣ Environment Setup
Create a .env file in the root:

VITE_CONTRACT_ADDRESS=0xYourDeployedContractAddress

⚠️ Don't include quotes or extra spaces in .env.

### 4️⃣ Run the Frontend

```npm run dev
```
Then open http://localhost:5173 in your browser.


## 🔑 MetaMask Wallet Integration
Prompts user to connect via MetaMask

Stores connected account in state

Detects account changes and refreshes UI

Ensures only contract owner can issue certificates


### Pages
✨ UI Pages
🏠 Home Page
Shows welcome text

Wallet connect button

Links to Issue and Verify pages

### 📝 Issue Certificate Page (/issueCertificate)
Form to issue certificate

Validates admin ownership

Calls smart contract issueCertificate(...)

### 🔍 Verify Certificate Page (/getcertificate)
Enter Certificate ID

Calls verifyCertificate(id)

Displays the name, course, grade, and issue date

