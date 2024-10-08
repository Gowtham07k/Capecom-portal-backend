const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isAlphanumeric, isValidPassword, isValidEmail} = require("../functions/validators/validation")

const employeeSchema = new Schema({

  employee_name:{
    type: String,
    required: true,
    minlength: [7, 'Username must be at least 7 characters long'],
    maxlength: [14, 'Username cannot exceed 15 characters'],
    validate: {
      validator: isAlphanumeric,
      message: 'Username must contain only alphanumeric characters (a-z, A-Z, 0-9)'
    }
  },
  email_id:{
    type: String,
      required: true,
      unique: true,
      validate: {
        validator: isValidEmail,
        message: 'Please provide a valid email address'
      }
  },
  password:{
    type: String,
      required: true,
      minlength: [8, 'Password must be at least 8 characters long'],
      maxlength: [16, 'Password cannot exceed 16 characters'],
      validate: {
        validator: isValidPassword,
        message: 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'
      }
  },
  designation:{
    type:String,
    required:true,
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