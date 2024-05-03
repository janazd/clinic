const Payment = require("../models/Payment");

exports.createPayment = async (req, res) => {
  if (
    !req.body.pId ||
    !req.body.amount ||
    !req.body.status ||
    !req.body.paymentMethod
  ) {
    return res.status(400).json({ message: "Invalid fields" });
  }

  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.status(201).json(payment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
exports.getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }
    res.json(payment);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.updatePayment = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    payment.paymentDate = req.body.paymentDate || payment.paymentDate;
    payment.amount = req.body.amount || payment.amount;
    payment.status = req.body.status || payment.status;

    const UpdatePayment = await payment.save();
    res.json({ message: "Payment Updated" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deletePayment = async (req, res) => {
  try {
    const payment = await Payment.findByIdAndDelete(req.params.id);
    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }
    res.json({ message: "Payment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
