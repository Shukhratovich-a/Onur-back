import path from "path";

import { InternalServerError, NotFoundError, RequestError } from "../../lib/error.js";

import model from "./service.model.js";

export default {
  GET: async (req, res, next) => {
    try {
      let services = await model.GET(req.params, req.query);
      if (services.length === 0) return next(new NotFoundError(404, "client Error"));

      res.status(200).json({
        status: 200,
        message: "ok",
        data: services,
      });
    } catch (error) {
      return next(new InternalServerError(500, error.message));
    }
  },

  PUT: async (req, res, next) => {
    try {
      if (req.files) {
        const { image } = req.files;

        if (!image.mimetype.includes("image") || image.size > 2100000) {
          return next(new RequestError(400, "invalid format"));
        }

        let imageName = Date.now() + image.name;

        image.mv(path.join(process.cwd(), "uploads", imageName));
        req.body.serviceImage = imageName;
      }

      let service = await model.PUT(req.body, req.params);
      if (!service) return next(new RequestError(400, "request filed"));

      res.status(202).json({
        status: 202,
        message: "service edited",
        data: service,
      });
    } catch (error) {
      return next(new InternalServerError(500, error.message));
    }
  },
};
