insert into
  admins (admin_name, admin_password)
values
  (
    'Abdulaziz',
    crypt('12345678', gen_salt('bf'))
  );

insert into
  partners (partner_name, partner_site, partner_image)
values
  (
    'nova',
    'https://novaplastik.com/',
    'nova.svg'
  ),
  (
    'kas',
    'https://kas.com/',
    'kas.svg'
  ),
  (
    'spk',
    'https://spk.com/',
    'spk.svg'
  ),
  (
    'candan',
    'http://candanmakina.com/',
    'candan.svg'
  ),
  (
    'baykara',
    'https://baykara.com/',
    'baykara.svg'
  );

insert into
  products (product_name, product_image, partner_id)
values
  (
    'Concealed Cisterns',
    '4501.png',
    1
  ),
  (
    'Toilet seats',
    '2010.png',
    1
  ),
  (
    'Toilet seats',
    '2076.png',
    1
  ),
  (
    'Siphons for washbasins and sinks"',
    '1050.png',
    1
  );

insert into
  product_params (product_param_name, product_param_text, product_id)
values
  (
    'description',
    'Concelead cistern for hang-wall closets with metal frame',
    1
  ),
  (
    'box dimensions',
    '1145x525x165mm',
    1
  ),
  (
    'box volume',
    '0,010m3',
    1
  ),
  (
    'box weight',
    '14,0kg',
    1
  ),
  (
    'quantity of box',
    '1',
    1
  ),
  (
    'manufacturer',
    'Turkey',
    1
  ),
  (
    'description',
    'Concelead cistern for hang-wall closets with metal frame',
    2
  ),
  (
    'box dimensions',
    '1145x525x165mm',
    2
  ),
  (
    'box volume',
    '0,010m3',
    2
  ),
  (
    'box weight',
    '14,0kg',
    2
  ),
  (
    'quantity of box',
    '1',
    2
  ),
  (
    'manufacturer',
    'Turkey',
    2
  ),
  (
    'description',
    'Concelead cistern for hang-wall closets with metal frame',
    3
  ),
  (
    'box dimensions',
    '1145x525x165mm',
    3
  ),
  (
    'box volume',
    '0,010m3',
    3
  ),
  (
    'box weight',
    '14,0kg',
    3
  ),
  (
    'quantity of box',
    '1',
    3
  ),
  (
    'manufacturer',
    'Turkey',
    3
  ),
  (
    'description',
    'Concelead cistern for hang-wall closets with metal frame',
    4
  ),
  (
    'box dimensions',
    '1145x525x165mm',
    4
  ),
  (
    'box volume',
    '0,010m3',
    4
  ),
  (
    'box weight',
    '14,0kg',
    4
  ),
  (
    'quantity of box',
    '1',
    4
  ),
  (
    'manufacturer',
    'Turkey',
    4
  );
