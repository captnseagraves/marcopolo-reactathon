module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/pools_app'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

}
