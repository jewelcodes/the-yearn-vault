import express, { Express, Request, Response } from "express";
import { messageSchema } from "../database";
import mongoose from "mongoose";
import respond from "../respond";

export default async function read(req: Request, res: Response) {
    let response:any = {};

    const query = req.params.id;

    const Model = mongoose.model("message", messageSchema);
    const doc = await Model.findOne({id: query});
    if(!doc) {
        response.ok = false;
    } else {
        response.ok = true;
        response.id = doc.id;
        response.sender = doc.sender;
        response.message = doc.message;
        response.color = doc.color;

        let d = new Date(Number(doc.timestamp));
        response.timestamp = d.toUTCString();
    }

    respond(res, response);
}
