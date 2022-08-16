import {
  loginScheme,
  registerScheme,
  partnerPostScheme,
  partnerPutScheme,
  productPostScheme,
  productPutScheme,
  productParamPutScheme,
} from "../lib/validations.js";
import { ValidationError } from "../lib/error.js";

export default (req, res, next) => {
  try {
    // admins
    if (req.url == "/admins/login") {
      let { error } = loginScheme.validate(req.body);
      if (error) throw error;
    }

    if (req.url == "/admins/register") {
      let { error } = registerScheme.validate(req.body);
      if (error) throw error;
    }

    // partners
    if (req.url == "/partners" && req.method == "POST") {
      let { error } = partnerPostScheme.validate(req.body);
      if (error) throw error;
    }

    if (req.url == "/partners/" + req.params.partnerId && req.method == "PUT") {
      let { error } = partnerPutScheme.validate(req.body);
      if (error) throw error;
    }

    // products
    if (req.url == "/products" && req.method == "POST") {
      let { error } = productPostScheme.validate(req.body);
      if (error) throw error;
    }

    if (req.url == "/products/" + req.params.productId && req.method == "PUT") {
      let { error } = productPutScheme.validate(req.body);
      if (error) throw error;
    }

    // productparams
    if (req.url == "/productparams/" + req.params.paramId && req.method == "PUT") {
      let { error } = productParamPutScheme.validate(req.body);
      if (error) throw error;
    }

    return next();
  } catch (error) {
    return next(new ValidationError(401, error.message));
  }
};
