import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ message: "Access denied" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res
        .status(401)
        .json({ message: "Forbidden , You are not authorized" });
    }
    req.admin = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default adminAuth;
