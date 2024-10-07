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
  department:{
    type: String,
    required: true
  },
  issue_date:{
    type: Date,
  },
  expected_return:{
    type: Date,
  },
  equipment_details:{
    type: Schema.Types.ObjectId,
    ref: "Equipment", 
  },
  reason:{
    type:String,
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