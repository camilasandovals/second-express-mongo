import express from express
import cors from cors 
import { addSong, getSongs, updateSong } from "./src/music.js";

const PORT = 3000

const app = express ()
app.use(cors())
app.use(express.json())

//




//

app.listen(PORT, () => {
    console.log(`Listening to https://${PORT}...`)
})