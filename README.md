# JobApp
JobQuest is a mobile application built with React Native and Expo. The app is designed to help users search and apply for jobs seamlessly. 

## 🛠️ Tech Stack

- **📱 React Native**: For building the mobile app interface.
- **🚀 Expo**: For rapid development and deployment.
- **💻 JavaScript**: The primary programming language.
- **🔍 Jsearch API**: For fetching job listings and related data.
- **📲 Expo Go**: For testing and running the app on mobile devices easily.


## 📂 Project Structure

```
job-app/
│ ├── app/ # Main application folder
│ ├── index.js # Entry point of the application
│ └── _layout.js # Layout component for consistent UI structure
│ ├── assets/ # Images, fonts, and other assets
│ ├── components/ # Reusable components
│ ├── constants/ # Constants used throughout the app │
├── hooks/ # Custom React hooks │ ├── styles/ # Style definitions
│ ├── .env # Environment variables │ ├── .gitignore # Git ignore file
│ ├── README.md # Project documentation │ ├── app.json # Expo configuration
│ ├── babel.config.js # Babel configuration │ ├── package-lock.json # Lock file for npm dependencies
│ └── package.json # Project dependencies and scripts.
```

## 🚀 Getting Started

To set up the JobQuest app locally, follow these steps:

### 📋 Prerequisites
Before you begin, ensure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **Expo CLI**: Install Expo CLI globally using npm:
  ```bash
  npm install -g expo-cli
  ```



## ⚙️Installation
Clone the repository:

```
git clone https://github.com/keithconer/job-app cd job-app
```

Install dependencies:

```
npm install
```

Start the development server:

```
npm start
```

### 🔗 RapidAPI Integration

To integrate with RapidAPI for job listings, follow these steps:

1. **Sign Up for RapidAPI**:
   - Go to [RapidAPI](https://rapidapi.com/) and create an account.

2. **Find the Jobs API**:
   - Search for the **Jobs API** you want to use (e.g., `jobs-api.p.rapidapi.com`).

3. **Subscribe to the API**:
   - Subscribe to the API and get your API key from the **API Dashboard**.

4. **Set Up Environment Variables**:
   - Create a `.env` file in the root of your project and add your RapidAPI key:
     ```env
     RAPID_API_KEY=your_rapid_api_key_here
     ```

5. **Make API Calls**:
   - Use the following code snippet to fetch job listings in your application:
     ```javascript
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
     ```
## License 📜

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE.md) file for details.

### Summary of the Apache License 2.0:
- You are free to use, modify, and distribute this software.
- You must include a copy of the license when redistributing the software.
- The software is provided "as is", without warranty of any kind.

For more detailed information, please refer to the full license text in the LICENSE.md file.
