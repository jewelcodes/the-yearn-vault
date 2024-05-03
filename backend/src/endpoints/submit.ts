import express, { Express, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { messageSchema } from "../database";
import mongoose from "mongoose";
import respond from "../respond";

export default async function submit(req: Request, res: Response) {
    //console.log("submit endpoint called");
    //console.log(req);
    let response:any = {};

    let sender = req.body.sender;
    let message = req.body.message;
    const color = req.body.color;
    const timezone = req.body.timezone;

    if(!sender || sender === "") {
        sender = "Anonymous";
    }

    message = message.trim();
    sender = sender.trim();
    if(message.length > 100 || sender.length > 20) {    // validate input
        response.ok = false;
        respond(res, response);
        return;
    }

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

    response.ok = true;
    response.id = id;
    respond(res, response);
}
