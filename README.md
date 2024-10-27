

🧭 JobQuest

JobQuest is a mobile app designed to help users explore job opportunities effortlessly. It offers job listings, detailed descriptions, and real-time API integration. Built with React Native and Expo Router, the app provides smooth navigation and an easy-to-use interface for job seekers on the go.


---

🛠️ Tech Stack

JavaScript: Core language for building the app.

React Native: Framework for cross-platform mobile app development.

Expo Router: Intuitive file-based navigation system.

Expo: Development environment for faster iteration.

RapidAPI: Integrated external APIs for job listings and other services.



---

📱 Features

Job Listings: Browse jobs from multiple industries in real time.

Job Details Screen: View in-depth information about selected jobs.

Saved Jobs: Mark jobs for later review.

API-Driven Search: Search jobs dynamically using RapidAPI.

Responsive Design: Works smoothly on both Android and iOS devices.



---

📂 Project Structure

/app  
├── index.js        # Home Screen  
├── jobs.js         # Job Listings Screen  
├── job-details.js  # Job Details Screen  
├── saved-jobs.js   # Saved Jobs Screen  
└── api/            # API services and logic


---

🚀 Getting Started

Prerequisites

Node.js (version >= 16)

Expo CLI installed globally:

npm install -g expo-cli


Installation

1. Create a project with expo-router:

npx create-expo-app -e with-router jobquest  
cd jobquest


2. Install dependencies:

npm install


3. Add a .env file for API keys:

RAPID_API_KEY=your_api_key_here




---

📡 API Integration

We use RapidAPI to fetch job data. Here's a sample API call:

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'jobs-api.p.rapidapi.com',
  },
};

fetch('https://jobs-api.p.rapidapi.com/listings', options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching jobs:', error));


---

🏃‍♂️ Running the App

1. Start the development server:

npx expo start


2. Scan the QR code with the Expo Go app on your phone to preview it.




---

🤝 Contributing

If you'd like to contribute, feel free to open an issue or submit a pull request.


---

📄 License

This project is licensed under the MIT License.


---

📧 Contact

For inquiries or feedback, reach out to Keith Coner at keith@example.com.


---

This version emphasizes the purpose of the app as a job-hunting platform, showcasing your tech stack and skills effectively. Let me know if you'd like any further tweaks!

