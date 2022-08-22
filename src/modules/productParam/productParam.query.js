export default {
  POST: `
    insert into
      product_params (product_id, product_param_name, product_param_text)
    values
      (
        $1,
        $2,
        $3
      )
    returning *;
  `,

  DELETEFORPUT: `
    delete from
      product_params
    where
      product_id = $1
    returning *;
  `,

  PUT: `
    update
      product_params
    set
      product_param_name = coalesce($2, product_param_name),
      product_param_text = coalesce($3, product_param_text) 
    where
      product_param_id = $1
    returning *;
  `,

  DELETE: `
    update
      product_params
    set
      status = 'deleted'
    where
      product_param_id = $1
    returning *;
  `,
};
