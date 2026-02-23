import { Router } from "express";
import { 
    getTodosController, 
    toggleTodoCompletionController, 
    createTodoController, 
    updateTodoController, 
    deleteTodoController 
} from "../controllers/todo.controller.js";

const router = Router();

router.get('/todos', getTodosController);
router.patch('/todos/:id/done', toggleTodoCompletionController);
router.post('/todos', createTodoController);
router.put('/todos/:id', updateTodoController);
router.delete('/todos/:id', deleteTodoController);

export default router;