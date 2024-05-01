const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecordSchema = new Schema({
    pid: {
        type: Schema.Types.ObjectId,
        ref: "Patient",
    },
    doc_id: {
        type: Schema.Types.ObjectId,
        ref: "Doctor",
    },
    date: {
        type: [Date],
    },
    conditions: {
        type: [String],
    },
});

const Record = mongoose.model("Record", RecordSchema);

module.exports = Record;
