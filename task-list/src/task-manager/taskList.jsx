import { useEffect, useState } from "react";
import TaskItem from "./taskItem";
import apiClient from "../auth/clientToken";
import axios from "axios";

const TaskList = () => {

    

    const [tasks, setTasks] = useState(null)
    const [user, setUser] = useState(null)


    
    

        

            useEffect(() => {
                apiClient.get('/user')
                .then(res => setUser(res.data))
                .catch(err => console.error(err))
            }, [])

            useEffect(() => {
                    axios.get(`http://127.0.0.1:8000/api/tasks/${user?.id}`)
                    .then(res => setTasks(res.data))
                    .catch(err => console.error(err))
            }, [user])
    



            
       

    return ( <div className="mt-3">
         {tasks ?
         <TaskItem tasks={tasks}/>
         : <p className="text-muted">aucune tache existe....</p>}
    </div> );
}

export default TaskList;