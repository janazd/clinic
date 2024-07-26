const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
