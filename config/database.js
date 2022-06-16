module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'databasegss.c6d4qw84ftau.eu-west-2.rds.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'mypassword'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});


// postgres://postgres:mypassword@databasegss.c6d4qw84ftau.eu-west-2.rds.amazonaws.com:5432/postgres
