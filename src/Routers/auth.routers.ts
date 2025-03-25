import express from "express";
import { AuthController } from "Controllers/auth.controller";
import { config } from "dotenv";

config();
const app = express();
const port = 8080;

app.use(express.json());

app.use('/register', au)
const router = express.Router()
