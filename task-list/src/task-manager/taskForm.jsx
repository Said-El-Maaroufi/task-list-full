import {  useEffect, useState } from "react";
import apiClient from "../auth/clientToken";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TaskList from "./taskList";



const TaskForm = ({setTasks, setToken}) => {

  const navigate = useNavigate()

  

  

  const [user, setUser] = useState(null)


  const [text, setText] = useState("");


    
useEffect(() => {

  apiClient.get('/user')
  .then(
    res =>{
      setUser(res.data),
      setToken(localStorage.getItem('token'))
    } 
      
)
  .catch(err =>{
    console.error(err)
    navigate('/homePage')
  } 
)
}, [])

  const sentData = async (e) => {
    e.preventDefault()
    try {
    const response = await axios.post("http://127.0.0.1:8000/api/store", {
      'description' : text,
      'user_id' : user.id
    })
    console.log("reponse du serveur", response.data)
    setTasks(response.data)
      
    } catch (error) {
      if (error.response) {
        console.log('status HTTP', error.response.status)
        console.log('msg d\'erreur', error.response.data)
      } else {
        console.error('erreur reseau ou serveur',error.message)
      }
    }
  }
 

  



  return (
    <div className="container mt-5">
      <h2 className="">
        Bonjour 
        <span className="text-primary"> {user ? user.name : "......" }</span>
      </h2>
      <div className="row justify-content-center">
        <div className="col">
          <h2 className="text-center mb-4">Ajoutez une Tâche</h2>
          <form action="" method="post"  onSubmit={sentData}>
            <div className="input-group">
              <input
                type="text"
                className="form-control p-2"
                name="description"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
              <button className="btn btn-primary">Ajouter</button>
            </div>
          </form>

          <TaskList/>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
