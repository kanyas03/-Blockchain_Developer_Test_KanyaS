# -Blockchain_Developer_Test_KanyaS


This repository contains the solution to the **Blockchain Developer Assessment Test**. The test consists of 4 tasks focused on blockchain development using Solidity, Ethereum, React, MERN Stack, and Docker.

---

---

## 🚀 Tasks Overview

### ✅ Task 1: Smart Contract Development - Certificate Issuance

- **Smart Contract Name**: `Certificate.sol`
- **Tech Stack**: Solidity, Hardhat, OpenZeppelin
- **Features**:
  - Admin can issue certificates (restricted using `Ownable`)
  - Public can verify certificates by ID
  - Events emitted for issuance and verification
- **Test Cases**:
  - Issuance by admin ✅
  - Verification by anyone ✅
  - Rejection of unauthorized issuer ✅
- **Deployed On**: Sepolia Testnet  
  **Contract Address**: `0x76C0772879d754F558b931907A30A62Eb48467B6`

📄 More in: [`task1_smart_contract/README.md`](Certificat-Issuance/README.md)

---

### ✅ Task 2: dApp Frontend - Certificate dApp

- **Tech Stack**: React.js, Tailwind CSS, ethers.js
- **Features**:
  - Admin interface: Issue certificate via MetaMask (owner only)
  - Public interface: Verify certificate by ID
  - Responsive and mobile-friendly UI
- **Screenshots Included**:
  - Admin Panel
  - Certificate Verifier

📄 More in: [`task2_dapp/README.md`](Certificate-DApp/certificate_dapp/README.md)

---

### ✅ Task 3: Backend API - Complaint Logg

- **Tech Stack**: NestJS, MongoDB, Docker
- **Endpoints**:
  - `POST /complaints` – Log a new complaint
  - `GET /complaints` – Fetch all complaints
- **Validation**: Ensures complaint text is not empty
- **Dockerized**: Includes Dockerfile for containerization
- **Tested With**: Postman (screenshots provided)

📄 More in: [`task3_api/README.md`](ComplaintLogg/README.md)

---


## ⚙️ How to Run Each Task

Each subfolder contains its own README with setup and usage instructions. Here's a quick overview:

| Task | Tech Stack | Run Commands |
|------|------------|--------------|
| Task 1 | Solidity, Hardhat | `npx hardhat test`, `npx hardhat run scripts/deploy.js` |
| Task 2 | React, Tailwind, ethers.js | `npm install`, `npm run dev` |
| Task 3 | NestJS, MongoDB | `npm install`, `npm run start:dev`, or `docker build && docker run` |

---

## 🧠 Approach

- **Modular Code**: Each component is independent and follows clean coding principles.
- **Realistic Use Cases**: Simulates practical blockchain and backend development scenarios.
- **Security**: Proper access control with `Ownable`, input validations on backend.
- **Performance**: Optimization in smart contract to reduce gas usage.

---

## ⚠️ Challenges Faced

- **Contract Gas Usage**: Solved via struct mapping refactor.
- **MetaMask Integration**: Adjusted `ethers.js` contract connection to ensure account linking before transactions.
- **Docker Networking**: Solved with proper binding and `.env` configurations.

---

## 📸 Screenshots

All screenshots are provided in respective task folders (`screenshots/`).

---

