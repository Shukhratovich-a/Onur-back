import model from "./user.model.js";
import { InternalServerError, NotFoundError, RequestError } from "../../lib/error.js";

export default {
  GET: async (req, res, next) => {
    try {
      let users = await model.GET(req.params, req.query);
      if (users.length === 0) return next(new NotFoundError(404, "client Error"));

      res.status(200).json({
        status: 200,
        message: "ok",
        data: users,
      });
    } catch (error) {
      return next(new InternalServerError(500, error.message));
    }
  },

  POST: async (req, res, next) => {
    try {
      let user = await model.POST(req.body);
      if (!user) return next(new RequestError(401, "wrong data"));

      res.status(201).json({
        status: 201,
        message: "new user added",
        data: user,
      });
    } catch (error) {
      return next(new InternalServerError(500, error.message));
    }
  },

  PUT: async (req, res, next) => {
    try {
      let user = await model.PUT(req.params, req.body);
      if (!user) return next(new RequestError(401, "wrong request"));

      res.status(202).json({
        status: 202,
        message: "user edited",
        data: user,
      });
    } catch (error) {
      return next(new InternalServerError(500, error.message));
    }
  },

  DELETE: async (req, res, next) => {
    try {
      let user = await model.DELETE(req.params);
      if (!user) return next(new RequestError(401, "wrong request"));

      res.status(202).json({
        status: 202,
        message: "user edited",
        data: user,
      });
    } catch (error) {
      return next(new InternalServerError(500, error.message));
    }
  },
};
