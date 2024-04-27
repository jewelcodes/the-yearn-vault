import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import respond from "./respond";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
    const life = {
        alive: true,
        version: 1
    };
    respond(res, life);
});

app.listen(port, () => {
    console.log("[server]: Server is running at http://localhost:${port}");
});
