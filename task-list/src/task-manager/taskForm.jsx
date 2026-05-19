import {  useState } from "react";
import apiClient from "../auth/clientToken";
import { useNavigate } from "react-router-dom";
        

const TaskForm = () => {

  const navigate = useNavigate()

  

  

  const [user, setUser] = useState(null)


  const [text, setText] = useState("");


    

    apiClient.get('/user')
    .then(res => setUser(res.data))
    .catch(err =>{
      console.error(err)
      navigate('/homePage')
    } 
  )


  // useEffect(() => {
  //   axios.get(`http://127.0.0.1:8000/api/index/${user.id}`)
  //   .then(res => setTasks(res.data) )
  //   .catch(err => console.error(err))
  // }, [tasks])

  // if (!user) {
  //   apiClient
  //     .get("/user")
  //     .then((res) => setUser(res.data))
  //     .catch((err) => console.error(err));
  // }

  // const sentData = (e) => {
  //   e.preventDefault();
  //   axios.post("http://127.0.0.1:8000/api/store", {
  //     description: text,
  //     user_id: user.id,
  //   }
  //   );
  // };

  return (
    <div className="container mt-5">
      <h2 className="">
        Bonjour 
        <span className="text-primary"> {user ? user.name : "......" }</span>
      </h2>
      <div className="row justify-content-center">
        <div className="col-8">
          <h2 className="text-center mb-4">Ajoutez une Tâche</h2>
          <form action="" method="post" >
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                name="description"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
              <button className="btn btn-primary">Ajouter</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
