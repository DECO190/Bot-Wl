var knex = require('knex')({
    client: 'mysql',
    connection: {
		host: '127.0.0.1',
     	user : 'root',
      	password : '',
      	database : 'zirix' // nome do banco de dados
    }
});

module.exports = knex