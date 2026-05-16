import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [data, setData] = useState(
        {
            email : '',
            password : ''
        }
    )

    const handelData = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }

    const sentData = (e) => {
        e.preventDefault();

        axios.post('http://127.0.0.1:8000/api/login', {
            email : data.email ,
            password : data.password
        }).then(res => {
            localStorage.setItem('token', res.data.token)
            navigate('/ajouter')

} 
).catch(err => console.log(err.response.data))

    }



    return ( 
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-5 p-3 mt-5 border border-3 rounded">
                    <h3 className="text-center fw-bolder mb-4 text-success">Connecter</h3>

                    <form action="" method="post" onSubmit={sentData} >

                        <div className="my-2">
                        <input type="text" onChange={handelData} name="email" className="form-control" placeholder="entrez votre email" />
                        </div>

                        <div className="my-4">
                        <input type="password" name="password" onChange={handelData} className="form-control" placeholder="entrez votre password" />
                        </div>
                            <button className="w-100 btn btn-outline-success">Log'in</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Login;