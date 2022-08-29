drop database if exists onur;
create database onur;

\c onur;

create extension pgcrypto;

create type lang as enum('ru', 'uz', 'en');

drop table if exists admins;
create table admins(
  admin_id serial primary key,
  admin_name varchar(32) unique not null,
  admin_password varchar(64) not null,
  status varchar(16) default 'active' not null,
  create_at timestamp default current_timestamp
);

drop table if exists users;
create table users(
  user_id serial primary key,
  username varchar(64) not null,
  user_number varchar(12) not null,
  user_message varchar(1024),
  status varchar(16) default 'waiting' not null,
  create_at timestamp default current_timestamp
);

drop table if exists services;
create table services(
  service_id serial primary key,
  service_image varchar(256) not null,
  service_slug varchar(64) unique not null,
  status varchar(16) default 'active' not null,
  create_at timestamp default current_timestamp
);

drop table if exists service_bodys;
create table service_bodys(
  service_body_id serial primary key,
  service_name varchar(32) not null,
  service_description varchar(4096) not null,
  service_lang lang default('ru') not null,
  service_id int references services(service_id) not null,
  status varchar(16) default 'active' not null,
  create_at timestamp default current_timestamp
);

drop table if exists partners;
create table partners(
  partner_id serial primary key,
  partner_name varchar(32) not null,
  partner_site varchar(64) not null,
  partner_image varchar(256) not null,
  service_id int references services(service_id) not null,
  status varchar(16) default 'active' not null,
  create_at timestamp default current_timestamp
);

drop table if exists products;
create table products(
  product_id serial primary key,
  product_name varchar(256) not null,
  product_image varchar(256) not null,
  partner_id int references partners(partner_id) not null,
  status varchar(16) default 'active' not null,
  create_at timestamp default current_timestamp
);

drop table if exists product_params;
create table product_params(
  product_param_id serial primary key,
  product_param_name varchar(128) not null,
  product_param_text varchar(512) not null,
  product_id int references products(product_id) not null,
  status varchar(16) default 'active' not null,
  create_at timestamp default current_timestamp
);

drop table if exists news;
create table news(
  news_id serial primary key,
  news_title varchar(512) not null,
  news_description varchar(4096) not null,
  news_image varchar(256) not null,
  service_id int references services(service_id),
  status varchar(16) default 'active' not null,
  create_at timestamp default current_timestamp
);

drop table if exists about;
create table about(
  about_id serial primary key,
  about_description varchar(4096) not null,
  about_lang varchar(16) default('ru') unique not null,
  status varchar(16) default 'active' not null,
  create_at timestamp default current_timestamp
);

