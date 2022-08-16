export default {
  GETBYID: `
    select
      pro.*,
      json_agg(pd.*) as product_params
    from
      products as pro
      left join (
        select
          *
        from
          product_params
        where
          status = 'active'
      ) as pd on pro.product_id = pd.product_id
    where
      pro.status = 'active'
      and pro.product_id = $1
    group by
      pro.product_id
    order by
      pro.create_at;
  `,

  POST: `
    insert into
      products (product_name, product_image, partner_id)
    values
      (
        $1,
        $2,
        $3
      )
    returning *;
  `,

  PUT: `
    update
      products
    set
      product_name = coalesce($2, product_name),
      product_image = coalesce($3, product_image) 
    where
      product_id = $1
    returning *;
  `,

  DELETE: `
    update
      products
    set
      status = 'deleted'
    where
      product_id = $1
    returning *;
  `,
};
