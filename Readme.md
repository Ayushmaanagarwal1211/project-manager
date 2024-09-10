# Project Management Tool (MERN)

## Introduction

This project management tool is a full-stack web application designed to facilitate effective team collaboration and project tracking. Built using the MERN stack (MongoDB, Express.js, React, and Node.js), the tool allows users to manage tasks, assign team roles, track project progress, and communicate seamlessly in real time.

## Why to use this App?

In a dynamic work environment, effective task management is crucial for team success. Traditional methods of task tracking through spreadsheets or manual systems can be cumbersome and prone to errors. Using the Project Management Application built with MERN stack offers several advantages for both development teams and end users. Here's why:

1. User Authentication:
    - Sign up/Login with email or social media accounts.
    - Role-based access control (e.g., Admin, User, Project Manager).
2. Project Dashboard:
    - Create, view, and manage multiple projects.
    - View project statistics (task progress, deadlines, etc.).
3. Task Management:
    - Create tasks, assign them to team members
    - Task priorities and labels for better organization.
4. Collaboration Tools:
    - Comments section for each task.
    - File sharing for tasks.
    - Real-time updates (e.g., task changes).


### Features

## *Admin Features:*

1. *User Management*

   - Create admin accounts
   - Add & manage team members.

2. *Task Assignment*

   - Assign tasks to indivisual or multiple users.
   - Update task details and status.

3. *Task Properties*

   - Label tasks as todo, in progress, or completed.
   - Assign priority levels (high, medium, normal, low).
   - Add & manage sub tasks.

4. *Asset Management*

   - Upload task assets, such as images.

5. *User Account Control*
   - Disable or activate accounts.
   - Permanently delete or trash tasks.



### *Features:*

1. *User Authentication and Authorization:*

   - Secure login and registration with JWT (JSON Web Tokens).
   - Role-based access control (Admin, Manager, Member)

2. *Project Creation and Management:*

   - Create new projects, assign members, and set deadlines.
   - View a detailed project overview with milestones and progress tracking.

3. *Task Management:*

   - Add, edit, and delete tasks within projects.
   - Assign tasks to team members with due dates and priorities.

4. *Real-Time Collaboration:*

   - Real-time updates on project and task changes using WebSockets (Socket.io).
   - Notifications for task updates, project changes, and deadlines.

5. *Team Management:*
   - Add, remove, or modify team members within projects.
   - Assign different roles to users (Admin, Project Manager, Developer, etc.).
   - Role-based access control for tasks, projects, and team settings.

### *Technology Used:*

1. *Core Technologies*
    - HTML5: Used to structure content and define the overall layout of the website.
    - CSS3: For styling the visual elements of the website, including layout, colors, fonts, and responsiveness.
    - JavaScript (ES6+): Provides interactivity and handles dynamic user interactions (e.g., updating task lists, handling project timelines).

2. *Frontend Frameworks and Libraries*
    - React.js: A JavaScript library for building user interfaces, with component-based architecture.
        - State Management: Context API or Redux to handle global application state.
        - React Hooks: For managing state and lifecycle features within functional components.

3. *UI libraries* 
    -Tailwind CSS: A utility-first CSS framework that allows for quick and easy styling of components.

4. State Management
    - Redux: A state management library, especially useful in React apps to handle complex application state (such as user data, tasks, project milestones).

5. *Routing and Navigation*
    - React Router: Handles navigation between different pages and views in a React application.
    
6. *API Integration*
    -Axios: A popular promise-based HTTP client used to send requests to the backend API and fetch project, task, or user data.
    -Fetch API: A native browser API used for making HTTP requests.



The Cloud-Based Task Manager is an innovative solution that brings efficiency and organization to task management within teams. By harnessing the power of the MERN stack and modern frontend technologies, the platform provides a seamless experience for both administrators and users, fostering collaboration and productivity.



## SETUP INSTRUCTIONS

# Server Setup

## Environment Variables

First, create the environment variables file .env in the server folder. The .env file contains the following environment variables:

- MONGODB_URI = your MongoDB URL
- JWT_SECRET = any secret key - must be secured
- PORT = 8800 or any port number
- NODE_ENV = development

&nbsp;

## Set Up MongoDB:

1. Setting up MongoDB involves a few steps:

   - Visit MongoDB Atlas Website

     - Go to the MongoDB Atlas website: [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).

   - Create an Account
   - Log in to your MongoDB Atlas account.
   - Create a New Cluster
   - Choose a Cloud Provider and Region
   - Configure Cluster Settings
   - Create Cluster
   - Wait for Cluster to Deploy
   - Create Database User
   - Set Up IP Whitelist
   - Connect to Cluster
   - Configure Your Application
   - Test the Connection

2. Create a new database and configure the .env file with the MongoDB connection URL.

## Steps to run server

1. Open the project in any editor of choice.
2. Navigate into the server directory cd server.
3. Run npm i or npm install to install the packages.
4. Run npm start to start the server.

If configured correctly, you should see a message indicating that the server is running successfully and Database Connected.

&nbsp;

## Steps to run client

1. Navigate into the client directory cd client.
2. Run npm i or npm install to install the packages.
3. Run npm start to run the app on http://localhost:3000.
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

&nbsp;