const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { ApolloServer, gql } = require("apollo-server-express");
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
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.use((req, res) => {
    res.send("Server Started");
  });

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
