const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    id:Number,
    firstName: String,
    lastNAme: String,
    class:String

}, {
    timestamps: false
});

module.exports = mongoose.model('Note', NoteSchema);
