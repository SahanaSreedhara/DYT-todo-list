import React, { useState } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';

const TodoList = () => {
    let [item, setItem] = useState("");
    let [newItem, setNewItem] = useState([]);
    const [query, setQuery] = useState("")

    let inputValue = (ev) => {
        console.log(ev.target.value);
        let value = ev.target.value;
        setItem(value);
    };

    let AddItem = () => {
        if(item===""){
            alert("Task not entered. Enter a task!")
        }
        else{
            setNewItem((preval) => {
                return [...preval, item];
                // creates an array with previous value and the current entered value
            });
            // to make the input field empty
            setItem("")
        }
        
    };

    const Li = (props) => {
        const Delete = () => {
            console.log("delete")
            setNewItem((preval) => {
                return preval.filter((element, index) => {
                    return index !== props.id
                })
            })
        }

        const Edit = () => {
            console.log("edit")
            console.log(props.id)

            // set the input field to edit
            setItem(newItem[props.id])
            let beforeEdit = newItem.filter((reffVal, i) => {
                if (i != props.id)
                    return reffVal
            })
            setNewItem(beforeEdit)

        }

        /* YET TO ADD A CHECK MARK- WORKING ON IT
        var Checked = () => {
            var check = document.getElementsByClassName("todo-list");
            check[props.id].classList.toggle("checked");
            // check.setAttribute('id', 'checkedd');
            // document.getElementById('ch').style.textDecoration= "line-through"          
            
        }
        */
        return (
            <div className="todo-list">
                <li>
                    {props.val}
                </li>
                <div>
                    {/* <button title="Task Done" onClick={Checked} className="done-button"><DoneIcon /></button> */}
                    <button title="Edit task" onClick={Edit} className="edit-button"><EditIcon /></button>
                    <button title="Delete task" onClick={Delete} className="delete-button"><DeleteOutlineIcon /></button>
                </div>
            </div>
        );
    };

    return (
        <>
            <h1>To-Do List</h1>
            <div className="todo-container">
                <div className="input-container">
                    <div className="input-div">
                        <input
                            id="myInput"
                            type="text"
                            placeholder="What you up to?"
                            name="todo"
                            onChange={inputValue}
                            value={item}
                        />
                    </div>
                    <div>
                        <button title="Add to list" onClick={AddItem} className="add-button">
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div className="todo-list-div">
                    {newItem.map((val, i) => {
                        return (
                            <>
                                <Li key={i} val={val} id={i} />
                            </>
                        );
                    })}
                </div>
            </div>
            <footer>
                <div className="footer-container">
                    <p>Made with&nbsp;
                        <span>❤️</span>
                        &nbsp;in India by Sahana
                    </p>
                </div>
            </footer>

        </>
    );
};

export default TodoList;
