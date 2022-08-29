export default {
  GET: `
    select
      n.*
    from
      news as n
    where
      n.status = 'active' and
      case
        when $1 > 0 then n.news_id = $1
        when $2 > 0 then n.service_id = $2
        else true
      end;
  `,

  POST: `
    insert into
      news (news_title, news_desctiption, news_image, service_id)
    values
      (
        $1,
        $2,
        $3,
        $4
      )
    returning *;
  `,

  PUT: `
    update
      news
    set
      news_title = coalesce($2, news_title),
      news_desctiption = coalesce($3, news_desctiption),
      news_image = coalesce($4, news_image),
      service_id = coalesce($5, service_id)
    where
      news_id = $1
    returning *;
  `,

  DELETE: `
    update
      news
    set
      status = 'deleted'
    where
      news_id = $1
    returning *;
  `,
};
