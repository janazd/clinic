const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
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
});

const Invoice = mongoose.model("Invoice", invoiceSchema);
module.exports = Invoice;
