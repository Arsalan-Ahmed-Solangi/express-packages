#!/usr/bin/env node

//**** Importing Packages ****//
import fs from "fs";
import path from "path";

//****** Create File Function ******//
const createFile = (routeName, extension = "js") => {
  const routeFolder = path.join(process.cwd(), "routes");
  const filePath = path.join(routeFolder, `${routeName}.${extension}`);

  //****** Check if Routes Folder Exists ******//
  if (!fs.existsSync(routeFolder)) {
    fs.mkdirSync(routeFolder);
    console.log(`Created folder: ${routeFolder}`);
  }

  //****** Create Route File Content ******//
  const routeContent = `
import express from 'express';
const router = express.Router();

//**** GET Route ****//
router.get('/', (req, res) => {
  return res.send('${routeName} route is working!');
});

//**** GET Route with ID ****//
router.get('/:id', (req, res) => {
  const { id } = req.params;
  return res.send(\`${routeName} route with ID: \${id} is working!\`);
});

//**** POST Route ****//
router.post('/store', (req, res) => {
  const body = req.body;
  return res.json({ message: '${routeName} route is working!', data: body });
});

//**** PUT Route ****//
router.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  return res.json({ message: '${routeName} route updated successfully!', id, data: body });
});

//**** DELETE Route ****//
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  return res.json({ message: '${routeName} route deleted successfully!', id });
});

export default router;
  `.trim();

  //****** Check if File Already Exists ******//
  if (fs.existsSync(filePath)) {
    console.error(
      `Error: Route file '${routeName}.${extension}' already exists.`
    );
    return;
  }

  //****** Create Route File ******//
  try {
    fs.writeFileSync(filePath, routeContent);
    console.log(`Successfully created route file: ${filePath}`);
  } catch (error) {
    console.error(`Error creating route file: ${error.message}`);
  }
};

//****** Get Arguments from Command Line ******//
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Error: Please provide a route name.");
  process.exit(1);
}

const routeName = args[0];
let extension = "js";

//*****OptionalExtension*******//
if (args[1]) {
  const validExtensions = ["js","ts","mjs"];
  if (validExtensions.includes(args[1])) {
    extension = args[1];
  } else {
    console.error(
      `Error: Invalid extension '${
        args[1]
      }'. Valid extensions are: ${validExtensions.join(", ")}`
    );
    process.exit(1);
  }
}

//*****ValideRouteName*******//
if (!/^[\w-]+$/.test(routeName)) {
  console.error(
    "Error: Route name can only contain alphanumeric characters, underscores, or hyphens."
  );
  process.exit(1);
}

createFile(routeName, extension);
