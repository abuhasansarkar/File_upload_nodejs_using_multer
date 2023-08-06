import express from "express";
import cors from "cors";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
dotenv.config();

import studentRouter from "./routers/student/Student.js";

const app = express();
const PORT = process.env.PORT || 9999;

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static folder

app.use(express.static("public"));

// All Route

app.use("/api/v1/student", studentRouter);

//  Express Init

app.listen(PORT, (req, res) => {
  console.log(`Node JS server is running on the ${PORT}`.bgGreen.black);
});
