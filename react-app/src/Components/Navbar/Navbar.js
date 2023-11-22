import React from "react";

class Navbar extends React.Component {

    render() {
        return (

            <div className="main_header">
                <div className="dropdown1">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Menu
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/">Dashboard</a></li>
                        <li><a className="dropdown-item" href="/">Items</a></li>
                        <li><a className="dropdown-item" href="/">Category</a></li>
                        <li><a className="dropdown-item" href="/">Members</a></li>
                    </ul>
                </div>
                <div className="GU_logo">
                    <img src="https://www.unigoa.ac.in/imgs/logo.png" alt="Goa University Logo" title="Goa University Logo" />
                </div>

                <div className="dropdown2">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Login
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/">Admin Login</a></li>
                        <li><a className="dropdown-item" href="/">Staff Login</a></li>
                        <li><a className="dropdown-item" href="/">Faculty Login</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar