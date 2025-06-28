# 📝 Complaint Logging System – Backend API

This is a backend REST API for a Complaint Logging System where users can submit complaints, view all complaints, upvote complaints, and (if admin) delete complaints.  
Built using **Node.js**, **Express.js**, **MongoDB**, and **Docker**.

---

## 🚀 Features

- ✅ Submit a new complaint
- ✅ View all complaints
- ✅ Upvote complaints
- ✅ Delete complaint (only by admin)
- ✅ Input validation
- ✅ REST API tested with Postman
- ✅ Dockerized for containerized deployment

---


---

## ⚙️ Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- Docker
- Postman (for testing)

---

## 📦 Installation & Running Locally

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd ComplaintLogg
```

## 📦 Installation & Running Locally

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd ComplaintLogg
```
----
## 2. Install Dependencies
```bash

npm install
```

### 3. Setup Environment Variables
Create a .env file:
PORT=5000

MONGO_URI=mongodb://localhost:27017/complaints

ADMIN_ADDRESS=0xABC123456789DEF

### 4. Start the Server
```bash
npm start
API will be running on:
http://localhost:5000/
```
## 📬 API Endpoints
Method	Route	Description
POST	/complaints/addComplaint	Submit a new complaint
GET	/complaints/GetComplaints	Get all complaints
PUT	/complaints/Complaint/:id/upvote	Upvote a complaint
DELETE	/complaints/complaint/:id?userAddress=	Delete a complaint (admin only)

## 🐳 Docker Setup
### 1. Update .env

Use the following MONGO_URI inside Docker:
MONGO_URI=mongodb://host.docker.internal:27017/complaints

### 2. Build Docker Image
```bash

docker build -t complaint-api .
```
### 🧠 Notes
Make sure MongoDB is running locally (sudo systemctl start mongod)

The admin address is validated from .env – match it when deleting

Use host.docker.internal to connect to MongoDB from inside Docker



### 📄 License
MIT © 2025

### 📸 Sample Screenshot
In ScreenShot folder



