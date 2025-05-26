# Car Enthusiasts - Comprehensive Car Catalog Application

![Car Enthusiasts Logo](https://via.placeholder.com/150x50?text=Car+Enthusiasts)

Car Enthusiasts is a comprehensive web application designed for automotive lovers, collectors, and enthusiasts. This full-stack application allows users to explore, manage, and showcase a rich catalog of various car types - from high-performance sports cars to timeless classics and practical everyday vehicles.

## 🚀 Features

- **Rich Car Catalog**: Browse through a diverse collection of automobiles categorized as Sport, Classic, or Normal vehicles
- **Detailed Car Specifications**: Access comprehensive vehicle information including make, model, year, engine specs, horsepower, top speed, and more
- **Advanced Filtering & Search**: Find vehicles by type, year range, or specific keywords
- **Interactive UI**: Responsive and visually appealing interface with modern animations and transitions
- **Image Gallery**: Multiple image support for each vehicle with carousel display
- **Dark/Light Mode**: Theme toggle for better viewing experience
- **CRUD Operations**: Complete management of car data with create, read, update, and delete functionality

## 🏗️ Architecture

This project follows a modern client-server architecture:

### Frontend (Angular 19)

- Built with the latest Angular 19.2.9 framework
- Standalone component architecture
- Responsive design with Bootstrap integration
- Interactive UI elements and animations
- Type-safe API communication

### Backend (Node.js & Express)

- RESTful API built with Express.js
- MongoDB database integration
- Mongoose ODM for data modeling
- CORS support for cross-origin requests
- Environment-based configuration

### Database (MongoDB)

- NoSQL document database
- Structured car data model with characteristics
- Timestamp tracking for data changes
- Efficient querying and indexing

## 📝 Data Model

The application stores vehicle data with the following structure:

```typescript
{
  id: string,
  make: string,           // e.g., "Ferrari", "Ford", "Toyota"
  model: string,          // e.g., "F40", "Mustang", "Corolla"
  year: number,           // e.g., 1987, 1967, 2023
  type: "Sport" | "Classic" | "Normal",
  type2: "SUV" | "Sedan" | "Hatchback" | "Compact" | "Coupe" | "Convertible",
  images: string[],       // Array of image URLs
  characteristics: {
    engine: string,       // e.g., "V12", "Inline-4", "Electric"
    horsepower: number,   // e.g., 471, 275, 150
    topSpeed: number,     // Speed in km/h
    color: string,        // e.g., "Red", "Blue", "Black"
    numberOfDoors: number,// e.g., 2, 4, 5
    specialNotes: string  // Additional information
  }
}
```

## 🔧 Getting Started

### Prerequisites

- Node.js v16+
- MongoDB running locally or a MongoDB Atlas account
- Angular CLI v19+

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd CarApp-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   ng serve
   ```

4. Open your browser and visit `http://localhost:4200`

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd CarApp-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file with the following configuration:

   ```
   PORT=3001
   MONGODB_URI=mongodb://localhost:27017/carCatalogDB
   ```

4. Start the server:

   ```bash
   npm run dev
   ```

5. The backend API will be available at `http://localhost:3001`

## 🛠️ Development Commands

### Angular CLI Commands

```bash
# Generate new component
ng generate component component-name

# Build project
ng build

# Run unit tests
ng test

# Get help
ng help
```

### Backend Commands

```bash
# Start server with Node
npm start

# Start server with Nodemon (auto-reload)
npm run dev
```

## 📚 API Endpoints

| Method | Endpoint      | Description        |
| ------ | ------------- | ------------------ |
| GET    | /api/cars     | Retrieve all cars  |
| GET    | /api/cars/:id | Retrieve car by ID |
| POST   | /api/cars     | Create new car     |
| PUT    | /api/cars/:id | Update car         |
| DELETE | /api/cars/:id | Delete car         |

## 💻 Technology Stack

- **Frontend**: Angular 19, TypeScript, Bootstrap, RxJS
- **Backend**: Node.js, Express, Mongoose
- **Database**: MongoDB
- **UI Libraries**: Bootstrap Icons, Particles.js, Tilt.js
- **Styling**: CSS3 with custom animations

## 📊 Project Structure

```
CarApp/
├── CarApp-frontend/   # Angular frontend application
│   ├── src/
│   │   ├── app/
│   │   │   ├── car-dashboard/   # Car listing and management
│   │   │   ├── home/            # Landing page
│   │   │   └── shared/          # Shared components & services
│   │   └── ...
│   └── ...
└── CarApp-backend/    # Node.js backend application
    ├── config/        # Database configuration
    ├── models/        # Data models
    ├── routes/        # API routes
    └── server.js      # Main server file
```

## 🔒 Environment Configuration

The application uses environment files for configuration:

### Backend (.env)

```
PORT=3001
MONGODB_URI=mongodb://localhost:27017/carCatalogDB
```

### Frontend (environment.ts)

```typescript
export const environment = {
  production: false,
  apiUrl: "http://localhost:3001/api",
};
```

## 👤 Author

**Aymen Mabrouk** - Full Stack Developer

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Car enthusiasts worldwide for inspiration
- Angular team for the excellent framework
- MongoDB team for the robust database solution
- Bootstrap team for the responsive UI components
