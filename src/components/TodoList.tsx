import React from 'react';
import { ITodo } from './../interfaces';

type TodoListProps = {
    todos: ITodo[],
    onToggle(id: number): void,
    onRemove: (id: number) => void,
} 

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
    if(todos.length === 0) {
        return (
            <div className='center hfsz'>No todos yet!</div>
        )
    }
    
    const remove = (e: React.MouseEvent, id: number) => {
        e.preventDefault()
        onRemove(id)
    }


    return (
        <ul>
            {todos.map(todo => {
                const classes = ['todo']
                if (todo.completed) {
                    classes.push('completed')
                }
                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input type='checkbox' onChange={onToggle.bind(null, todo.id)} checked={todo.completed} />
                            <span>{todo.title}</span>
                            <i className='material-icons red-text' onClick={(e) => remove(e, todo.id)}>delete</i>
                        </label>
                    </li>  
                )
            })}
        </ul>
    );
};
