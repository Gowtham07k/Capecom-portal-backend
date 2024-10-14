const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  let token;
  let authHeader = req.headers.authorization;
  if (authHeader) {
    token = authHeader.split(" ")[1];
  }

  if (!token) return res.status(401).send("Access Denied. No token provided.");
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports = verifyToken;
