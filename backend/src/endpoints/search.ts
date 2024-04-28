import express, { Express, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { messageSchema } from "../database";
import mongoose from "mongoose";
import respond from "../respond";

export default async function search(req: Request, res: Response) {
    let response:any = {};
    let messages:any = [];

    let page:number = (req.params.page as unknown) as number || 0;
    let query = req.params.query;

    // 20 items per page is reasonable I think
    const Model = mongoose.model("message", messageSchema);
    const pageCount:number = (await Model.countDocuments() + 19) / 20;
    const docs = await Model.find().skip(page*20).sort({$natural: -1}).limit(20);

    for(let i = 0; docs.length && i < docs.length; i++) {
        messages.push(docs[i].id);
    }

    response.ok = true;
    response.pages = pageCount;
    response.messages = messages;
    respond(res, response);
}
