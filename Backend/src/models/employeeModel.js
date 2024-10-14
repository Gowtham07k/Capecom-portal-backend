const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
    },
    role: {
      type: String,
      enum: ["superadmin", "admin", "hr", "employee"],
      default: "employee",
    },
    employee_id: {
      type: String,
    },
    department: {
      type: Schema.Types.ObjectId,
      ref: "Department",
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
