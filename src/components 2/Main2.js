import React,{useState,useEffect} from 'react';
import Form2 from "./Form2";
import TodoList2 from "./TodoList2";

import styles from "./Main2.module.css"

const getLocalStorage=()=>{
    let list = localStorage.getItem("list")
    if (list){
        return (JSON.parse(localStorage.getItem("list")))
    }else {
       return []
    }
}


const Main2 = () => {

    const [inputValue,setInputValue]=useState("")
    const [todos,setTodos]=useState(getLocalStorage())
    const [select ,setSelect] = useState("all")
    const [filterHandler,setFilterHandler] =useState([])

    const selectHandler=()=>{
        switch (select) {
            case "completed":
                setFilterHandler(todos.filter(todo => todo.complete ===true))
                break
            case "uncompleted":
                setFilterHandler(todos.filter(todo=> todo.complete === false))
                break
            default:
                setFilterHandler(todos)
                break
        }
    }


    useEffect(()=>{
        selectHandler()
        localStorage.setItem("list",JSON.stringify(todos))
    },[todos,select])

    return (
        <div className={styles.container}>
            <h1>Todo List</h1>
            <Form2 setSelect={setSelect} todos={todos} setTodos={setTodos} inputValue={inputValue} setInputValue={setInputValue} />
            <TodoList2 filterHandler={filterHandler} todos={todos} setTodos={setTodos} />
        </div>
    );
};

export default Main2;