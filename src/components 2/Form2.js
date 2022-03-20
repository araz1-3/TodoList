import React from 'react';

import styles from "./Form2.module.css"

import swal from "sweetalert";


const Form2 = ({setInputValue,inputValue,todos,setTodos,setSelect}) => {

    const ChangeHandler =(e)=>{
        setInputValue(e.target.value)
    }

    const clickHandler =(e)=>{
        e.preventDefault()
        if (inputValue ===""){
            swal({
                text:"The input is Empty!! Please fill it out",
                icon: "error",
            });
        }else {
            setTodos([
                ...todos,
                {text:inputValue,complete:false,id:Date.now()}
            ])
            setInputValue("")
        }
    }

    const selectHandler =(e)=>{
        setSelect(e.target.value)
    }

    return (
        <div className={styles.container}>
            <input className={styles.input} type="text" onChange={ChangeHandler} value={inputValue} />
            <button className={styles.btn} onClick={clickHandler}>Add</button>
            <select className={styles.select} onChange={selectHandler}>
                <option value="all">all</option>
                <option value="completed">completed</option>
                <option value="uncompleted">uncompleted</option>
            </select>
        </div>
    );
};

export default Form2;