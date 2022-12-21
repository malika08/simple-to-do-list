import React from "react";
// import State from "../Component/State";
import ToDoList from "../Component/ToDoList";

class Root extends React.Component {
    render(){
        return(
            <div>
                <ToDoList/>
                {/* <State/> */}
            </div>
        )
    }
}

export default Root;