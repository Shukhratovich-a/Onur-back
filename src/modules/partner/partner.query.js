export default {
  GET: `
    select 
      p.*
    from
      partners as p
    where
      p.status = 'active'
    order by
      p.create_at;
  `,

  GETBYID: `
    select
      p. *,
      json_agg(pr.*) as products
    from
      partners as p
      left join (
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
        group by
          pro.product_id
        order by
          pro.create_at
      ) as pr on pr.partner_id = p.partner_id
    where
      p.status = 'active'
      and p.partner_id = $1
    group by
      p.partner_id;
  `,

  POST: `
    insert into
      partners (partner_name, partner_site, partner_image)
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
      partners
    set
      partner_name = coalesce($2, partner_name),
      partner_site = coalesce($3, partner_site),
      partner_image = coalesce($4, partner_image) 
    where
      partner_id = $1
    returning *;
  `,

  DELETE: `
    update
      partners
    set
      status = 'deleted'
    where
      partner_id = $1
    returning *;
  `,
};
