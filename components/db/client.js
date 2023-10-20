const pg = require("pg");

const connectionString = process.env.DATABASE_URL || 'https://localhost:5432/d_m_menue';

const client = new pg.Pool({
  connectionString,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
});

module.exports = client;