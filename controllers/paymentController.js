const Payment = require('../models/Payment');

const paymentController =
{
  createPayment: async (req, res) =>
  {
    try
    {
      const payment = new Payment(req.body);
      await payment.save();
      res.status(201).json(payment);
    }
    catch (error)
    {
      res.status(400).json({ message: error.message });
    }
  },

  getAllPayments: async (req, res) =>
  {
    try
    {
      const payments = await Payment.find();
      res.json(payments);
    }
    catch (error)
    {
      res.status(500).json({ message: "Server Error" });
    }
  },

  getPaymentById: async (req, res) =>
  {
    try
    {
      const payment = await Payment.findById(req.params.id);
      if (!payment)
      {
        return res.status(404).json({ message: 'Payment not found' });
      }
      res.json(payment);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  },

/*updatePayment: async (req, res) => {
    try {
      const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!payment) {
        return res.status(404).json({ message: 'Payment not found' });
      }
      res.json(payment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
*/

updatePayment: async (req, res) =>
    {
      try
      {
        const payment = await Payment.findById(req.params.id);
        if (!payment)
        {
          return res.status(404).json({ message: 'Payment not found' });
        }
                
        payment.paymentDate = req.body.paymentDate || payment.paymentDate;
        payment.amount = req.body.amount|| payment.amount;
        payment.status = req.body.status || payment.status ;

        const UpdatePayment = await payment.save();
        res.json({ message: "Payment Updated" });
      }
      catch (error)
      {
        res.status(400).json({ message: error.message });
      }
    },

  deletePayment: async (req, res) => 
  {
    try 
    {
      const payment = await Payment.findByIdAndDelete(req.params.id);
      if (!payment) 
      {
        return res.status(404).json({ message: 'Payment not found' });
      }
      res.json({ message: 'Payment deleted successfully' });
    } 
    catch (error) 
    {
      res.status(500).json({ message: "Server Error" });
    }
  }
};