export default {
  GET: `
    select 
      s.*,
      b.service_name,
      b.service_description,
      json_agg(p.*) as partners
    from
      services as s
    left join
      service_bodys as b on s.service_id = b.service_id
    left join
      partners as p on s.service_id = p.service_id
    where
      s.status = 'active' and b.service_lang = $2 and
      case
        when $1 != '' then s.service_slug = $1
        else true
      end
    group by
      s.service_id, b.service_name, b.service_description;
  `,

  PUTSERVICE: `
    update
      services
    set
      service_image = coalesce($2, service_image) 
    where
      service_id = $1
    returning *;
  `,

  PUTSERVICEBODY: `
    update
      service_bodys
    set
      service_name = coalesce($2, service_name),
      service_description = coalesce($3, service_description) 
    where
      service_id = $1 and service_lang = $4
    returning *;
  `,
};
