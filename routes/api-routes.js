const express = require("express")
const fs = require("fs");
const router = express.Router();

const getAllNotes = ( req, res ) => {
    console.log(__dirname)
    res.send("Hello world!")
    const notes = fs.readFileSync( "./db/notes.json", "utf-8" );
    return notes;
}

router.get('/notes', getAllNotes );

module.exports = router;