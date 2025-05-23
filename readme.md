# MongoDB Operations Explorer

## Overview

MongoDB Operations Explorer is a comprehensive application that showcases 25 MongoDB functionalities through an interactive UI. The application follows a full-stack architecture with a Node.js/Express backend and a React frontend, allowing users to test and explore MongoDB operations in real-time.

## Features

- **25 MongoDB Operations**: Test and interact with all essential MongoDB operations
- **Interactive UI**: Postman-like interface for easy testing and visualization
- **Real-time Results**: Instantly view the operation results
- **Sample Payloads**: Pre-filled example requests for each operation
- **MVC Architecture**: Clean backend code structure following best practices

## Tech Stack

### Backend
- Node.js with Express.js
- MongoDB with Mongoose ODM
- MVC (Model-View-Controller) Architecture
- RESTful API endpoints

### Frontend
- React 19.1
- Vite 6.3
- Responsive UI with custom CSS
- Fetch API for data communication

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

### Installation

1. **Clone the repository** (or download and extract the zip file)

2. **Set up the Backend**

   ```bash
   # Navigate to the backend directory
   cd Backend
   
   # Install dependencies
   npm install
   
   # Start the Development server
   npm run dev

   # Start the Production server 
   npm start
   
   ```

   The backend server will run on http://localhost:5000

3. **Set up the Frontend**

   ```bash
   # Navigate to the frontend directory
   cd Frontend
   
   # Install dependencies
   npm install
   
   # Start the development server
   npm run dev
   ```

   The frontend application will run on http://localhost:5173 (or another port if 5173 is in use)

### MongoDB Configuration

The application is configured to connect to a local MongoDB instance at `mongodb://localhost:27017/mongodb-operations`. If you need to change this:

1. Open `Backend/src/config/db.js`
2. Update the connection string to your MongoDB instance

## How to Use

1. **Start both the backend and frontend** applications as described above.

2. **Open your browser** and navigate to http://localhost:5173

3. **Select an operation** from the list on the left sidebar.

4. **Examine the operation details**:
   - The HTTP method (GET/POST)
   - The endpoint URL
   - A description of what the operation does
   
5. **For POST operations**:
   - Review the pre-filled sample request body
   - Modify the JSON as needed for your test
   
6. **Click the "Execute" button** to run the operation

7. **View the results** in the response panel on the right

8. **Test different operations** by selecting them from the list

## Available MongoDB Operations

The application supports the following MongoDB operations:

1. **Get All Items** - Fetch all documents from the collection
2. **Insert One** - Add a single document
3. **Insert Many** - Add multiple documents at once
4. **Find** - Query documents with filtering options
5. **Find One** - Get the first document matching criteria
6. **Find with Limit** - Retrieve a limited number of documents
7. **Find with Skip** - Pagination support
8. **Find with Sort** - Order results by specified fields
9. **Distinct** - Get unique field values
10. **Count Documents** - Count matching documents
11. **Update One** - Modify a single document
12. **Update Many** - Modify multiple documents
13. **Replace One** - Replace an entire document
14. **Delete One** - Remove a single document
15. **Delete Many** - Remove multiple documents
16. **Aggregate** - Perform data aggregation operations
17. **Create Index** - Create database indexes
18. **Drop Index** - Remove database indexes
19. **Get Indexes** - List all indexes
20. **Find One And Update** - Atomic find and modify
21. **Find One And Delete** - Find and remove
22. **Bulk Write** - Execute multiple write operations
23. **Find One And Replace** - Find and replace document
24. **Rename Collection** - Change collection name
25. **Drop Collection** - Remove an entire collection
26. **List Collections** - Show all collections in the database

## Project Structure

```
📦 MongoDB Operations Explorer
├── Backend
│   ├── src
│   │   ├── app.js                 # Express server initialization
│   │   ├── config
│   │   │   └── db.js              # MongoDB connection
│   │   ├── Controllers
│   │   │   └── itemController.js  # Operation handlers
│   │   ├── Models
│   │   │   └── Item.js            # Mongoose schema
│   │   └── Routes
│   │       └── itemRoutes.js      # API endpoints
│   └── package.json
│
└── Frontend
    ├── public
    ├── src
    │   ├── App.jsx                # Main React component
    │   ├── components
    │   │   ├── DataDisplay.jsx    # Response display
    │   │   ├── Header.jsx         # App header
    │   │   └── MongoDBOperations.jsx # Operations UI
    │   ├── main.jsx               # React entry point
    │   └── assets
    └── package.json
```

## License

ISC
