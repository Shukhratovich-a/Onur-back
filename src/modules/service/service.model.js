import { HOST } from "../../config.js";
import { fetch, fetchAll } from "../../lib/postgres.js";

import query from "./service.query.js";

export default {
  GET: async ({ serivceSlug = "" }, { lang = "en" }) => {
    try {
      let services = await fetchAll(query.GET, serivceSlug, lang);

      if (services.length === 0) return [];

      services.map((service) => {
        service.serviceId = service.service_id;
        service.serviceImage = HOST + "/" + service.service_image;
        service.serviceSlug = service.service_slug;
        service.createAt = service.create_at;
        service.serviceName = service.service_name;
        service.serviceDescription = service.service_description;

        delete service.service_id;
        delete service.service_image;
        delete service.service_slug;
        delete service.create_at;
        delete service.service_name;
        delete service.service_description;

        if (service.partners[0] == null) service.partners = [];

        service.partners.map((partner) => {
          partner.partnerId = partner.partner_id;
          partner.partnerName = partner.partner_name;
          partner.partnerSite = partner.partner_site;
          partner.serviceId = partner.service_id;
          partner.createAt = partner.create_at;
          partner.partnerImage = HOST + "/" + partner.partner_image;

          delete partner.partner_id;
          delete partner.partner_name;
          delete partner.partner_site;
          delete partner.partner_image;
          delete partner.create_at;
          delete partner.service_id;

          return partner;
        });
      });

      return services;
    } catch (error) {
      console.log(error);
    }
  },

  PUT: async ({ serviceName, serviceDescription, serviceLang, serviceImage }, { serviceId }) => {
    try {
      let service = await fetch(query.PUTSERVICE, serviceId, serviceImage);

      let serviceBody = await fetch(
        query.PUTSERVICEBODY,
        serviceId,
        serviceName,
        serviceDescription,
        serviceLang
      );

      service.serviceId = service.service_id;
      service.serviceImage = service.service_image;
      service.serviceSlug = service.service_slug;
      service.serviceName = serviceBody.service_name;
      service.serviceDescription = serviceBody.service_description;
      service.createAt = service.create_at;

      delete service.service_id;
      delete service.service_image;
      delete service.service_slug;
      delete service.create_at;

      if (!service) return null;

      return service;
    } catch (error) {
      console.log(error);
    }
  },
};
