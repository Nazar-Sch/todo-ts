import React from 'react'
import { useHistory } from 'react-router-dom'

export const InfoPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <h1>Info</h1>
            <button className='btn' onClick={() => history.push('/')}>Back to Todo List</button>
        </>
    );
};
