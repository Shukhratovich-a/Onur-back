import { HOST, PORT } from "../../config.js";
import { fetch, fetchAll } from "../../lib/postgres.js";

import query from "./partner.query.js";

export default {
  GET: async () => {
    try {
      let partners = await fetchAll(query.GET);

      if (partners.length === 0) return [];

      partners = partners.map((partner) => {
        partner.serviceId = partner.service_id;
        partner.partnerId = partner.partner_id;
        partner.partnerName = partner.partner_name;
        partner.partnerSite = partner.partner_site;
        partner.createAt = partner.create_at;
        partner.partnerImage = HOST + "/" + partner.partner_image;

        delete partner.service_id;
        delete partner.partner_id;
        delete partner.partner_name;
        delete partner.partner_site;
        delete partner.partner_image;
        delete partner.create_at;

        return partner;
      });

      return partners;
    } catch (error) {
      console.log(error);
    }
  },

  GETBYID: async ({ partnerId = 0 }) => {
    try {
      let partner = await fetch(query.GETBYID, partnerId);

      if (!partner) return null;

      partner.partnerId = partner.partner_id;
      partner.serviceId = partner.service_id;
      partner.partnerName = partner.partner_name;
      partner.partnerSite = partner.partner_site;
      partner.createAt = partner.create_at;
      partner.partnerImage = HOST + "/" + partner.partner_image;

      delete partner.partner_id;
      delete partner.service_id;
      delete partner.partner_name;
      delete partner.partner_site;
      delete partner.partner_image;
      delete partner.create_at;

      partner.products = partner.products[0] ? partner.products : [];

      partner.products = partner.products.map((product) => {
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
      });

      return partner;
    } catch (error) {
      console.log(error);
    }
  },

  POST: async ({ partnerName, partnerSite, partnerImage, serviceId }) => {
    try {
      let partner = await fetch(query.POST, partnerName, partnerSite, partnerImage, serviceId);

      if (!partner) return null;

      partner.partnerId = partner.partner_id;
      partner.serviceId = partner.service_id;
      partner.partnerName = partner.partner_name;
      partner.partnerSite = partner.partner_site;
      partner.partnerImage = HOST + "/" + partner.partner_image;
      partner.createAt = partner.create_at;

      delete partner.partner_id;
      delete partner.service_id;
      delete partner.partner_name;
      delete partner.partner_site;
      delete partner.partner_image;
      delete partner.create_at;

      return partner;
    } catch (error) {
      console.log(error);
    }
  },

  PUT: async ({ partnerName, partnerSite, partnerImage, serviceId }, { partnerId }) => {
    try {
      let partner = await fetch(
        query.PUT,
        partnerId,
        partnerName,
        partnerSite,
        partnerImage,
        serviceId
      );

      if (!partner) return null;

      partner.partnerId = partner.partner_id;
      partner.serviceId = partner.service_id;
      partner.partnerName = partner.partner_name;
      partner.partnerSite = partner.partner_site;
      partner.partnerImage = HOST + "/" + partner.partner_image;
      partner.createAt = partner.create_at;

      delete partner.partner_id;
      delete partner.service_id;
      delete partner.partner_name;
      delete partner.partner_site;
      delete partner.partner_image;
      delete partner.create_at;

      return partner;
    } catch (error) {
      console.log(error);
    }
  },

  DELETE: async ({ partnerId }) => {
    try {
      let partner = await fetch(query.DELETE, partnerId);

      if (!partner) return null;

      partner.partnerId = partner.partner_id;
      partner.partnerName = partner.partner_name;
      partner.partnerSite = partner.partner_site;
      partner.partnerImage = HOST + "/" + partner.partner_image;
      partner.createAt = partner.create_at;

      delete partner.partner_id;
      delete partner.partner_name;
      delete partner.partner_site;
      delete partner.partner_image;
      delete partner.create_at;

      return partner;
    } catch (error) {
      console.log(error);
    }
  },
};
