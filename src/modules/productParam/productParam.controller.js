import path from "path";

import { InternalServerError, NotFoundError, RequestError } from "../../lib/error.js";

import model from "./productParam.model.js";

export default {
  POST: async (req, res, next) => {
    try {
      let params = await model.POST(req.body);
      if (!params) return next(new RequestError(400, "request filed"));

      res.status(201).json({
        status: 201,
        message: "params added",
        data: params,
      });
    } catch (error) {
      return next(new InternalServerError(500, error.message));
    }
  },

  PUT: async (req, res, next) => {
    try {
      let param = await model.PUT(req.body, req.params);
      if (!param) return next(new RequestError(400, "request filed"));

      res.status(202).json({
        status: 202,
        message: "param edited",
        data: param,
      });
    } catch (error) {
      return next(new InternalServerError(500, error.message));
    }
  },

  DELETE: async (req, res, next) => {
    try {
      const param = await model.DELETE(req.params);
      if (!param) return next(new RequestError(400, "request filed"));

      res.status(202).json({
        status: 202,
        message: "param deleted",
        data: param,
      });
    } catch (error) {
      return next(new InternalServerError(500, error.message));
    }
  },
};
