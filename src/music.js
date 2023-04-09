import { db } from "./dbConnect.js"
import { ObjectId } from "mongodb"
const coll = db.collection("music")

//CREATE 

export async function addSong(req, res) {
    const newSong = req.body 
    await coll.insertOne(newSong)
    res.status(201).send("New song added")
}