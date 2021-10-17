const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const notesModelSchema = new mongoose.Schema({
    noteTitle:{
        type: String,
        required: true,
    },
    noteDescription:{
        type: String,
        required: true
    },
    priority:{
        type: String,
        enum:['HIGH','MEDIUM','LOW']
    },
    dateAdded:{
        type: Date,
        default: Date.now()
    },
    dateUpdated:{
        type: Date,
        default: Date.now
    }
})

const notesModel = mongoose.model("notesModel", notesModelSchema)
module.exports = notesModel;

