import React, { useRef } from 'react';

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = props => {

    const ref = useRef<HTMLInputElement>(null)
    const keyPressHandler = (event: React.KeyboardEvent) =>  {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value); // знак оклику шо все буде ок, бо в можливо current може мати null
            ref.current!.value = '';
        } else return;
    }

    return (
        <div className='input-field mt2'>
            <input 
                type='text' 
                id='title' 
                placeholder='Type your todo...'
                onKeyPress={keyPressHandler}
                ref={ref}
            />
            <label htmlFor="title" className='active'>Type your todo</label>
        </div>
    );
};
