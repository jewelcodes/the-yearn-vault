import express, { Express, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { messageSchema } from "../database";
import mongoose from "mongoose";
import respond from "../respond";

export default async function submit(req: Request, res: Response) {
    const sender = req.body.sender;
    const message = req.body.message;
    const color = req.body.color;
    const timezone = req.body.timezone;

    const id = uuidv4();
    const timestamp = new Date().getTime();     // TODO: fix this to use UTC time

    const Model = mongoose.model("message", messageSchema);
    const doc = new Model({
        id: id,
        sender: sender,
        message: message,
        color: color,
        timestamp: timestamp,
        timezone: timezone,
    });

    await doc.save();

    let response:any = {};
    response.ok = true;
    response.id = id;
    respond(res, response);
}
