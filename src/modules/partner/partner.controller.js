import model from "./partner.model.js";
import { AuthorizationError, InternalServerError, NotFoundError } from "../../lib/error.js";

export default {
  GET: async (req, res, next) => {
    try {
      let partners = await model.GET();
      if (partners.length === 0) return next(new NotFoundError(404, "client Error"));

      res.status(200).json({
        status: 200,
        message: "ok",
        data: partners,
      });
    } catch (error) {
      return next(new InternalServerError(500, error.message));
    }
  },

  GETBYID: async (req, res, next) => {
    try {
      let partner = await model.GETBYID(req.params);
      if (!partner) return next(new NotFoundError(404, "client Error"));

      res.status(200).json({
        status: 200,
        message: "ok",
        data: partner,
      });
    } catch (error) {
      return next(new InternalServerError(500, error.message));
    }
  },
};
