const sequelize = require("../config/sequelize");

const Department = require("./01Department");
const PartialDay = require("./02PartialDay");
const Request = require("./Request");
const RequestReason = require("./RequestReason");
const Specification = require("./Specification");
const RequestType = require("./RequestType");
const Status = require("./Status");
const User = require("./User");

const models = {
  Department: Department(sequelize),
  PartialDay: PartialDay(sequelize),
  Status: Status(sequelize),
  RequestType: RequestType(sequelize),
  RequestReason: RequestReason(sequelize),
  Specification: Specification(sequelize),
  User: User(sequelize),
  Request: Request(sequelize),
};

module.exports = models;
