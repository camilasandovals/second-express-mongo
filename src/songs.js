import { db } from "./dbConnect.js"
import { ObjectId } from "mongodb"
const coll = db.collection("music")

//CREATE 

export async function addSong(req, res) {
    const newSong = req.body 
    await coll.insertOne(newSong)
    res.status(201).send("New song added")
}

// READ 

export async function getSongs ( req, res) {
    const allSongs = await coll.find({}).toArray()
    res.status(200).send(allSongs)
}

// UPDATE 

export async function updateSong ( req, res) {
const docId = {"_id": new ObjectId(req.params.docId)
}
const updatedSong = {$set: req.body}
const returnOption = { returnNewDocument: true};
const query = await coll.findOneAndUpdate(docId, updatedSong)   
    res.status(200).send("song updated")
}

//DELETE 

export async function deleteSong( req, res){
    const docId = {"_id": new ObjectId(req.params.docId)}
    await coll.deleteOne(docId)
    res.status(200).send("song deleted")
}