import React from "react";
import styles from "./Todo.module.scss";
import Input from "../../components/reusable/Input/Input";
import Button from "../../components/reusable/Button/Button";

export type todoObj = {
  title: string;
  description: string;
  completed?: boolean;
}

export type todo = {
  _id: string,
  title: string, 
  description: string,
  completed: boolean,
  createdAt: Date,
  updatedAt: Date
}

type todoEdited = {
    id: string;
    title: string;
    description: string;
    completed?: boolean;
}

type TodoItemProps = {
    todoObj: todo;
    onPressDelete: (id: string) => void;
    onPressSave: (todo: todoEdited) => void;
}

const TodoItem = ({ todoObj, onPressDelete, onPressSave }: TodoItemProps) => {
    const [onEditMode, setOnEditMode] = React.useState(false);
    const [titleEdited, setTitleEdited] = React.useState(todoObj.title);
    const [descEdited, setDescEdited] = React.useState(todoObj.description);
    const [toggleCheckBox, setToggleCheckBox] = React.useState(todoObj.completed);

    const onDelete = () => {
        onPressDelete(todoObj._id);
    }
    const onEdit = () => {
        setOnEditMode(true);
    }
    const onSave = () => {
        const todoUpdated: todoEdited = {id: todoObj._id, title: titleEdited, description: descEdited, completed: toggleCheckBox};
        onPressSave(todoUpdated);
        setOnEditMode(false);
    }
    const onCancel = () => {
        setOnEditMode(false)
    }
    return (
        <div className={styles.todoItemWrapper}>
            <div className={styles.todoInfo}>
                {
                    !onEditMode && (
                        <>
                            <p className={styles.todoTitle}>{todoObj.title}</p>
                            <p className={styles.todoDesc}>{todoObj.description}</p>
                        </>
                    )
                }
                {
                    onEditMode && (
                        <div className={styles.editWrapper}>
                            <Input type="input" label="Title" value={titleEdited} onChange={(val) => setTitleEdited(val as string)} />
                            <Input type="input" label="Description" value={descEdited} onChange={(val) => setDescEdited(val as string)} />
                            <div className={styles.checkboxWrapper}>
                                <Input type="checkbox" label="Completed" onChange={(val) => setToggleCheckBox(val as boolean)} value={toggleCheckBox} />
                            </div>
                            <div className={styles.editCTAWrapper}>
                                <Button label={"Save"} onClick={onSave} />
                                <Button label={"Cancel"} onClick={onCancel} />
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={styles.todoCTAWrapper}>
                {
                    !onEditMode && (
                        <>    
                            <Button label={"Edit"} onClick={onEdit} />
                            <Button label={"Delete"} onClick={onDelete} />
                            <p className={styles.todoStatus} style={{ color: todoObj.completed ? 'rgb(169, 249, 49)': 'red' }}>{todoObj.completed ? "Completed" : "Not Completed"}</p>
                        </>
                    )
                }
            </div>
        </div>
    )
}

interface TodoViewProps {
    todos: todo[];
    onDelete: (id: string) => void;
    onUpdate: (todo: todoEdited) => void;
    onCreate: (title: string, description: string) => void;
}

const TodoView: React.FC<TodoViewProps> = ({ todos, onCreate, onDelete, onUpdate }) => {
    const [isOnAddMode, setIsOnAddMode] = React.useState(false);
    const [newTodoTitle, setNewTodoTitle] = React.useState("");
    const [newTodoDesc, setNewTodoDesc] = React.useState("");

    const onPressDelete = (id: string) => {
        onDelete(id);
    }

    const onPressSave = (todo: todoEdited) => {
        onUpdate(todo);
    }

    const onAddNewTodo = () => {
        setIsOnAddMode(!isOnAddMode);
    }

    const createNewTodo = () => {
        onCreate(newTodoTitle, newTodoDesc);
        setNewTodoTitle("");
        setNewTodoDesc("");
        setIsOnAddMode(false);
    }
    
    const onCancelCreate = () => {
        setNewTodoTitle("");
        setNewTodoDesc("");
        setIsOnAddMode(false);
    }

    return (
        <div className={styles.todoView}>
            <h1 className={styles.todoViewTitle}>My Todos</h1>
            <div className={styles.addNewTodoWrapper}>
                <Button label={"Add New Todo"} onClick={onAddNewTodo} />
            </div>
            {
                isOnAddMode && (
                    <div className={styles.addNewTodoContainer}>
                        <Input type="input" label="Title" value={newTodoTitle} onChange={(val) => setNewTodoTitle(val as string)} />
                        <Input type="input" label="Description" value={newTodoDesc} onChange={(val) => setNewTodoDesc(val as string)} />
                        <div className={styles.editCTAWrapper}>
                            <Button label={"Add"} onClick={() => createNewTodo()} />
                            <Button label={"Cancel"} onClick={() => onCancelCreate()} />
                        </div>
                    </div>
                )
            }
            {todos.map(todo => <TodoItem key={todo._id} todoObj={todo} onPressDelete={onPressDelete} onPressSave={onPressSave} />)}
        </div>
    );
};

export default TodoView;