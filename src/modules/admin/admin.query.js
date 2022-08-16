export default {
  GET: `
    select 
      a.admin_id,
      a.admin_name,
      a.create_at
    from
      admins as a
    where
      a.status = 'active' and
      case
        when $1 > 0 then a.admin_id = $1
      else true
    end;
  `,

  REGISTER: `
    insert into
      admins (admin_name, admin_password)
    values
      (
        $1,
        crypt($2, gen_salt('bf'))
      )
    returning
      admin_id,
      admin_name,
      create_at;
  `,

  LOGIN: `
    select 
      a.admin_id,
      a.admin_name,
      a.create_at
    from
      admins as a
    where
      a.status = 'active'
      and lower(a.admin_name) = lower($1)
      and a.admin_password = crypt($2, a.admin_password);
  `,
};
