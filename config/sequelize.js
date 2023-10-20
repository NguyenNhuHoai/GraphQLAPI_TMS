const Sequelize = require("sequelize");

const sequelize = new Sequelize("TMS", "postgres", "12341234", {
  host: "localhost",
  dialect: "postgres", // loại cơ sở dữ liệu
  logging: false,
});

module.exports = sequelize;
