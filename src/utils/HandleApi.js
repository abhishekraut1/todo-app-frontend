import axios from "axios"

const baseURL = "https://todo-app-backend-9afg.onrender.com"

const getAllTodo = (setTodo)=>{
    axios
        .get(baseURL)
        .then(({data})=>{
            // console.log('data --> ',data)
            setTodo(data)
        })
}

const addToDo = (text,setText,setToDo)=>{
    axios
        .post(`${baseURL}/save`,{text})
        .then((data)=>{
            console.log(data)
            setText("")
            getAllTodo(setToDo)
        })
        .catch((err)=> console.log(err))
}

const updateToDo = (toDoId,text,setToDo,setText,setIsUpdating)=>{
    axios
        .put(`${baseURL}/update`,{_id:toDoId,text})
        .then((data)=>{
            setText("")
            setIsUpdating(false)
            getAllTodo(setToDo)
        })
        .catch((err)=> console.log(err))
}

const deleteToDo = (_id,setToDo)=>{
    console.log(`${baseURL}/delete`,_id)
    axios
        .post(`${baseURL}/delete`,{_id})
        .then((data)=>{
            // console.log(_id)
            getAllTodo(setToDo)
        })
        .catch((err)=> console.log(err))
}

export {getAllTodo, addToDo, updateToDo, deleteToDo}