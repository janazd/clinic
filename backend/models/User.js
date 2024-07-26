const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        firstname: {
            type: String,
            required: true,
        },

        lastname: {
            type: String,
            required: true,
            match: /[a-z]/,
        },

        gender: {
            type: String,
            enum: ["male", "female"],
        },

        yob: {
            type: Number,
        },

        email: {
            type: String,
            unique: true,
            required: true,
            match: [
                /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/,
                "Invalid email",
            ],
        },

        password: {
            type: String,
            required: true,
        },

        phone: {
            type: Number,
        },

        role: {
            type: String,
            required: true,
            enum: ["Doctor", "Patient", "Admin"],
        },
    },

    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
