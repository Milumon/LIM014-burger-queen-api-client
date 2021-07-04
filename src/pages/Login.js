import React from 'react';

/* const handleSubmit = () => { 
    console.log("estooooooooooo ")
    const data = {
    email: this.email,
    password: this.password, 
    }

    axios.post('http://localhost:8081/auth', data)
    .then(res => console.log(res.data))
    
}  */

function Login(props) {
    return (
        <div> 
        <form>
            <h3> Login </h3>


                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="Email" /> 
                </div>

                <div className="form-group mb-3">
                    <label>Password</label>
                    <input type="text" className="form-control" placeholder="Password" /> 
                </div>  

                <button className="btn btn-primary btn-block">Login</button>

            </form>
            </div>
    );
}

export default Login;