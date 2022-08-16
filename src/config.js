import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5500;
const HOST = process.env.HOST + ":" + PORT;
// const HOST = "http://192.168.100.208:5500";
const SECRET = process.env.JWT_SECRET;

const pgConfig = {
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
};

export { HOST, PORT, SECRET, pgConfig };
