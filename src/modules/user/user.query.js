export default {
  GET: `
    select 
      u.*
    from
      users as u
    where
    case
      when $1 = 0 then u.status = $2
      when $1 > 0 then u.user_id = $1
      else true
    end
    order by
      u.create_at desc;
  `,

  POST: `
    insert into
      users(username, user_number, user_message)
    values
      (
        $1,
        $2,
        $3
      )
    returning
      *;
  `,

  PUT: `
    update
      users
    set
      status = $2
    where
      user_id = $1
    returning
      *;
  `,

  DELETE: `
    update
      users
    set
      status = 'deleted'
    where
      user_id = $1
    returning
      *;
  `,
};
