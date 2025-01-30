Project Management Tool - README
Overview
The Project Management Tool is designed to help teams manage projects, tasks, and communication in an organized manner. It allows users to register, log in, create projects, assign tasks, track progress, and communicate within the team, all in one platform.

Backend (Flask API)
The backend is a Flask-based API responsible for handling user registration, authentication, project and task management, and team communication.

Tech Stack
Flask: Python web framework for building the API.
SQLAlchemy: ORM to interact with the database.
SQLite: Database for storing user, project, and task information (you can replace it with PostgreSQL in production).
Flask-JWT-Extended: Used for user authentication via JWT tokens.
Flask-Migrate: Handles database migrations.
Setup
Clone the repository:

<!-- # -->

git clone <backend-repository-url>
cd <backend-folder>
Create a virtual environment:


<!-- # -->

python -m venv venv
source venv/bin/activate  # On Windows, use 'venv\Scripts\activate'
Install dependencies: If you're using pipenv (as per your setup):


<!-- # -->

pipenv install
Or if you are using a requirements.txt:


<!-- # -->
pip install -r requirements.txt
Set up the database:


<!-- # -->


flask db init
flask db migrate
flask db upgrade
Run the development server:


<!-- # -->
flask run
This will run the backend server on http://localhost:5000.

API Endpoints
User Registration:

POST /api/register
Body: { "name": "John", "email": "john@example.com", "password": "password123" }
Registers a new user.
Login:

POST /api/login
Body: { "email": "john@example.com", "password": "password123" }
Logs the user in and returns a JWT token.
Create Project:

POST /api/projects
Body: { "title": "New Project", "description": "Project description", "status": "active" }
Creates a new project under the logged-in user.
Assign Task:

POST /api/tasks
Body: { "title": "Task 1", "description": "Task description", "assigned_to": 2, "project_id": 1, "status": "in-progress" }
Assigns a task to a user under a specific project.
Track Task Progress:

GET /api/tasks/<task_id>
Returns the status of the task with the given task_id.
Edit Task:

PUT /api/tasks/<task_id>
Body: { "title": "Updated Task", "description": "Updated description", "status": "completed" }
Updates the task details.
Delete Task:

DELETE /api/tasks/<task_id>
Deletes the task with the given task_id.
View Team Communication:

GET /api/messages
Returns a list of messages posted by team members.
Models
User Model

Fields: user_id, name, email, password
Project Model

Fields: project_id, title, description, owner, status
Task Model

Fields: task_id, title, description, project, assigned_to, status
Frontend (React)
The frontend is a React application that provides a user interface to interact with the backend API. It allows users to register, log in, create projects, manage tasks, and track progress.

Tech Stack
React: JavaScript library for building the user interface.
Tailwind CSS: Utility-first CSS framework for styling.
React Router: Handles routing and page navigation.
Axios: HTTP client for making API requests.
Setup
Clone the repository:

<!-- # -->
git clone <frontend-repository-url>
cd <frontend-folder>
Install dependencies: If you're using pipenv:

<!-- # -->
pipenv install
Or using npm/yarn:

<!-- # -->
npm install
Run the development server:

<!-- # -->
npm start
This will run the frontend on http://localhost:3000.

Pages & Components
Home Page:
Displays a list of projects, their timelines, and tasks. Users can navigate to their active project tasks.

Register Page:
Form to register a new user with fields like name, email, and password.

Login Page:
Form to log in with email and password.

Project Page:
Displays detailed information about a specific project, including tasks and team members.

Task Management:
Displays tasks for a project with options to add, edit, or delete tasks.

Team Communication:
A feed for users to view messages and updates posted by team members.

React Context (State Management)
User Context:
Manages user authentication (login, register, logout).

Project Context:
Manages projects and tasks, including the ability to add, update, and delete tasks.

Environment Variables
To securely handle sensitive information (like API URLs), create a .env file in the root of your project and add the following:

<!-- # -->
REACT_APP_API_URL=http://localhost:5000/api
Deployment
Backend Deployment (Heroku)
Create a Procfile in the root directory:

makefile
Copy
Edit
web: gunicorn app:app
Push to Heroku:

<!-- # -->
heroku create <your-app-name>
git push heroku main
heroku open
Frontend Deployment (Vercel)
Push to GitHub and connect your repository to Vercel.
Vercel will automatically deploy your app, using npm run build for production.
Contributing
Fork the repository and create a new branch for your feature (git checkout -b feature-name).
Write tests for your new feature or bug fix.
Submit a pull request with a description of what you added or fixed.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
Thanks to the open-source community for the libraries and frameworks used in this project!
