# Live Football Match Data & Predictive Analytics Web App

## Introduction
<a href="https://codingnomads.com/blog/python-django-tutorial-sports-predictive-analytics-example-app" target="_blank" rel="noopener noreferrer">This project</a> is a full-stack web application that streams live football (soccer) match data, performs predictive analytics using Python, and provides real-time forecasts. Built with Django REST Framework for the backend and Next.js with Tailwind CSS for the frontend, this app demonstrates how to create and deploy a production-ready predictive analytics system.

The project is designed as a demo for students interested in learning how to build data-driven web applications using modern web technologies. It is part of a 10-part tutorial series that guides users through backend setup, API development, frontend integration, forecasting, and deployment on AWS EC2.

## Features
- **Live Football Match Data Streaming**: Continuously updated match statistics simulated
- **Predictive Analytics & Forecasting**: Predict live match outcomes during the game, minute by minute
- **Django REST API**: Provides structured data for frontend consumption.
- **Next.js Frontend with Tailwind CSS**: Displays live data with a modern UI presenting actionable insights
- **Automated Data Generation**: `datafactory.py` script populates data dynamically.
- **Deployment on AWS EC2**: Configured for production use with Apache and cron jobs.

## Tech Stack
- **Backend**: Django, Django REST Framework, PostgreSQL, Python `statsmodels`
- **Frontend**: Next.js, React, Tailwind CSS
- **Deployment**: AWS EC2 (Ubuntu), AWS RDS, Apache, Cron Jobs

## Setup Instructions
### Backend Setup
1. Clone the repository:
   ```sh
   git clone `https://github.com/cagdasyetkin/betrade.git`
   ```
2. Create a virtual environment and install dependencies:
   ```sh
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```
3. Run the backend:
   ```sh
   python manage.py runserver
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the frontend:
   ```sh
   npm run dev
   ```

## Step by Step Helper Files
1. `django_steps.md`: follow along for setting up the backend
2. `frontend.md`: follow along for setting up the frontend

## Deployment
- 'Infrastructure As A Service'on an AWS EC2 Ubuntu server.
- Apache Web Server.
- Cron jobs automate scheduled tasks like data updates.
- Follow the tutorial series for a step-by-step guide to deploying the application.

## Tutorial Series
This project is part of a <a href="https://codingnomads.com/blog/python-django-tutorial-sports-predictive-analytics-example-app" target="_blank" rel="noopener noreferrer">10-part tutorial series</a> covering:

- 1: Building a Live Data Streaming Web App - Setting Up the Backend with Python
- 2: Forecasting Football Match Stats with Python - Real-Time Predictions Using Exponential Smoothing
- 3: Setting Up Django for Real-Time Data - Building the Backend and API
- 4: Building the Django Backend - Serving Live Data with APIs and Handling CORS
- 5: Styling and Rendering Live Data with Tailwind CSS and React
- 6: Deploying a Django and Next.js App on AWS - Setting Up Ubuntu for Production
- 8: Pushing to GitHub and Deploying Your Project on an EC2 Instance
- 9: Efficient Path Management and Process Handling with Screens in Python Projects
- 10: Deploying with Apache and Automating Tasks with Cron Jobs for a Production-Ready Python App


## Contributing
Pull requests are welcome! If you'd like to contribute, please open an issue first to discuss changes.

## License
This project is licensed under the MIT License.

---
This README provides a high-level overview. Let me know if you'd like to refine specific sections!

