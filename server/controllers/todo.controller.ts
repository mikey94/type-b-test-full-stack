import { Request, Response } from "express";
import { getTodos, toggleTodoCompletion, createTodo, updateTodo, deleteTodo } from "../services/todo.service.js";

export const getTodosController = async (req: Request, res: Response) => {
    try {
        const todos = await getTodos();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch todos" });
    }
};

export const createTodoController = async (req: Request, res: Response) => {
    const { title, description } = req.body as { title: string; description: string };
    try {
        const newTodo = await createTodo(title, description);
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ error: "Failed to create todo" });
    }
};

export const updateTodoController = async (req: Request, res: Response) => {
    const { id } = req.params as { id: string };
    const { title, description } = req.body as { title: string; description: string;};
    try {
        const updatedTodo = await updateTodo(id, title, description);
        if (!updatedTodo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.json(updatedTodo);
    } catch (error) {
        res.status(500).json({ error: "Failed to update todo" });
    }
};

export const deleteTodoController = async (req: Request, res: Response) => {
    const { id } = req.params as { id: string };
    try {
        const deletedTodo = await deleteTodo(id);
        if (!deletedTodo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.json({ message: "Todo deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete todo" });
    }
};

export const toggleTodoCompletionController = async (req: Request, res: Response) => {
    const { id } = req.params as { id: string };
    try {
        const toggledTodo = await toggleTodoCompletion(id);
        if (!toggledTodo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.json(toggledTodo);
    } catch (error) {
        res.status(500).json({ error: "Failed to toggle todo completion" });
    }
};