const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
    doc_id: {
        type: Schema.Types.ObjectId,
        ref: "Doctor",
    },
    category: {
        type: String,
    },
    duration: {
        type: Number,
    },
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
});

const Record = mongoose.model("Record", RecordSchema);

module.exports = Record;
