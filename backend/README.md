# starbooks_management

 **Frontend**
- npm create vite@latest frontend -- --template react-ts
- npm install
- npm install axios react-router-dom
- npm list react-router-dom
- npm install --save-dev @types/react-router-dom

**To ensure all types are installed in frontend**
- npm install --save-dev @types/react @types/react-dom


**Backend packages**
- npm init -y
- npm install express pg cors
- npm install bcrypt
- npm install jsonwebtoken
- npm install dotenv



**To-Do Backend**
1. login auth
2. crud database schema 
3. register
4. bcrypt
5. search algo 


**File Structure**
├── backend/
│   ├── config/
│   │   └── db.js                 
│   ├── middleware/
│   │   ├── auth.js              
│   │   └── role.js              
│   ├── routes/
│   │   ├── auth.js              
│   │   └── dashboard.js          
│   ├── main.js                   
│   └── .env                      
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── App.tsx               
│       ├── pages/
│       │   ├── admin_dashboard.tsx
│       │   ├── it_super_admin.tsx
│       │   ├── login_page.tsx
│       │   └── users_dashboard.tsx
│       └── utils/
│           └── axiosInstance.ts 
│           └── ProtectedRoute.tsx 
│
└── README.md
