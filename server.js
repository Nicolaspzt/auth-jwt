import express from "express";
import jwt from "jsonwebtoken";
import usuarios from "./usuarios.js";

const app = express();
app.use(express.json());
