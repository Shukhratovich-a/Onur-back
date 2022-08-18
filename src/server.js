import fs from "fs";
import path from "path";

import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";

import modules from "./modules/modules.js";

import { HOST, PORT } from "./config.js";

const app = express();

app.use(express.json());
app.use(fileUpload());
app.use(cors());

app.use(express.static(path.join(process.cwd(), "uploads")));
app.use(modules);

app.use((error, req, res, next) => {
  if (error.status != 500) {
    return res.status(error.status).json({
      status: error.status,
      message: error.message,
    });
  }

  fs.appendFileSync(
    path.join(process.cwd(), "src", "log.txt"),
    `${req.url}___${error.name}___${new Date(Date.now())}___${error.status}___${error.message}\n`
  );

  res.status(error.status).json({
    status: error.status,
    message: "InternalServerError",
  });

  process.exit();
});

app.listen(PORT, () => console.log("server is run: " + HOST));
