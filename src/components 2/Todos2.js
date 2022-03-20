import React from 'react';

import swal from "sweetalert";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import styles from "./Todos2.module.css"
import Trash from "../images/trash-solid.svg"
import Check from "../images/check-solid.svg"
import xmark from "../images/xmark-solid.svg"
import Edit from "../images/pen-to-square-solid.svg"

const Todos2 = ({todo,todos,text,setTodos}) => {

   const checkHandler =()=>{
       setTodos(todos.map(item => {
           if (item.id === todo.id) {
               return{
                   ...item,complete:!item.complete
                }
           }
           return item
       }))
   }


    const deleteHandler =()=>{

        swal("Do you want to delete this item?", {
            icon: "warning",
            dangerMode: true,
            buttons: [true,"yes"],
        }).then((deleteItem)=>{
            if (deleteItem){
                setTodos(todos.filter(el => el.id !== todo.id ))
                toast.success('Item deleted successfully!', {
                   theme:"colored"
                });
            }
        })

    }

    const editHandler=()=>{
        swal("Edit your List",{
            content: {
                element: "input",
                attributes: {
                    value: `${text}`,
                    type: "text",
                },
            },
            buttons: [true,"Change"],

        }).then((value)=>{
                setTodos(todos.map(item=>{
                    if (value){
                        if ((item.id === todo.id)){
                            return{
                                ...item,text:value
                            }
                        }
                        return item
                    }else {
                        return {...item}
                    }
                }))
        })
    }


    return (
        <>
        <div className={styles.container}>
            <li className={todo.complete? styles.complete : styles.list }>{text}</li>
             <div className={styles.btn}>
                 <button className={styles.editBtn} onClick={editHandler}>
                     <img src={Edit} alt={Edit}/>
                 </button>
                 <button className={styles.checkBtn} onClick={checkHandler}>
                     {
                         todo.complete? <img src={xmark} alt={xmark} /> : <img src={Check} alt={Check}/>
                     }
                 </button>
                 <button className={styles.deleteBtn} onClick={deleteHandler}>
                     <img src={Trash} alt={Trash}/>
                 </button>

             </div>
        </div>
            <ToastContainer />
        </>
    );
};

export default Todos2;