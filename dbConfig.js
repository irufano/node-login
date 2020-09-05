require("dotenv").config();

const { Pool } = require("pg");

const isProductionn = process.env.NODE_ENV === "production";

const connctionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const pool = new Pool({
  connectionString: isProductionn ? process.env.DATABASE_URL : connctionString,
});

module.exports = { pool };
