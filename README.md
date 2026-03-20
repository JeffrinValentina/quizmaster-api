# 🚀 QuizMaster – Scalable Question Bank Management System

## 📌 Overview

QuizMaster is a full-stack Question Bank Management System designed to manage quiz questions efficiently through a clean admin interface.

The application provides RESTful APIs built using Spring Boot for performing CRUD operations on quiz data, along with a React-based frontend that acts as an admin dashboard to interact with these APIs.

It can be used as:

* 🧠 Question Bank System (store & manage questions)
* 🛠️ Admin Dashboard (manage quiz data)

---

## 🏗️ Project Structure

```
quizmaster-app/
│
├── backend/     # Spring Boot Application (Eclipse)
├── frontend/    # React Application (VS Code)
└── README.md
```

---

## ⚙️ Tech Stack

### 🔹 Backend

* Java
* Spring Boot
* Spring Data JPA (Hibernate)
* MySQL
* Maven

### 🔹 Frontend

* React.js
* Axios
* React Router
* HTML, CSS, JavaScript

---

## 🔥 Features

### ✅ Backend

* RESTful API design (CRUD operations)
* Add, update, delete quiz questions
* Pagination using Pageable
* Global Exception Handling
* Layered Architecture (Controller → Service → Repository)
* MySQL database integration

### ✅ Frontend

* Add Question form
* View Questions in table format
* Edit & Delete functionality
* API integration using Axios
* Navigation using React Router
* Dynamic UI updates

---

## 🔗 API Endpoints

| Method | Endpoint                 | Description       |
| ------ | ------------------------ | ----------------- |
| POST   | /questions               | Add new question  |
| GET    | /questions?page=0&size=5 | Get all questions |
| PUT    | /questions/{id}          | Update question   |
| DELETE | /questions/{id}          | Delete question   |

---

## ⚡ Pagination Example

```
GET /questions?page=0&size=5
```

Response:

```
{
  "content": [...],
  "totalElements": 10,
  "totalPages": 2
}
```

---

## 🖥️ Frontend Screens

* Add Question Page
* View Questions Page (Table)
* Edit Question Page

---

## 🚀 How to Run the Project

### 🔹 Backend Setup

```
cd backend
```

* Open in Eclipse / IDE
* Configure MySQL in `application.properties`
* Run Spring Boot application

---

### 🔹 Frontend Setup

```
cd frontend
npm install
npm start
```

* Runs on: http://localhost:3000

---

## 🔄 Integration

* Frontend communicates with backend via REST APIs
* Axios is used for API calls
* CORS enabled in backend (`@CrossOrigin`)

---

## 🛠️ Key Concepts Used

* REST API Development
* MVC Architecture
* Pagination
* Exception Handling
* API Integration
* Component-based UI (React)

---

## 🎯 Future Enhancements

* JWT Authentication & Authorization
* Role-based access (Admin/User)
* Quiz attempt & scoring system
* Dashboard with analytics

---

## 💡 Author

Developed by **Jeffrin Valentina R S**

---

## 🔗 GitHub

[https://github.com/JeffrinValentina/quizmaster-api]
