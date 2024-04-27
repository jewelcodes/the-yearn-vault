import express, { Express, Request, Response } from "express";

export default function respond(res: Response, object: any) {
    res.type("application/json");
    res.send(object);
}
