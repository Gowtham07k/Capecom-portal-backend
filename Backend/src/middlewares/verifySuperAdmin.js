const verifySuperAdmin = (req, res, next) => {
  if (req.user && req.user.role === "superadmin") {
    next();  
  } else {
    return res.status(403).json({
      success: false,
      message: "Access denied. Only superadmin can perform this action.",
    });
  }
};

module.exports = verifySuperAdmin;
