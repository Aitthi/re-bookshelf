module.exports = {
  mysql: {
    database: 'bookshelf_test',
    user: 'root',
    host: 'localhost',
    port: 3306
  },

  postgres: {
    database: 'bookshelf_test',
    user: 'postgres'
  },

  sqlite3: {
    filename: ':memory:'
  }
};
