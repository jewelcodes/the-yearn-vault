import express, { Express, Request, Response } from "express";
import { messageSchema } from "../database";
import mongoose from "mongoose";
import respond from "../respond";

export default async function search(req: Request, res: Response) {
    const itemsPerPage:number = 6;     // constant

    let response:any = {};
    let messages:any = [];

    let page:number = (req.params.page as unknown) as number || 0;
    let query = req.params.query;

    const Model = mongoose.model("message", messageSchema);
    let pageCount:number;
    let docs;
    
    if(!query) {
        docs = await Model.find().skip(page*itemsPerPage).sort({$natural: -1}).limit(itemsPerPage);
        pageCount = Math.floor((await Model.countDocuments() + itemsPerPage - 1) / itemsPerPage);
    } else {
        docs = await Model.find({sender: query}).skip(page*itemsPerPage).sort({$natural: -1}).limit(itemsPerPage);
        pageCount = Math.floor((await Model.countDocuments({sender: query}) + itemsPerPage - 1) / itemsPerPage);
    }

    for(let i = 0; docs.length && i < docs.length; i++) {
        let message:any = {};
        message.id = docs[i].id;
        message.sender = docs[i].sender;
        message.message = docs[i].message;
        message.color = docs[i].color;

        messages.push(message);
    }

    if(page >= pageCount) {
        response.ok = false;
    } else {
        response.ok = true;
        response.pageSize = itemsPerPage;
        response.pages = pageCount;
        response.messages = messages;
    }
    
    respond(res, response);
}
