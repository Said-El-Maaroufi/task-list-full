import { useState } from "react";
import axios from 'axios';


const TaskForm = () => {

    const [text, setText] = useState('');

    const sentData = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/store', {
            description : text
        })
    }


    return ( 
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-8">
                    <h2 className="text-center mb-4">Ajoutez une Tâche</h2>
                        <form action="" method="post" onSubmit={sentData}>
                    <div className="input-group">
                        <input type="text" className="form-control" name="description" onChange={(e) => setText(e.target.value)} value={text} />
                        <button className="btn btn-primary" >Ajouter</button>
                    </div>
                        </form>
                </div>
            </div>
        </div>
     );
}
 
export default TaskForm;