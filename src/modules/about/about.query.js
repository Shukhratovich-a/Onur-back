export default {
  GET: `
    select 
      *
    from
      about
    where
      about_lang = $1;
  `,

  PUT: `
    update 
      about
    set
      about_description = $2
    where
      about_lang = $1
    returning *;
  `,
};
