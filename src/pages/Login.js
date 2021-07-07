import React from 'react'; 

function Login(props) {
    return (
        <> 
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
            </>
    );
}

export default Login;