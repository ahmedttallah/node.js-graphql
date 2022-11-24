const Todo = require("../models/Todo");

const resolvers = {
  Query: {
    welcome: () => {
      return "Hello World!!!!";
    },

    getTodos: async () => {
      const todos = await Todo.find();
      return todos;
    },
  },
};

module.exports = resolvers;
