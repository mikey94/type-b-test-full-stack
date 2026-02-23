import { Todo } from '../models/todo.model.js';

export const createTodo = async (title: string, description: string) => {
    const newTodo = new Todo({ title, description });
    return await newTodo.save();
};

export const getTodos = async () => {
    return await Todo.find();
};

export const updateTodo = async (id: string, title: string, description: string) => {
    return await Todo.findByIdAndUpdate(id, { title, description }, { new: true });
};

export const deleteTodo = async (id: string) => {
    return await Todo.findByIdAndDelete(id);
};

export const toggleTodoCompletion = async (id: string) => {
    const todo = await Todo.findById(id);
    if (!todo) {
        throw new Error("Todo not found");
    }
    todo.completed = !todo.completed;
    return await todo.save();
};