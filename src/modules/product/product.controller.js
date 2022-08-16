import path from "path";

import { InternalServerError, NotFoundError, RequestError } from "../../lib/error.js";

import model from "./product.model.js";

export default {
  GETBYID: async (req, res, next) => {
    try {
      let product = await model.GETBYID(req.params);
      if (!product) return next(new NotFoundError(404, "client Error"));

      res.status(200).json({
        status: 200,
        message: "ok",
        data: product,
      });
    } catch (error) {
      return next(new InternalServerError(500, error.message));
    }
  },

  POST: async (req, res, next) => {
    try {
      if (!req.files) return next(new RequestError(400, "request filed, image required"));
      if (req.body.partnerId <= 0 || !req.body.partnerId)
        return next(new RequestError(400, "request filed, partner id required"));

      const { image } = req.files;

      if (!image.mimetype.includes("image") || image.size > 5100000) {
        return next(new RequestError(400, "invalid format"));
      }

      const imageName = Date.now() + image.name;

      req.body.productImage = imageName;

      let product = await model.POST(req.body);
      if (!product) return next(new RequestError(400, "request filed"));

      image.mv(path.join(process.cwd(), "uploads", imageName));

      res.status(201).json({
        status: 201,
        message: "partner added",
        data: product,
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
        req.body.productImage = imageName;
      }

      let product = await model.PUT(req.body, req.params);
      if (!product) return next(new RequestError(400, "request filed"));

      res.status(202).json({
        status: 202,
        message: "product edited",
        data: product,
      });
    } catch (error) {
      return next(new InternalServerError(500, error.message));
    }
  },

  DELETE: async (req, res, next) => {
    try {
      const product = await model.DELETE(req.params);
      if (!product) return next(new RequestError(400, "request filed"));

      res.status(202).json({
        status: 202,
        message: "product deleted",
        data: product,
      });
    } catch (error) {
      return next(new InternalServerError(500, error.message));
    }
  },
};
