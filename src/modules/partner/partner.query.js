export default {
  GET: `
    select 
      p.*
    from
      partners as p
    where
      p.status = 'active';
  `,

  GETBYID: `
    select
      p. *,
      json_agg(pr. *) as products
    from
      partners as p
      left join (
        select
          pro. *,
          json_agg(pd. *) as product_params
        from
          products as pro
          left join product_params as pd on pro.product_id = pd.product_id
        group by
          pro.product_id
      ) as pr on pr.partner_id = p.partner_id
    where
      p.status = 'active'
      and p.partner_id = $1
    group by
      p.partner_id;
  `,
};
