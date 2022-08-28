import model from "./about.model.js";
import { InternalServerError, NotFoundError, RequestError } from "../../lib/error.js";

export default {
  GET: async (req, res, next) => {
    try {
      let about = await model.GET(req.query);
      if (!about) return next(new NotFoundError(404, "client Error"));

      res.status(200).json({
        status: 200,
        message: "ok",
        data: about,
      });
    } catch (error) {
      return next(new InternalServerError(500, error.message));
    }
  },

  PUT: async (req, res, next) => {
    try {
      let about = await model.PUT(req.body);
      if (!about) return next(new NotFoundError(404, "client Error"));

      res.status(201).json({
        status: 201,
        message: "ok",
        data: about,
      });
    } catch (error) {
      return next(new InternalServerError(500, error.message));
    }
  },
};
