# MEAN-Todo-List
MEAN Todo app from the GeeksForGeeks MEAN Todo app tutorial: https://www.geeksforgeeks.org/todo-list-application-using-mean-stack/ 

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- Angular (version 17 or higher)
- Docker: Required for containerizing the application

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/KatieHarris2397/MEAN-Todo-List.git
   cd MEAN-Todo-List
   ```
2. **Navigate to angular/mean-todo-app and install dependencies**:
   ```bash
   cd angular/mean-todo-app
   npm install
   ```
3. **Create an Angular build**:
   ```bash
   ng build
   ```
4. **Build Docker container for frontend**:
   ```bash
   docker build -t mean-angular-todo:latest .
   ```
5. **Navigate to express folder**:
   ```bash
   cd ../../express
   ```
6. **Build Docker container for backend**:
   ```bash
   docker build -t mean-express-todo:latest .
   ```
7. **Navigate to mongoDB folder**:
   ```bash
   cd ../mongoDB
   ```
8. **Build Docker container for mongoDB**:
   ```bash
   docker build -t mongodb-with-admin-access-to-db-created:latest .
