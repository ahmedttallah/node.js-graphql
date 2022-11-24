updateTodo(id: ID, title: String, detail: String, date: Date): Todo

updateTodo: async (root, args) => {
    const { id, title, detail, date } = args;
    const updatedTodo = {
      title,
      detail,
      date,
    };

    const todo = await Todo.findByIdAndUpdate(id, updatedTodo, { new: true });
    return todo;
  },