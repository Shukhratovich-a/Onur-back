import { HOST, PORT } from "../../config.js";
import { fetch, fetchAll } from "../../lib/postgres.js";

import query from "./product.query.js";

export default {
  GETBYID: async ({ productId = 0 }) => {
    try {
      let product = await fetch(query.GETBYID, productId);

      if (!product) return null;

      product.productId = product.product_id;
      product.productName = product.product_name;
      product.productImage = HOST + "/" + product.product_image;
      product.partnerId = product.partner_id;
      product.createAt = product.create_at;
      product.productParams = product.product_params;

      product.productParams = product.productParams[0] ? product.productParams : [];

      product.productParams = product.productParams.map((option) => {
        option.productParamId = option.product_param_id;
        option.productParamName = option.product_param_name;
        option.productParamText = option.product_param_text;
        option.productId = option.product_id;
        option.createAt = option.create_at;

        delete option.product_param_id;
        delete option.product_param_name;
        delete option.product_param_text;
        delete option.product_id;
        delete option.create_at;

        return option;
      });

      delete product.product_id;
      delete product.product_name;
      delete product.product_image;
      delete product.partner_id;
      delete product.create_at;
      delete product.product_params;

      return product;
    } catch (error) {
      console.log(error);
    }
  },

  POST: async ({ productName, productImage, partnerId }) => {
    try {
      let product = await fetch(query.POST, productName, productImage, partnerId);

      if (!product) return null;

      product.productId = product.product_id;
      product.productName = product.product_name;
      product.productImage = product.product_image;
      product.partnerId = product.partner_id;
      product.createAt = product.create_at;

      delete product.product_id;
      delete product.product_name;
      delete product.product_image;
      delete product.partner_id;
      delete product.create_at;

      return product;
    } catch (error) {
      console.log(error);
    }
  },

  PUT: async ({ productName, productImage }, { productId }) => {
    try {
      let product = await fetch(query.PUT, productId, productName, productImage);

      if (!product) return null;

      product.partnerId = product.partner_id;
      product.productId = product.product_id;
      product.productName = product.product_name;
      product.productImage = HOST + "/" + product.product_image;
      product.createAt = product.create_at;

      delete product.partner_id;
      delete product.product_id;
      delete product.product_name;
      delete product.product_image;
      delete product.create_at;

      return product;
    } catch (error) {
      console.log(error);
    }
  },

  DELETE: async ({ productId }) => {
    try {
      let product = await fetch(query.DELETE, productId);

      if (!product) return null;

      product.partnerId = product.partner_id;
      product.productId = product.product_id;
      product.productName = product.product_name;
      product.productImage = HOST + "/" + product.product_image;
      product.createAt = product.create_at;

      delete product.partner_id;
      delete product.product_id;
      delete product.product_name;
      delete product.product_image;
      delete product.create_at;

      return product;
    } catch (error) {
      console.log(error);
    }
  },
};
