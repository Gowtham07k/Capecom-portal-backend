const Equipment = require("../models/equipmentModel")
const { equipmentValidation } = require("../utils/validation/equipmentValidation")

exports.addProduct = async (req, res) => {
  try {
    const { error } = equipmentValidation.validate(req.body, { abortEarly: false });
  if (error) {
    const errorMessages = error.details.map(err => err.message);
    return res.status(400).json({
      message: errorMessages.join(', ')  // Combine all error messages into one string
    });
  }

    const { equipment_name, equipment_type, model, serial_number, date_of_purchase, warranty_period, current_status } = req.body;
    const existingProduct = await Equipment.findOne({ serial_number, equipment_type });
    if (existingProduct) {
     return res.status(404).json({success : false, message : "Already existing the Serial Number"})
    }
    const newEquipment = new Equipment({
      equipment_name,
      equipment_type,
      model,
      serial_number,
      date_of_purchase,
      warranty_period,
      current_status
    });
    await newEquipment.save();
    res.status(201).json({ message: 'Equipment added successfully', data: newEquipment });
  } catch (error) {
    res.status(500).json({ message: 'Error processing request: ' + error.message });
  }
}

exports.allProducts = async (req, res) => {
  try {
    // Get the equipment_type from query parameters (e.g., ?equipment_type=Office Equipment)
    const { equipment_type } = req.query;

    // If equipment_type is provided, filter the products based on that type
    const query = equipment_type ? { equipment_type } : {};

    // Find products that match the query
    const products = await Equipment.find(query);

    // Check if products are found
    if (!products || products.length === 0) {
      return res.status(404).json({ message: "Products not found" });
    }

    // Return the filtered or all products
    res.status(200).json({ data: products });
  } catch (error) {
    // Handle errors and return a 500 status with the error message
    res.status(500).json({ message: "Error retrieving products: " + error.message });
  }
};


