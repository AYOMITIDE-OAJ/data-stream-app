# Data Stream Full-stack Code Challenge

This project is a React-based frontend for the Data Stream App. It showcases a UI for displaying projects and their associated data streams in a paginated manner.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Before you begin, ensure you have the following installed on your system: 
- [Git](https://git-scm.com/) 
- [Node.js](https://nodejs.org/) (version 12 or later) 
- [npm](https://www.npmjs.com/) (usually comes with Node.js) or [yarn](https://yarnpkg.com/)

## Getting Started 
 
To get a local copy of the frontend up and running, follow these simple steps. 

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/AYOMITIDE-OAJ/data-stream-app/ 
```
### Navigate to the frontend directory 
 
After cloning, change your directory to  frontend/datastream :  

```bash
cd data-stream-app/frontend/datastream
```

2. **Install dependecies**

  Next, install the project dependencies using npm or yarn: 

  Using npm:

```bash
npm install
```

  Using yarn:

```bash
yarn install
```

### Environment Variables 
 
Create a  .env  file in the root of  frontend/datastream  to store your environment variables. For example, if you need to connect to a backend server, you might have something like this: 

```bash
REACT_APP_API_BASE_URL=http://localhost:5000
```

### Running the app in development mode

To run the project, use the following command: 

 Using npm: 
```bash
npm start
```
  Or using yarn:
```bash
yarn start
```
This will run the app in the development mode. Open [http://localhost:3000](http://localhost:3000)to view it in your browser. 

### Building the app for production 
 
To build the app for production to the  build  folder, use: 
 
Using npm: 
```bash
npm run build
```
  Or using yarn:
```bash 
yarn build
```

This correctly bundles React in production mode and optimizes the build for the best performance. Your app is ready to be deployed! 
 
## Learn More 
 
To learn more about React, check out the [React documentation](https://reactjs.org/).

