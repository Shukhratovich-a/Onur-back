import { ForbiddenError } from "../lib/error.js";
import jwt from "../lib/jwt.js";

export default (req, res, next) => {
  try {
    if (req.url == "/admin/register" || req.url == "/admin/login") return next();

    let { token } = req.headers;

    if (!token) {
      return next(new ForbiddenError(403, "token required"));
    }

    let { adminId } = jwt.verify(token);

    req.adminId = adminId;

    return next();
  } catch (error) {
    return next(new ForbiddenError(403, error.message));
  }
};
