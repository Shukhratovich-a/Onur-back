insert into
  admins (admin_name, admin_password)
values
  (
    'abdulaziz',
    crypt('12345678', gen_salt('bf'))
  );

insert into
  services (service_slug, service_image)
values
  ('it', 'It.webp'),
  ('logistic', 'Logistic.webp'),
  ('plumbing', 'Plumbing.webp'),
  ('accounting', 'Accounting.webp'),
  ('distribution', 'Distribution.webp');

insert into
  service_bodys (
    service_name,
    service_description,
    service_lang,
    service_id
  )
values
  (
    'IT',
    'Our life in the 21st century is unimaginable without IT technologies. With this in mind, this section of ours is a separate platform, the main task of which is digitization. Work is underway on the Android platform and the Web platform. These programs will be put into use in the near future',
    'en',
    1
  ),
  (
    'Информационные технологии',
    'Наша жизнь в 21 веке немыслима без IT-технологий. В связи с этим наш отдел аутсорсинга представляет собой отдельную платформу, основной задачей которой является цифровизация. Ведутся работы на платформе Android и веб-платформе. Эти программы пригодятся в ближайшем будущем.',
    'ru',
    1
  ),
  (
    'Axborot texnologiyalari',
    'XXI asrda hayotimizni IT texnalogiyalarsiz tasavvur qilib bo''lmaydi. Shuni hisobga olgan holda, bizning bu bo''lim alohida platforma bo''lib, asosiy vazifasi raqamlashtirishdan iborat. Android platformasi va Web platformasida ish olib borilmoqda. Yaqin kunlarda ushbu dasturlarimiz foydalanishga topshiriladi.',
    'uz',
    1
  ),
  (
    'Logistic',
    'In 2019, the ONUR&#174; logistics department was opened under the ONUR&#174; company. This department brings and delivers various goods from Turkey to Uzbekistan through Fura (Tir). It also completes the document work that occurs in this process.',
    'en',
    2
  ),
  (
    'Логистика',
    'В 2019 году был открыт отдел логистики ONUR&#174; при компании ONUR&#174;. Этот отдел привозит и доставляет различные товары из Турции в Узбекистан через Фуру (Тир). Он также завершает работу с документами, которая происходит в этом процессе.',
    'ru',
    2
  ),
  (
    'Logistika',
    '2019 yilda ONUR&#174; kompaniyasini qoshida ONUR&#174; logistika bo''limi ochildi. Bu bo''lim Turkiyadan O''zbekistonga turli hildagi tovarlarni Fura(Tir) orqali olib keladi va yetkazib beradi. Ushbu jarayonda yuzaga keladigan dokument ishlarini ham bitkazib beradi.',
    'uz',
    2
  ),
  (
    'Plumbing',
    'This department, working in cooperation with the most prominent companies of the Turkish state, has been meeting the plumbing needs of our people for more than 15 years.',
    'en',
    3
  ),
  (
    'Сантехника',
    'Этот отдел, работая в сотрудничестве с самыми известными компаниями турецкого государства, уже более 15 лет удовлетворяет потребности наших людей в сантехнике.',
    'ru',
    3
  ),
  (
    'Santexnika',
    'Turkiya davlatining en ko''zga ko''ringan kompaniyalari bilan hamkorlikda ishlaydigan bu bo''lim, 15 yildan ko''p vaqt mobaynida xalqimizning santexnikaga oid ehtiyojlarini qondirib kelmoqda.',
    'uz',
    3
  ),
  (
    'Accounting',
    'We aimed to open this department in order to facilitate the work of khujjar, which is the main problem of small and medium-sized entrepreneurs. Soon this department will also start its activities',
    'en',
    4
  ),
  (
    'Бухгалтерский учет',
    'Мы стремились открыть этот отдел, чтобы облегчить работу худжар, которая является основной проблемой мелких и средних предпринимателей. Вскоре этот отдел также начнет свою деятельность.',
    'ru',
    4
  ),
  (
    'Buxgalteriya hisobi',
    'Kichik va o''rta turdagi tadbirkorlarning asosiy muammolari bo''lgan xujjar ishlarini osonlashtirish maqsadida ushbu bo''limni ochishni maqsad qildik. Tez orada bu bo''limimiz ham o''z faoliyatini boshlaydi.',
    'uz',
    4
  ),
  (
    'Distribution',
    'In this section, which includes the entire city of Tashkent and partially the Tashkent region, more than 5000 products related to the construction industry are delivered. In the future, these plans will be implemented throughout Uzbekistan.',
    'en',
    5
  ),
  (
    'Распределение',
    'Ташкент и частично Ташкентскую область, поставляется более 5000 товаров, связанных со строительной отраслью. В дальнейшем эти планы будут реализовываться по всему Узбекистану.',
    'ru',
    5
  ),
  (
    'Tarqatish',
    'Butun Toshken shahri va qisman Toshkent viloyatini O''z ichiga olgan ushbu bo''limda, 5000 dan ortiq qurilish soxasiga oid maxsulotlarni yetkazib beish bilan shug''ullanadi. Kelajakda bu rejalarni butun O''zbekiston bo''ylab amalga oshrish.',
    'uz',
    5
  );

