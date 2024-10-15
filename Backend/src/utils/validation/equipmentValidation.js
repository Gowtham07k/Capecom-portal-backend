const Joi = require("joi");

const equipmentValidation = Joi.object({
    equipment_name: Joi.string().min(3).max(50).required()
      .messages({
        'string.empty': 'Equipment name is required',
        'string.min': 'Equipment name must be at least 3 characters long',
        'string.max': 'Equipment name cannot exceed 50 characters'
      }),
    
    equipment_type: Joi.string().valid('Office Equipment','Employee Equipment').required()
      .messages({
        'any.only': 'Equipment type must be either "Office Equipment" or "Employee Equipment"',
      'any.required': 'Equipment type is required'
      }),
    
    model: Joi.string().min(2).max(50).required()
      .messages({
        'string.empty': 'Model is required',
        'string.min': 'Model must be at least 2 characters long',
        'string.max': 'Model cannot exceed 50 characters'
      }),
    
    serial_number: Joi.string().min(5).max(50).required()
      .messages({
        'string.empty': 'Serial number is required',
        'string.min': 'Serial number must be at least 5 characters long',
        'string.max': 'Serial number cannot exceed 50 characters'
      }),
    
    date_of_purchase: Joi.date().required()
      .messages({
        'date.base': 'Date of purchase must be a valid date',
        'any.required': 'Date of purchase is required'
      }),
    
    warranty_period: Joi.string().min(2).max(20).required()
      .messages({
        'string.empty': 'Warranty period is required',
        'string.min': 'Warranty period must be at least 2 characters long',
        'string.max': 'Warranty period cannot exceed 20 characters'
      }),
    
    current_status: Joi.string().valid('available', 'in use', 'maintenance').required()
      .messages({
        'any.only': 'Current status must be either available, in use, or maintenance',
        'any.required': 'Current status is required'
      })
  });

  module.exports = {equipmentValidation}