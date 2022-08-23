import { fetch, fetchAll } from "../../lib/postgres.js";
import query from "./user.query.js";

export default {
  GET: async ({ userId = 0 }, { status = "waiting" }) => {
    try {
      let users = await fetchAll(query.GET, userId, status);

      users = users.map((user) => {
        user.userId = user.user_id;
        user.userNumber = user.user_number;
        user.userMessage = user.user_message;
        user.createAt = user.create_at;

        delete user.user_id;
        delete user.user_number;
        delete user.user_message;
        delete user.create_at;

        return user;
      });

      return users;
    } catch (error) {
      console.log(error);
    }
  },

  POST: async ({ username, userContact, userMessage }) => {
    try {
      let user = await fetchAll(query.POST, username, userContact, userMessage);

      user.userId = user.user_id;
      user.userNumber = user.user_number;
      user.userMessage = user.user_message;
      user.createAt = user.create_at;

      delete user.user_id;
      delete user.user_number;
      delete user.user_message;
      delete user.create_at;

      return user;
    } catch (error) {
      console.log(error);
    }
  },

  PUT: async ({ userId }, { status }) => {
    try {
      let user = await fetch(query.PUT, userId, status);

      user.userId = user.user_id;
      user.userNumber = user.user_number;
      user.userMessage = user.user_message;
      user.createAt = user.create_at;

      delete user.user_id;
      delete user.user_number;
      delete user.user_message;
      delete user.create_at;

      return user;
    } catch (error) {
      console.log(error);
    }
  },

  DELETE: async ({ userId }) => {
    try {
      let user = await fetchAll(query.DELETE, userId);

      user.userId = user.user_id;
      user.userNumber = user.user_number;
      user.userMessage = user.user_message;
      user.createAt = user.create_at;

      delete user.user_id;
      delete user.user_number;
      delete user.user_message;
      delete user.create_at;

      return user;
    } catch (error) {
      console.log(error);
    }
  },
};
