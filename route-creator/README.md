# Route Create Package (Router Creator)

The Router Creator is a CLI tool that allows you to quickly generate routing functionality for Express applications, similar to Laravel's routing system. It helps developers easily create route files with just one command, streamlining the setup of routes without needing to manually write them. The package supports ES6 modules and file extensions like .js, .ts, and .mjs

## Prerequisites

- Node.js installed on your machine.
- npm or Yarn (package manager).
- Express package ( npm i express ).
- ES6 module support (use "type": "module" in package.json).
- Support extensions type only ( .js,.ts,.mjs ).

## Installation and Setup

1. **Install Package**:

   - Using npm:

     ```bash
     npm install route-creator-express
     ```

   - Or using Yarn:

     ```bash
     yarn add route-creator-express
     ```

2. **Usage In Express APP**:

    - Once installed, you can use the create-route command to generate a new route file. The syntax is:
    
   - Using Command:

     ```bash
     npx create-route routeName extension
     ```

