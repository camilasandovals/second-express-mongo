import express from express
import cors from cors 
import { addSong, deleteSong, getSongs, updateSong } from "./src/songs.js";

const PORT = 3000

const app = express ()
app.use(cors())
app.use(express.json())

//
app.post("/songs", addSong)
app.get("/songs", getSongs)
app.patch("/songs/:docId", updateSong)



//

app.listen(PORT, () => {
    console.log(`Listening to https://${PORT}...`)
})