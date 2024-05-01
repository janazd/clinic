const Record = require("../models/Record");

async function addRecord(req, res) {
    const { pid, doc_id, date, conditions } = req.body;

    const existingRecord = await Record.findOne({});
}
