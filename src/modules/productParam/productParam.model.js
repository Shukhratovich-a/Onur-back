import { HOST, PORT } from "../../config.js";
import { ValidationError } from "../../lib/error.js";
import { fetch, fetchAll } from "../../lib/postgres.js";
import { productParamPostScheme } from "../../lib/validations.js";

import query from "./productParam.query.js";

export default {
  POST: async ({ params = [], productId }) => {
    try {
      const productParams = [];
      let product = {};

      if (params.length != 0) {
        for (let param of params) {
          const { error } = productParamPostScheme.validate(param);

          if (error) continue;

          const { productParamName, productParamText } = param;
          let data = await fetch(query.POST, productId, productParamName, productParamText);

          data.productParamId = data.product_param_id;
          data.productParamName = data.product_param_name;
          data.productParamText = data.product_param_text;
          data.productId = data.product_id;
          data.createAt = data.create_at;

          delete data.product_param_id;
          delete data.product_param_name;
          delete data.product_param_text;
          delete data.product_id;
          delete data.create_at;

          if (data) productParams.push(data);
        }
      }

      product = {
        productId,
        productParams,
      };

      if (product.productParams.length === 0) return null;

      return product;
    } catch (error) {
      console.log(error);
    }
  },

  PUT: async ({ productParamName, productParamText }, { paramId }) => {
    try {
      let param = await fetch(query.PUT, paramId, productParamName, productParamText);

      if (!param) return null;

      param.productParamId = param.product_param_id;
      param.productParamName = param.product_param_name;
      param.productParamText = param.product_param_text;
      param.productId = param.product_id;
      param.createAt = param.create_at;

      delete param.product_param_id;
      delete param.product_param_name;
      delete param.product_param_text;
      delete param.product_id;
      delete param.create_at;

      return param;
    } catch (error) {
      console.log(error);
    }
  },

  DELETE: async ({ paramId }) => {
    try {
      let param = await fetch(query.DELETE, paramId);

      if (!param) return null;

      param.productParamId = param.product_param_id;
      param.productParamName = param.product_param_name;
      param.productParamText = param.product_param_text;
      param.productId = param.product_id;
      param.createAt = param.create_at;

      delete param.product_param_id;
      delete param.product_param_name;
      delete param.product_param_text;
      delete param.product_id;
      delete param.create_at;

      return param;
    } catch (error) {
      console.log(error);
    }
  },
};
