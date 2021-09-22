import React from 'react'
import { TodoItems } from "./TodoItems";

export const Todos = (props) => {
    let footerstyle = {
        minHeight:"50vh"
      };
    return (
        <div className="container" style={footerstyle}>
            <h3 className="text-center my-3" >Todos List</h3>
            {props.todos.length === 0 ? "empty list" :
                props.todos.map((todo) => {
                    return( <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete} />
                )})
            }
        </div>
    )
}
