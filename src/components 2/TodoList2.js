import React from 'react';
import Todos2 from "./Todos2";

import styles from "./TodoList2.module.css"

const TodoList2 = ({filterHandler,todos,setTodos}) => {
    return (
        <div className={styles.container}>
            <ul>
                {
                    filterHandler.map(todo=>(
                        <Todos2
                            key={todo.id}
                            text={todo.text}
                            setTodos={setTodos}
                            todos={todos}
                            todo={todo}
                    />))
                }
            </ul>
        </div>
    );
};

export default TodoList2;