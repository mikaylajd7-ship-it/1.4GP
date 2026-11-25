# MVC Application Structure

**Student:** Mikayla Dickerson  
**Course assignment:** Guided Practice: MVC Application Structure

## Overview

This project follows the ECPI guided practice to build a Node.js and Express application using a Model-View-Controller (MVC) folder structure. It includes environment-based configuration, EJS views, static assets, and session tracking.

## Technologies

- Node.js
- Express 4.18.2
- EJS
- express-session
- body-parser
- compression
- method-override
- morgan

## Project structure

```text
MVCApplicationStructure/
├── app/
│   ├── controllers/
│   │   └── index.server.controller.js
│   ├── models/
│   ├── routes/
│   │   └── index.server.routes.js
│   └── views/
│       └── index.ejs
├── config/
│   ├── env/
│   │   └── development.js
│   ├── config.js
│   └── express.js
├── public/
│   └── img/
│       └── mikayla-logo.svg
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## Run locally

1. Install Node.js.
2. Open this project folder in VS Code or a terminal.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000).

The page displays the student's name and an image. Refreshing the page updates the session's last-visit timestamp, which is logged in the server terminal.

## MVC responsibilities

- **Model:** `app/models/` is reserved for data models.
- **View:** `app/views/index.ejs` renders the page.
- **Controller:** `app/controllers/index.server.controller.js` handles the home-page request and session timestamp.
- **Routes:** `app/routes/index.server.routes.js` maps `/` to the controller.
- **Configuration:** `config/` configures Express, environment settings, middleware, sessions, and EJS.

## GitHub submission reminder

Commit the project source files to your GitHub repository. The assignment also requires a screenshot of the application running in a browser with the student's name visible. Capture that screenshot after starting the server and save it in the repository root. Do not commit `node_modules/`.
