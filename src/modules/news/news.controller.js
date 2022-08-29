import path from "path";

import { InternalServerError, NotFoundError, RequestError } from "../../lib/error.js";

import model from "./news.model.js";

export default {
  GET: async (req, res, next) => {
    try {
      let news = await model.GET(req.params);
      if (!news || news.length === 0) return next(new NotFoundError(404, "client Error"));

      res.status(200).json({
        status: 200,
        message: "ok",
        data: news,
      });
    } catch (error) {
      return next(new InternalServerError(500, error.message));
    }
  },

  POST: async (req, res, next) => {
    try {
      if (req.files) {
        const { image } = req.files;

        if (!image.mimetype.includes("image") || image.size > 2100000) {
          return next(new RequestError(400, "invalid format"));
        }

        let imageName = Date.now() + image.name;

        image.mv(path.join(process.cwd(), "uploads", imageName));
        req.body.newsImage = imageName;
      }

      let news = await model.POST(req.body);
      if (!news) return next(new RequestError(400, "request error"));

      res.status(201).json({
        status: 201,
        message: "ok",
        data: news,
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
        req.body.newsImage = imageName;
      }

      let news = await model.PUT(req.body, req.params);
      if (!news) return next(new RequestError(400, "request error"));

      res.status(202).json({
        status: 202,
        message: "news edited",
        data: news,
      });
    } catch (error) {
      return next(new InternalServerError(500, error.message));
    }
  },

  DELETE: async (req, res, next) => {
    try {
      let news = await model.DELETE(req.params);
      if (!news) return next(new RequestError(400, "request error"));

      res.status(202).json({
        status: 202,
        message: "news deleted",
        data: news,
      });
    } catch (error) {
      return next(new InternalServerError(500, error.message));
    }
  },
};
