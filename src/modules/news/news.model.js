import { HOST } from "../../config.js";
import { fetch, fetchAll } from "../../lib/postgres.js";

import query from "./news.query.js";

export default {
  GET: async ({ newsId = 0, serviceId = 0 }) => {
    try {
      let news = await fetchAll(query.GET, newsId, serviceId);

      if (!news || news.length === 0) return [];

      news = news.map((item) => {
        item.newsId = item.news_id;
        item.newsTitle = item.news_title;
        item.newsDesctiption = item.news_desctiption;
        item.newsImage = HOST + "/" + item.news_image;
        item.serviceId = item.service_id;
        item.createAt = item.create_at;

        delete item.news_id;
        delete item.news_title;
        delete item.news_desctiption;
        delete item.news_image;
        delete item.service_id;
        delete item.create_at;

        return item;
      });

      return news;
    } catch (error) {
      console.log(error);
    }
  },

  POST: async ({ newsTitle, newsDescription, serviceId, newsImage }) => {
    try {
      let news = await fetch(query.POST, newsTitle, newsDescription, newsImage, serviceId);

      if (!news) return null;

      news.newsId = news.news_id;
      news.newsTitle = news.news_title;
      news.newsDesctiption = news.news_desctiption;
      news.newsImage = HOST + "/" + news.news_image;
      news.serviceId = news.service_id;
      news.createAt = news.create_at;

      delete news.news_id;
      delete news.news_title;
      delete news.news_desctiption;
      delete news.news_image;
      delete news.service_id;
      delete news.create_at;

      return news;
    } catch (error) {
      console.log(error);
    }
  },

  PUT: async ({ newsTitle, newsDescription, serviceId, newsImage }, { newsId }) => {
    try {
      let news = await fetch(query.PUT, newsId, newsTitle, newsDescription, newsImage, serviceId);

      if (!news) return null;

      news.newsId = news.news_id;
      news.newsTitle = news.news_title;
      news.newsDesctiption = news.news_desctiption;
      news.newsImage = HOST + "/" + news.news_image;
      news.serviceId = news.service_id;
      news.createAt = news.create_at;

      delete news.news_id;
      delete news.news_title;
      delete news.news_desctiption;
      delete news.news_image;
      delete news.service_id;
      delete news.create_at;

      return news;
    } catch (error) {
      console.log(error);
    }
  },

  DELETE: async ({ newsId }) => {
    try {
      let news = await fetch(query.DELETE, newsId);

      if (!news) return null;

      news.newsId = news.news_id;
      news.newsTitle = news.news_title;
      news.newsDesctiption = news.news_desctiption;
      news.newsImage = HOST + "/" + news.news_image;
      news.serviceId = news.service_id;
      news.createAt = news.create_at;

      delete news.news_id;
      delete news.news_title;
      delete news.news_desctiption;
      delete news.news_image;
      delete news.service_id;
      delete news.create_at;

      return news;
    } catch (error) {
      console.log(error);
    }
  },
};
