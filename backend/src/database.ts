import mongoose from "mongoose";

export const messageSchema = new mongoose.Schema({
    id: String,
    sender: String,
    message: String,
    color: String,
    timestamp: String,
    timezone: String,
});

export const reportSchema = new mongoose.Schema({
    id: String,
    timestamp: String
});

export default async function connect() {
    const db = "mongodb://127.0.0.1/the_yearn_vault";
    await mongoose.connect(db);
}
