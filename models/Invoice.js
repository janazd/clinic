const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
<<<<<<< HEAD
  pId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Payment",
    required: true,
  },

  operation: {
    type: String,
    required: true,
  },

  totalAmount: {
    type: Number,
    required: true,
  },

  issueDate: {
    type: Date,
    default: Date.now,
  },

  dueDate: {
    type: Date,
  },

  status: {
    type: String,
    enum: ["Issued", "Paid", "Overdue"],
    default: "Issued",
  },
=======
    pId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Payment",
        required: true,
    },

    operation: {
        type: String,
        required: true,
    },

    totalAmount: {
        type: Number,
        required: true,
    },

    issueDate: {
        type: Date,
        default: Date.now,
    },

    dueDate: {
        type: Date,
    },

    status: {
        type: String,
        enum: ["Issued", "Paid", "Overdue"],
        default: "Issued",
    },
>>>>>>> d8160451446265840ae152573a8c04cf724cd968
});

const Invoice = mongoose.model("Invoice", invoiceSchema);
module.exports = Invoice;
