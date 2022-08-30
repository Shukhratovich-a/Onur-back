import { fetch, fetchAll } from "../../lib/postgres.js";
import query from "./about.query.js";

export default {
  GET: async ({ lang = "en" }) => {
    try {
      let about = await fetch(query.GET, lang);

      about.aboutId = about.about_id;
      about.aboutDescription = about.about_description;
      about.aboutLang = about.about_lang;
      about.createAt = about.create_at;

      delete about.about_id;
      delete about.about_description;
      delete about.about_lang;
      delete about.create_at;

      return about;
    } catch (error) {
      console.log(error);
    }
  },

  PUT: async ({ lang, aboutDescription }) => {
    try {
      let about = await fetch(query.PUT, lang, aboutDescription);

      about.aboutId = about.about_id;
      about.aboutDescription = about.about_description;
      about.aboutLang = about.about_lang;
      about.createAt = about.create_at;

      delete about.about_id;
      delete about.about_description;
      delete about.about_lang;
      delete about.create_at;

      return about;
    } catch (error) {
      console.log(error);
    }
  },
};
