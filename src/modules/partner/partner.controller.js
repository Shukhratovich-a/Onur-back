import path from "path";

import model from "./partner.model.js";
import { InternalServerError, NotFoundError, RequestError } from "../../lib/error.js";

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

  POST: async (req, res, next) => {
    try {
      const { image } = req.files;

      if (!image.mimetype.includes("image") || image.size > 2100000) {
        return next(new RequestError(400, "invalid format"));
      }

      const imageName = Date.now() + image.name;

      req.body.partnerImage = imageName;

      let partner = await model.POST(req.body);
      if (!partner) return next(new RequestError(400, "request filed"));

      image.mv(path.join(process.cwd(), "uploads", imageName));

      res.status(201).json({
        status: 201,
        message: "ok",
        data: partner,
      });
    } catch (error) {
      return next(new InternalServerError(500, error.message));
    }
  },
};
