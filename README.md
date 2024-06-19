# Todo Application

This is a simple Todo application built with Vite, React, and TypeScript. The application allows users to create, update, and manage their todos.

## Features

- Create new todos
- Update existing todos
- Toggle the completion status of todos
- Fetch all todos from an API
- Handle errors gracefully

## Technologies Used

- **Vite**: Next Generation Frontend Tooling
- **React**: A JavaScript library for building user interfaces
- **TypeScript**: Typed JavaScript at Any Scale

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (>= 18.x)
- npm (>= 10.x)

### Installation

1. Clone the repository

```bash
git clone https://github.com/alzca1/todo-front
cd todo-front
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root of the project and add the following variable:

```env
VITE_REACT_APP_BACKEND_URL=http://localhost:3000
```

### Running the Application

To start the development server, run:

```bash
npm run dev
```

This will start the application on `http://localhost:4173/`.

### Building for Production

To build the application for production, run:

```bash
npm run build
```

This will create a `dist` directory with the production build of your app.

To run the application once it has been built, run:

```bash
npm run preview
```

### Running Tests

To run the tests, use the following command:

```bash
npm test
# or
yarn test
```

## Project Structure

```
todo-front/
├── LICENSE
├── README.md
├── index.html
├── jest.config.ts
├── jest.setup.ts
├── package-lock.json
├── package.json
├── public                                #Static files
│   └── vite.svg
├── src                                   # Source files
│   ├── App.css
│   ├── App.tsx
│   ├── application
│   ├── assets
│   │   └── react.svg
│   ├── domain
│   │   └── Todo.ts
│   ├── index.css
│   ├── infrastructure
│   │   └── api
│   │       ├── ApiClient.ts
│   │       └── TodoApi.ts
│   ├── interfaces
│   │   ├── components
│   │   │   ├── TodoItem.tsx
│   │   │   └── TodoList.tsx
│   │   ├── hooks
│   │   │   └── useTodos.ts
│   │   └── pages
│   │       └── Home.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── tests                                # Test files
│   ├── __mocks__
│   │   ├── ApiClient.ts
│   │   ├── TodoService.ts
│   │   └── fileMock.ts
│   ├── application
│   ├── domain
│   ├── infrastructure
│   │   └── api
│   │       └── TodoApi.test.ts
│   └── interfaces
│       ├── components
│       ├── hooks
│       │   └── useTodos.test.ts
│       └── pages
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## API

The application communicates with a backend API to perform CRUD operations on the todos. The API client is defined in `src/infrastructure/api/TodoApi.ts`.

### Endpoints

- `GET /todos`: Fetch all todos
- `POST /create-todo`: Create a new todo
- `PATCH /update-todo`: Update an existing todo
- `PATCH /toggle-completed`: Toggle the completion status of a todo

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
