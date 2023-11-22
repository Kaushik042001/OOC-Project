import React from "react";
 class AdminLogin extends React.Component {
    render() {
        return(
            <div className="Login">
                <form className="Login-Form">
                    <h3>Admin Login</h3>
                    <br />
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <div className="Forgot-Password-Link">
                    <a href="/" className="link-primary">Forgot password ?</a>
                    </div>
                </form>
            </div>
        )
    }
 }

 export default AdminLogin