insert into
  admins (admin_name, admin_password)
values
  (
    'Abdulaziz',
    crypt('12345678', gen_salt('bf'))
  );
  
insert into
  users(username, user_number, user_message)
values
  (
    'Abdulaziz',
    '998908050447',
    'hbjnkm fjksbd sdnf sfkj sdfj msdfsj dfsd fmsdfns dfosd sdofj dsfsdn jfdsfsdnj d'
  ),
  (
    'Tohir',
    '998908050447',
    'hbjnkm fjksbd sdnf sfkj sdfj msdfsj dfsd fmsdfns dfosd sdofj dsfsdn jfdsfsdnj d'
  ),
  (
    'Javlon',
    '998908050447',
    'hbjnkm fjksbd sdnf sfkj sdfj msdfsj dfsd fmsdfns dfosd sdofj dsfsdn jfdsfsdnj d'
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
    'Siphons for washbasins and sinks',
    '1050.png',
    1
  ),
  (
    'Full Bore Brass Ball Valve For Water PN 40',
    'KAS1.jpg',
    2
  ),
  (
    'Вентиль бабочка М/М PN 25 ЭКО',
    'KAS2.jpg',
    2
  ),
  (
    'Коллектор с краниками для т/п ЭКО',
    'KAS3.jpg',
    2
  ),
  (
    'коллектор с расходамерами нержовейка для т/п',
    'KAS4.jpg',
    2
  ),
  (
    'PP-R FIBER PIPE PN 25 SDR 6',
    'SPK1.jpg',
    3
  ),
  (
    'PP-R FIBER PIPE PN 20 SDR 7,4',
    'SPK2.jpg',
    3
  ),
  (
    'PP-R Chrome plated valve',
    'SPK3.jpg',
    3
  ),
  ('PE-RT Pipe', 'SPK4.jpg', 3),
  (
    'CM 60 TEST PRESSURE PUMP WITH PLASTIC PISTON',
    'CANDAN1.jpg',
    4
  ),
  (
    'AUTOMATIC PIPE CUTTER 16-40mm',
    'CANDAN2.jpg',
    4
  ),
  (
    'PIPE CUTTER 16-40mm',
    'CANDAN3.jpg',
    4
  ),
  (
    'PLASTIC PIPE WELDING SOCKET',
    'CANDAN4.jpg',
    4
  ),
  (
    'Гайка нержавеющий хомутд (Шиной)',
    'BAYKARA1.jpg',
    5
  ),
  (
    'ПРИЦЕПНОЙ ДЮБЕЛЬ',
    'BAYKARA2.jpg',
    5
  );
  
insert into
  product_params (
    product_param_name,
    product_param_text,
    product_id
  )
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
  ('box volume', '0,010m3', 1),
  ('box weight', '14,0kg', 1),
  ('quantity of box', '1', 1),
  ('manufacturer', 'Turkey', 1),
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
  ('box volume', '0,010m3', 2),
  ('box weight', '14,0kg', 2),
  ('quantity of box', '1', 2),
  ('manufacturer', 'Turkey', 2),
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
  ('box volume', '0,010m3', 3),
  ('box weight', '14,0kg', 3),
  ('quantity of box', '1', 3),
  ('manufacturer', 'Turkey', 3),
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
  ('box volume', '0,010m3', 4),
  ('box weight', '14,0kg', 4),
  ('quantity of box', '1', 4),
  ('manufacturer', 'Turkey', 4);