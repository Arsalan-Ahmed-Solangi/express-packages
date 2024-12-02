#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Function to create the route file
const createRoute = (routeName) => {
  const routeFolder = path.join(process.cwd(), "routes");
  const filePath = path.join(routeFolder, `${routeName}.js`);

  // Create routes folder if it doesn't exist
  if (!fs.existsSync(routeFolder)) {
    fs.mkdirSync(routeFolder);
    console.log(`Created folder: ${routeFolder}`);
  }

  // Content for the new route file
  const routeContent = `
const express = require('express');
const router = express.Router();

// Define your route logic here
router.get('/', (req, res) => {
  res.send('${routeName} route is working!');
});

module.exports = router;
  `;

  // Check if the route file already exists
  if (fs.existsSync(filePath)) {
    console.log(`Route file ${routeName}.js already exists.`);
    return;
  }

  // Create the route file with content
  fs.writeFileSync(filePath, routeContent.trim());
  console.log(`Created route file: ${filePath}`);
};

// Get the route name from the command arguments
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log("Please provide a route name.");
  process.exit(1);
}

const routeName = args[0];
createRoute(routeName);
