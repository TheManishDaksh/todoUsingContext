import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos : [{
        id :1,
        todo : "todo msg",
        complete : false
    }],
    addTodo : (todo)=>{} ,
    deleteTodo : (todo,id)=>{} ,
    updateTodo : (id)=>{} ,
    toggleComplete : (id)=>{}
})

export function useTodo (){
    return useContext(todoContext)
}

export const todoProvider = todoContext.Provider;