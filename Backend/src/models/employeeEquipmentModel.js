const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeEquipmentSchema = new Schema({
  employee: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
  },
  equipment: {
    type: Schema.Types.ObjectId,
    ref: "Equipment",
    required: true,
  },
  issue_date: {
    type: Date,
    required: true,
  },
  expected_return: {
    type: Date,
  },
  actual_return: {
    type: Date,
  },
  reason: {
    type: String,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
}, {
  timestamps: true,
});

const EmployeeEquipment = mongoose.model("EmployeeEquipment", employeeEquipmentSchema);
module.exports = EmployeeEquipment;
