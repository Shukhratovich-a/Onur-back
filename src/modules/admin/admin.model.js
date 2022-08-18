import { fetch, fetchAll } from "../../lib/postgres.js";
import query from "./admin.query.js";

export default {
  GET: async ({ adminId = 0 }) => {
    try {
      let admins = await fetchAll(query.GET, adminId);

      if (admins.length === 0) return [];

      admins = admins.map((admin) => {
        admin.adminId = admin.admin_id;
        admin.adminName = admin.admin_name;
        admin.createAt = admin.create_at;

        delete admin.admin_id;
        delete admin.admin_name;
        delete admin.create_at;

        return admin;
      });

      return admins;
    } catch (error) {
      console.log(error);
    }
  },

  REGISTER: async ({ adminName, password }) => {
    try {
      const admin = await fetch(query.REGISTER, adminName, password);

      admin.adminId = admin.admin_id;
      admin.adminName = admin.admin_name;
      admin.createAt = admin.create_at;

      delete admin.admin_id;
      delete admin.admin_name;
      delete admin.create_at;

      return admin;
    } catch (error) {
      console.log(error);
    }
  },

  LOGIN: async ({ adminName, password }) => {
    try {
      const admin = await fetch(query.REGISTER, adminName, password);

      admin.adminId = admin.admin_id;
      admin.adminName = admin.admin_name;
      admin.createAt = admin.create_at;

      delete admin.admin_id;
      delete admin.admin_name;
      delete admin.create_at;

      return admin;
    } catch (error) {
      console.log(error);
    }
  },
};
