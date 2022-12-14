import admins from "./admin/admin.router.js";
import users from "./user/user.router.js";
import services from "./service/service.router.js";
import partners from "./partner/partner.router.js";
import products from "./product/product.router.js";
import productParams from "./productParam/productParam.router.js";
import about from "./about/about.router.js";
import news from "./news/news.router.js";

export default [admins, users, services, partners, products, productParams, about, news];
