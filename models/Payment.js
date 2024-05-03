const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
<<<<<<< HEAD
  pId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Appointment",
    required: true,
  },

  amount: {
    type: Number,
    required: true,
  },

  paymentDate: {
    type: Date,
    default: Date.now,
  },

  status: {
    type: String,
    enum: ["Paid", "Pending", "Unpaid"],
    default: "Pending",
  },

  invoiceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Invoice",
  },

  paymentMethod: {
    type: String,
    enum: ["PayPal", "Visa", "OMT", "Whish"],
    required: true,
  },

  comments: {
    type: String,
  },
});

=======
    pId: {
        type: mongoose.Schema.Types.ObjectId,

        ref: "Appointment",
        required: true,
    },

    amount: {
        type: Number,
        required: true,
    },

    paymentDate: {
        type: Date,
        default: Date.now,
    },

    status: {
        type: String,
        enum: ["Paid", "Pending", "Unpaid"],
        default: "Pending",
    },

    invoiceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Invoice",
    },

    paymentMethod: {
        type: String,
        enum: [PayPal, VisaCard, OMT, whish],
        required: true,
    },

    transactionId: {
        type: String,
    },

    comments: {
        type: String,
    },
});
>>>>>>> d8160451446265840ae152573a8c04cf724cd968
const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;
