# The City Administration Recruitment

![cover](.github/image.png?style=flat)

This is a recruitment simulation website inspired by Blame! featuring interactive components and animations built with TypeScript, Three.js, and Tailwind CSS.

## Features

- **Recruitment Portal**: Simulates the recruitment process for the City Administration, with detailed dossiers on agents and anomalies.
- **API Integration**: Fetches manga data from MyAnimeList using the Jikan API.
- **Interactive Components**: Custom terminal and Blame!-inspired design elements.

## Project Structure

- Vite: Fast build tool for modern web projects.
- TypeScript: Strict type checking for safer JavaScript code.
- Three.js: 3D rendering library used for creating visual effects.
- Tailwind CSS: Utility-first CSS framework for custom styling.
- Axios: For making API requests.

## Getting Started

### Prerequisites

- Node.js and npm (if running locally).
- Docker installed (if running with Docker).
- Populate `.env` file based on `.env.EXAMPLE`.

## Running the Application

You can run this application either with Docker or locally on your machine.

### Option 1: Running with Docker

1. Clone the repository:

```bash
  git clone https://github.com/AlexandreDresch/GA-Recruitment.git
```

2. Navigate to the project directory:

```bash
  cd GA-Recruitment
```

3. Build and start the Docker containers:

```bash
  docker-compose up --build
```

4. Open your browser and navigate to:

```bash
  http://localhost:5173
```

5. To stop the Docker containers:

```bash
  docker-compose down
```

### Option 2: Running Locally (Without Docker)

1. Clone the repository:

```bash
  git clone https://github.com/AlexandreDresch/GA-Recruitment.git
```

2. Navigate to the project directory:

```bash
  cd GA-Recruitment
```

3. Install dependencies:

```bash
  npm install
```

4. Start the development server:

```bash
  npm run dev
```

5. Open your browser and navigate to:

```bash
  http://localhost:5173
```

## Scripts

- **dev**: Starts the Vite development server.
- **build**: Builds the project using TypeScript and Vite.
- **lint**: Runs ESLint to check for code quality.
- **preview**: Runs a Vite preview of the built app.