import express from "express";
import cors from "cors";
import profileRouter from "./routes/profile.router"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/me", profileRouter);

export default app;
