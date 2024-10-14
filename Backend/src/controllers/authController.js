const bcrypt = require("bcryptjs");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const Employee = require("../models/employeeModel");
const { validateLogin } = require("../utils/validation/validation");

exports.login = async (req, res) => {
  const adminName = "superadmin";
  const adminPassword = "superadmin@123";

  const {error} = validateLogin(req.body);
  if (error) {
    return res.status(400).json({ 
      success:false,
      message: error.details[0].message });
  }

  try {
    //for superadmin
    if (req.body.username === adminName && req.body.password === adminPassword) {
      const payload = {
        user: {
          username: adminName,
          role: "superadmin",
        },
      };
      const token = await jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      return res.status(200).json({
        success: true,
        message: "SuperAdmin login successful",
        token,
      });
    }

    //for others
    const employee = await Employee.findOne({ username });
    if (!employee) {
      return res.status(400).json({ message: "Invalid User" });
    }
    const isMatch = await bcrypt.compare(password, employee.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    const payload = {
      user: {
        id: employee._id,
        username: employee.username,
        role: employee.role,
      },
    };

    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return res.status(200).json({
      success: true,
      message: `User login successfully as ${employee.role} role`,
      token,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.registerUser = async (req, res) => {
  try {
  } catch (error) {}
};