insert into
  partners (
    partner_name,
    partner_site,
    partner_image,
    service_id
  )
values
  (
    'nova',
    'https://novaplastik.com/',
    'nova.svg',
    3
  ),
  (
    'kas',
    'https://kas.com/',
    'kas.svg',
    3
  ),
  (
    'spk',
    'https://spk.com/',
    'spk.svg',
    3
  ),
  (
    'candan',
    'http://candanmakina.com/',
    'candan.svg',
    3
  ),
  (
    'baykara',
    'https://baykara.com/',
    'baykara.svg',
    3
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

insert into
  about(about_description, about_lang)
values
  (
    'This company was founded in 2004, and started with the import of household appliances from the United Arab Emirates.
By 2008, cooperation relations were established with famous companies of the Turkish state, and an agreement was signed between the company ''SPK''.
In 2009, he cooperated with famous brands ''KAS'' and ''NOVA'' in Turkey. In 2010, he signed contracts with ''Candan'' and in 2012 with ''Baykara'' companies. In 2019, a factory branch of the Turkish company ''Nova'' was built in Uzbekistan. In the same year, the logistics department of the company was opened.
In 2021, the company was renamed to the new brand "Onur&#174;". The main activity of the company is trade in plumbing products and import from Turkey to the market of Uzbekistan.',
    'en'
  ),
  (
    'Эта компания была основана в 2004 году и начинала с импорта бытовой техники из Объединенных Арабских Эмиратов.
К 2008 году были установлены отношения сотрудничества с известными компаниями Турецкого государства, и было подписано соглашение между компанией «СПК».
В 2009 году он снова сотрудничал с известными брендами «KAS» и «NOVA» в Турции. В 2010 году он подписал контракты с «Candan», а в 2012 году с компаниями «Baykara». В 2019 году в Узбекистане построен завод-филиал турецкой компании «Нова». В том же году был открыт отдел логистики компании.
В 2021 году компания была переименована в новый бренд ONUR&#174;». Основным видом деятельности компании является торговля сантехнической продукцией и импорт из Турции на рынок Узбекистана.',
    'ru'
  ),
  (
    'Ushbu kompaniya 2004 yilda tashkil etilgan bo''lib, ilk mahsulotlarni Birlashgan Arab Amirliklari davlatidan maishiy texnikalarni import qilishdan boshladi.
2008 yilga kelib, Turkiya davlatining mashhur kompaniyalari bilan hamkorlik aloqalari o''rnatildi va «SPK» kompaniyasi o''rtasida shartnoma imzolandi.
2009 yilda Turkiyani yana mashhur brendlari «KAS» va «NOVA» kompaniyalari bilan hamkorliklar olib bordi. 2010 yilda esa «Candan», 2012 yilda «Baykara» kompaniyalari bilan shartnomalar imzoladi. 2019 yilda Turkiyaning «Nova» kompaniyasining zavodini filiali Uzbekistonda qurildi. Shu yili kompaniyaning logistika bo''limi ochildi.
2021 yilda kompaniya yangi brend «Onur&#174;» nomiga o''zgartirildi. Kompaniyaning asosiy faoliyati santexnika mahsulotlari savdosi bilan shug''ullanish va Turkiya davlatidan O''zbekiston bozoriga import qilish.',
    'uz'
  );
