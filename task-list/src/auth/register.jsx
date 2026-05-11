import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = ({setToken, setUser}) => {

    const navigate = useNavigate()

    const [data, setData] = useState({
        name : '',
        email : '',
        password : '',
        password_conf : ''
    })

    const [errors, setErrors] = useState(
        {
            name: null,
            email: null,
            password : null
        })

    const handelData = (e) => {
            setData({...data, [e.target.name] : e.target.value})
        }
        
        
        const sentData = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/register', {
            name : data.name,
            email : data.email,
            password : data.password,
            password_confirmation : data.password_conf
        }
    )
    .then(res =>{
        setUser(res.data.user)
        setToken(res.data.token)
        navigate('/taskList')
    })
    .catch(err =>{
        if(err.response){
            setErrors({name: null, email: null, password : null, ...err.response.data.errors})
        }else{
            console.log(err.request)
    }
})
    
} 

    
    
    

    




    return ( <div className="container">
            <div className="row justify-content-center">
                <div className="col-5 p-3 mt-5 border border-3 rounded">
                <h3 className="text-center fw-bolder text-primary">Creer un Compte</h3>
                    <form action="" method="post" onSubmit={sentData} >

                        <div className="my-4">
                        <input type="text" name="name" onChange={handelData}  className="form-control"  placeholder="entrez votre nom complet" />
                        {errors.name && <small className="text-danger text-center">
                            {errors.name}
                        </small>}
                        </div>
                        <div className="my-4">
                        <input type="text" name="email" onChange={handelData} className="form-control" placeholder="entrez votre email" />
                            
                        {errors.email && <small className="text-danger text-center">
                         {errors.email
                            }
                        
                        </small>}
                        </div>

                        <div className="my-4">
                        <input type="password" name="password" onChange={handelData} className="form-control" placeholder="entrez votre password" />
                        {errors.password && <small className="text-danger text-center">
                            {errors.password}
                        </small>}
                        </div>
                        <div className="my-4">
                        <input type="password" name="password_conf" onChange={handelData} className="form-control" placeholder="confirmer votre password" />
                        </div>
                            <button className="w-100 btn btn-outline-primary">Register</button>
                    </form>
                </div>
            </div>
        </div> );
}
 
export default Register;

