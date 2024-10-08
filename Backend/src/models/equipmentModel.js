const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const equipmentSchema = new Schema({

  equipment_name:{
    type: String,
    required: true
  },
  equipment_type:{
    type: String,
    required: true
  },
  model:{
    type: String,
    required: true
  },
  serial_number:{
    type: String,
    required: true
  },
  date_of_purchase:{
    type: Date,
  },
  warranty_period:{
    type: String,
  },
  current_status:{
    type: String,
    required: true,
    enum: ["available", "in use", "maintenance"],
    default: "available" 
  },
  deletedAt: {
    type: Date,
    default: null,
  }}, {
    timestamps: true,
  })

const Equipment = mongoose.model("Equipment", equipmentSchema);
module.exports = Equipment;