# User Management App

## Overview
The **User Management App** is a web application that allows admins to manage users effectively. It provides functionalities like creating, updating, deleting, and searching users. The app is built using **React.js** for the frontend and interacts with a backend API for data management.

## Features
- **User Authentication** (Login with email & password)
- **User Listing** with pagination
- **Search Users** by name
- **Add, Edit, and Delete Users**
- **Protected Routes** to ensure authentication
- **Toast Notifications** for better user experience

## Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **State Management:** useState, useEffect
- **Routing:** React Router
- **API Calls:** Axios
- **Notifications:** React Hot Toast
- **Authentication:** Token-based authentication (stored in localStorage)

## Installation & Setup
1. **Clone the repository**
   ```sh
   git clone https://github.com/DadhichDev0525/User_Managment.git
   ```
2. **Navigate to the project folder**
   ```sh
   cd User_Managment_App
   ```
3. **Install dependencies**
   ```sh
   npm install
   ```
4. **Start the development server**
   ```sh
   npm run dev
   ```

## Usage
1. **Login** using valid credentials.
2. **View Users** in a paginated format.
3. **Search for a User** using the search bar.
4. **Edit or Delete Users** using respective buttons.
5. **Logout** to end the session.

## API Endpoints (Example)
- `POST /login` - Authenticate user
- `GET /users?page={page}` - Fetch users with pagination
- `POST /users` - Add a new user
- `PUT /users/{id}` - Update user details
- `DELETE /users/{id}` - Remove a user

## Contributing
Feel free to fork this repo, create a branch, and submit a PR with improvements.

## License
This project is licensed under the **MIT License**.

---
Happy Coding! 🚀

