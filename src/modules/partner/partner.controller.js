import path from "path";

import { InternalServerError, NotFoundError, RequestError } from "../../lib/error.js";

import model from "./partner.model.js";

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
      if (!req.files) return next(new RequestError(400, "request filed, image required"));

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
        message: "partner added",
        data: partner,
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
        req.body.partnerImage = imageName;
      }

      let partner = await model.PUT(req.body, req.params);
      if (!partner) return next(new RequestError(400, "request filed"));

      res.status(202).json({
        status: 202,
        message: "partner edited",
        data: partner,
      });
    } catch (error) {
      return next(new InternalServerError(500, error.message));
    }
  },

  DELETE: async (req, res, next) => {
    try {
      const partner = await model.DELETE(req.params);
      if (!partner) return next(new RequestError(400, "request filed"));

      res.status(202).json({
        status: 202,
        message: "partner deleted",
        data: partner,
      });
    } catch (error) {
      return next(new InternalServerError(500, error.message));
    }
  },
};
