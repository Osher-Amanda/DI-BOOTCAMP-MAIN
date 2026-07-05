# Collaborative Storytelling App

## Setup

### Backend
1. cd backend
2. npm install
3. Create a .env file with:
   JWT_SECRET=your_jwt_secret
   REFRESH_SECRET=your_refresh_secret
   DATABASE_URL=your_postgres_connection_string
   NODE_ENV=development
4. npm start

### Frontend
1. cd frontend
2. npm install
3. Create a .env file with:
   VITE_API_URL=http://localhost:5000
4. npm run dev

## Scripts
- Backend npm start: runs the Express server
- Frontend npm run dev: runs the Vite dev server

## Features
- JWT-based authentication with refresh tokens
- Story CRUD with author/contributor authorization
- Contributors management endpoints