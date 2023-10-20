const express = require("express");
const sequelize = require("./config/sequelize");
const bodyParser = require("body-parser");
const models = require("./models/models");
const typeDefs = require("./schemas/schema");
const resolvers = require("./resolvers/resolvers");
const { ApolloServer } = require("apollo-server-express");
const databaseGraphQL = require("./data/database");

const app = express();

app.use(bodyParser.json());

async function syncDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Kết nối thành công");
    for (const modelName in models) {
      await models[modelName].sync();
      console.log(`Bảng '${modelName}' đã được tạo trong DB`);
    }
  } catch (error) {
    console.error("Không thể kết nối với DB", error);
  }
}

syncDatabase();

async function startServer() {
  server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ databaseGraphQL }),
  });
  await server.start();
  server.applyMiddleware({ app });
}
startServer();

const port = 5000;
app.listen(port, () => {
  console.log(`Server ready at http://localhost:5000${server.graphqlPath}`);
});
