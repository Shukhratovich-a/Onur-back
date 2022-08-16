select
  p. *,
  json_agg(pr. *) as products
from
  partners as p
  left join (
    select
      pro. *,
      json_agg(pd. *) as product_descriptions
    from
      products as pro
      left join product_descriptions as pd on pro.product_id = pd.product_id
    group by
      pro.product_id
  ) as pr on pr.partner_id = p.partner_id
where
  p.status = 'active'
  and p.partner_id = $1
group by
  p.partner_id;