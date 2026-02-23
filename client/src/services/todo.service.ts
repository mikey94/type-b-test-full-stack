import api from "./service";


export const getTodos = async () => {
    const response = await api.get("/todos");
    return response.data;
}

export const createTodo = async (title: string, description: string) => {
    const response = await api.post("/todos", { title, description });
    return response.data;
}

export const updateTodo = async (id: string, title: string, description: string) => {
    const response = await api.put(`/todos/${id}`, { title, description });
    return response.data;
}

export const deleteTodo = async (id: string) => {
    const response = await api.delete(`/todos/${id}`);
    return response.data;
}

export const toggleTodoCompletion = async (id: string) => {
    const response = await api.patch(`/todos/${id}/done`);
    return response.data;
}