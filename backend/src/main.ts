import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import respond from "./respond";
import connect from "./database";
import submit from "./endpoints/submit";
import search from "./endpoints/search";
import read from "./endpoints/read";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    const life = {
        alive: true,
        version: 1
    };
    respond(res, life);
});

app.post("/submit", (req: Request, res: Response) => {
    submit(req, res);
});

app.get("/search", (req: Request, res: Response) => {
    search(req, res);
});

app.get("/search/:page", (req: Request, res: Response) => {
    search(req, res);
});

app.get("/search/:page/:query", (req: Request, res: Response) => {
    search(req, res);
});

app.get("/read/:id", (req: Request, res: Response) => {
    read(req, res);
});

app.listen(port, async () => {
    await connect();
    console.log("[server]: Server is running at http://localhost:" + port);
});
