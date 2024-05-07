
const invoiceController = require("../models/Invoice");

const invoiceController =
{
    createInvoice: async (req, res) => 
    {
      try
      {
        const invoice = new Invoice(req.body);
        await invoice.save();
        res.status(201).json(invoice);
      }
      catch (error)
      {
        res.status(400).json({ message: error.message });
      }
    },

    getAllInvoices: async (req, res) =>
    {

      try 
      {
        const invoices = await Invoice.find();
        res.json(invoices);
      } 

      catch (error) 
      {
        res.status(500).json({ message: "Server Error" });
      }
    },

    getInvoiceById: async (req, res) =>
    {
      try
      {
        const invoice = await Invoice.findById(req.params.id);
        if (!invoice)
        {
          return res.status(404).json({ message: 'Invoice not found' });
        }
        res.json(invoice);
      }
      catch (error)
      {
        res.status(500).json({ message: "Server Error" });
      }
    },
  
    updateInvoice: async (req, res) =>
    {
      try
      {
        const invoice = await Invoice.findById(req.params.id);
        if (!invoice)
        {
          return res.status(404).json({ message: 'Invoice not found' });
        }
                
        invoice.dueDate = req.body.dueDate  || invoice.dueDate;
        invoice.totalAmount = req.body.totalAmount|| invoice.totalAmount;
        invoice.issueDate = req.body.issueDate || invoice.issueDate;
        invoice.status = req.body.status || invoice.staus ;
        invoice.operation = req.body.operation  || invoice.operation;

        const UpdateInvoice = await invoice.save();
        res.json({ message: "Invoice Updated" });
      }
      catch (error)
      {
        res.status(400).json({ message: error.message });
      }
    },

    deleteInvoice: async (req, res) =>
    {
      try
      {
        const invoice = await Invoice.findByIdAndDelete(req.params.id);
        if (!invoice)
        {
          return res.status(404).json({ message: 'Invoice not found' });
        }

        res.json({ message: 'Invoice deleted successfully' });
      }
      catch (error)
      {
        res.status(500).json({ message: error.message });
      }
    }
  };
  
 // ask dr about this:  module.exports = { paymentController, invoiceController };