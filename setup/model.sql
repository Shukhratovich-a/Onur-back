drop database if exists onur;
create database onur;

\c onur;

create extension pgcrypto;

drop table if exists admins;
create table admins(
  admin_id serial primary key,
  admin_name varchar(32) unique not null,
  admin_password varchar(64) not null,
  status varchar(16) default 'active' not null,
  create_at timestamp default current_timestamp
);

drop table if exists services;
create table services(
  service_id serial primary key,
  service_name varchar(32) not null,
  service_description varchar(1024) not null,
  service_deparment varchar(128) not null,
  service_image varchar(256) not null,
  status varchar(16) default 'active' not null,
  create_at timestamp default current_timestamp
);

drop table if exists partners;
create table partners(
  partner_id serial primary key,
  partner_name varchar(32) not null,
  partner_site varchar(64) not null,
  partner_image varchar(256) not null,
  status varchar(16) default 'active' not null,
  create_at timestamp default current_timestamp
);

drop table if exists products;
create table products(
  product_id serial primary key,
  product_name varchar(256) not null,
  product_image varchar(256) not null,
  partner_id int references partners(partner_id),
  status varchar(16) default 'active' not null,
  create_at timestamp default current_timestamp
);

drop table if exists product_params;
create table product_params(
  product_param_id serial primary key,
  product_param_name varchar(128) not null,
  product_param_text varchar(256) not null,
  product_id int references products(product_id),
  status varchar(16) default 'active' not null,
  create_at timestamp default current_timestamp
);
