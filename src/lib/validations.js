import Joi from "joi";

// admin
const loginScheme = Joi.object({
  adminName: Joi.string().required(),
  password: Joi.string().required(),
});

const registerScheme = Joi.object({
  adminName: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(8).max(60).required(),
});

// user
const userPostScheme = Joi.object({
  username: Joi.string().min(3).max(64).required(),
  userContact: Joi.string().min(12).max(12).required(),
  userMessage: Joi.string().max(1020),
});

// partner
const partnerPostScheme = Joi.object({
  partnerName: Joi.string().min(1).max(32).required(),
  partnerSite: Joi.string().uri().min(6).max(60).required(),
});

const partnerPutScheme = Joi.object({
  partnerName: Joi.string().min(1).max(32),
  partnerSite: Joi.string().uri().min(6).max(60),
});

// product
const productPostScheme = Joi.object({
  productName: Joi.string().min(1).max(250).required(),
  partnerId: Joi.number().min(1).required(),
});

const productPutScheme = Joi.object({
  productName: Joi.string().min(1).max(250).required(),
  partnerId: Joi.number().min(1).required(),
});

// productParam
const productParamPostScheme = Joi.object({
  productParamName: Joi.string().min(1).max(125).required(),
  productParamText: Joi.string().min(1).max(250).required(),
});

const productParamPutScheme = Joi.object({
  productParamName: Joi.string().min(1).max(125),
  productParamText: Joi.string().min(1).max(250),
});

export {
  loginScheme,
  registerScheme,
  userPostScheme,
  partnerPostScheme,
  partnerPutScheme,
  productPostScheme,
  productPutScheme,
  productParamPostScheme,
  productParamPutScheme,
};
