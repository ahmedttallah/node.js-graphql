const Todo = require("../models/Todo");

const resolvers = {
  Query: {
    welcome: () => {
      return "Hello Ai Active!!!!";
    },

    getTodos: async () => {
      const todos = await Todo.find();
      return todos;
    },

    getTodo: async (root, args) => {
      const todo = await Todo.findById(args.id);
      return todo;
    },
  },

  Mutation: {
    addTodo: async (root, args) => {
      const newTodo = new Todo({
        title: args.title,
        detail: args.detail,
        date: args.date,
      });

      await newTodo.save();
      return newTodo;
    },

    deleteTodo: async (root, args) => {
      await Todo.findByIdAndDelete(args.id);
      return "Todo Deleted :(";
    },
  },
};

module.exports = resolvers;
