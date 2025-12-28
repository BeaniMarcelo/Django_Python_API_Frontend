<img width="959" height="997" alt="image" src="https://github.com/user-attachments/assets/290db58a-40bc-4fd9-a45d-55235814bd6b" />


# Django Python API - Frontend

Vue.js frontend application for the Django Python API project.

## Description

A modern Vue.js 3 frontend built with Vite that connects to the Django REST Framework backend. This application provides a user-friendly interface for managing users through a RESTful API.

## Features

- **User Management**: Create and view users
- **Modern UI**: Clean, responsive design with gradient backgrounds
- **Real-time Updates**: Automatically refreshes user list after creating a new user
- **Error Handling**: Displays user-friendly error messages
- **Loading States**: Visual feedback during API requests

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Django backend running on `http://localhost:8000`

## Setup

1. **Install dependencies**:
```bash
npm install
```

2. **Start the development server**:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## API Endpoints

The frontend connects to the following Django API endpoints:

- `GET http://localhost:8000/api/users/` - Retrieve all users
- `POST http://localhost:8000/api/users/create` - Create a new user

## Project Structure

```
frontend/
├── src/
│   ├── App.vue          # Main Vue component
│   ├── main.js          # Vue app initialization
│   ├── style.css        # Global styles
│   └── services/
│       └── api.js       # API service for backend communication
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## Technologies

- **Vue.js 3** - Progressive JavaScript framework
- **Vite** - Next-generation frontend build tool
- **Axios** - HTTP client for API requests

## Development

Make sure the Django backend is running before starting the frontend:

1. Start Django backend: `python manage.py runserver` (in the Django project directory)
2. Start Vue frontend: `npm run dev` (in this directory)

The frontend is configured to proxy API requests to the Django backend running on port 8000.

