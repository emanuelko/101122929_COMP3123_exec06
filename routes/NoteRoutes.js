const express = require('express')
const noteModel = require('../models/NotesModel.js');
const app = express()

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
app.post('/notes', async (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to save the note
    note = new noteModel(req.body)
    try{
        await note.save()
        res.status(200).send("Note has been saved.")
    } catch(err){
        res.status(500).send(err)
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', async (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to returns all note
    const notes = await noteModel.find({})
    try{
        res.send(notes)
    } catch(err){
        res.status(500).send(err)
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to return onlt one note using noteid
    try{
        const note = await noteModel.findById(req.params.noteId)
        res.send(note)
    } catch(err){
        res.status(500).send(err)
    }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to update the note using noteid
    try{
        const note = await noteModel.findByIdAndUpdate(req.params.noteId, req.body)
        res.send(note)
    } catch(err){
        res.status(500).send(err)
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete('/notes/:noteId', async(req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to delete the note using noteid
    try{
        const note = await noteModel.findByIdAndDelete(req.params.noteId)
        res.status(200).send("Note deleted.")
    }catch(err){
        res.status(500).send(err)
    }
});

module.exports = app