import { fetch, fetchAll } from "../../lib/postgres.js";
import query from "./admin.query.js";

export default {
  GET: async ({ adminId = 0 }) => {
    try {
      return await fetchAll(query.GET, adminId);
    } catch (error) {
      console.log(error);
    }
  },

  REGISTER: async ({ adminName, password }) => {
    try {
      return await fetch(query.REGISTER, adminName, password);
    } catch (error) {
      console.log(error);
    }
  },

  LOGIN: async ({ adminName, password }) => {
    try {
      return await fetch(query.LOGIN, adminName, password);
    } catch (error) {
      console.log(error);
    }
  },
};
