const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { ApolloServer, gql } = require("apollo-server-express");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} = require("apollo-server-core");
const { PORT, MONGO_URI } = require("./config");
const typeDefs = require("./grapghql/typeDefs");
const resolvers = require("./grapghql/resolvers");

const app = express();

// middlewares
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

const initServer = async () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground({}),
    ],
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  // DB Connection
  mongoose
    .connect(MONGO_URI)
    .then(console.log("[OK] Connected to DB"))
    .catch((err) => {
      console.log("DB connection failed : ", err);
    });

  // Listening
  app.listen(PORT, console.log(`[OK] Listening on http://localhost:${PORT}`));
};

initServer();
