const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({

  employee_name:{
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  employee_id:{
    type: String,
    required: true
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: "Department",
    required: true,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
},{
  timestamps: true,
})

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;