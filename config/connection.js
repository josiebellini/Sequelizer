var Sequelize = require("sequelize");

var sequelize = new Sequelize("burgers_db", "root", "" {
  host: "localhost",
 dialect: "mysql",
 pool: {
 	max: 5,
 	min: 0,
 	idle: 10000
 }
});


// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

module.exports = sequelize;
