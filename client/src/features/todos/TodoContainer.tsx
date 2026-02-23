import React, { useEffect } from "react";
import TodoView from "./TodoView";
import { getTodos, createTodo, deleteTodo, updateTodo, toggleTodoCompletion } from "../../services/todo.service";

type todoEdited = {
    id: string;
    title: string;
    description: string;
    completed?: boolean;
}

const TodoContainer: React.FC = () => {
    const [todos, setTodos] = React.useState([]);

    const getTodosRequest = async () => {
        try {
            const todos = await getTodos();
            setTodos(todos);
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    }
    const createTodoRequest = async (title: string, description: string) => {
        try {
            await createTodo(title, description);
            
        } catch (error) {
            console.error("Error creating todo:", error);
        }
    }
    const deleteTodoRequest = async (id: string) => {
        try {
            await deleteTodo(id);
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    }
    const updateTodoRequest = async (todo: todoEdited) => {
        try {
            await updateTodo(todo.id, todo.title, todo.description);
            if (todo.completed !== undefined) {
                await toggleTodoCompletion(todo.id);
            }
        } catch (error) {
            console.error("Error updating todo:", error);
        }
    }


    useEffect(() => {
        (async () => {
            await getTodosRequest();
        })();
    }, []);

    const deleteSelectedTodo = async (id: string) => {
        await deleteTodoRequest(id);
        getTodosRequest();
    }
    const updateSelectedTodo = async (todo: todoEdited) => {
        await updateTodoRequest(todo)
        getTodosRequest();
    }
    const onCreate = async (title: string, description: string) => {
        await createTodoRequest(title, description);
        getTodosRequest();
    }
    return (
        <div>
            <TodoView todos={todos} onDelete={deleteSelectedTodo} onUpdate={updateSelectedTodo} onCreate={onCreate} />
        </div>
    );
};

export default TodoContainer;