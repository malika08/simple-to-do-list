

import React from "react";
import './style.css';
import { Component } from "react";

const data = [
    {id:1, title:'HTML'  },
    {id:2, title:'CSS'  },
    {id:3, title:'JS'  },
    {id:4, title:'REACT'  },
    {id:5, title:'C++'  },

]


class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: data}
        }
        render(){
            return(
                


                <div className="container">
                    <div className="wrapper">
                        <div className="navbar">
                            <h1 className="navbar-count">4 Tasks</h1>
                            <h2 className="navbar-count-remain">4 Remain</h2>
                        </div>
                        <div className="tasks">
                            <ul className="tasks-items">
                                {
                                    this.state.tasks.map(value=>{
                                        return(
                                            <li className="tasks-item">
                                                <label >
                                                    <input type="checkbox" className="checkbox" />
                                                    <h3 className="tasks-title">{value.title}</h3>
                                                </label>
                                                <button className="btn" >Delete</button>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="footer">
                            <input type="text" className="add-input" />
                            <button className="btn">Add</button>
                        </div>
                    </div>
                </div>
            )
        }
    }

export default ToDoList;
