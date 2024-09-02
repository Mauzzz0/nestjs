module.exports = {
  any: {
    username: process.env.POSTGRES_WRITE_USER,
    password: process.env.POSTGRES_WRITE_PASSWORD,
    host: process.env.POSTGRES_WRITE_HOST,
    port: Number(process.env.POSTGRES_WRITE_PORT),
    database: process.env.POSTGRES_WRITE_DB,
    dialect: 'postgres',
  },
};
