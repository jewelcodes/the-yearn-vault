import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const messageSchema = new Schema({
    id: String,
    sender: String,
    message: String,
    color: String,
    timestamp: String,
    timezone: String,
});

export const reportSchema = new Schema({
    id: String,
    timestamp: String
});

export default async function connect() {
    const db = "mongodb://127.0.0.1/the_yearn_vault";
    await mongoose.connect(db);
}
