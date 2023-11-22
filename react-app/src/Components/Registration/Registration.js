import React from "react";
import Basic from "./BasicDetails";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
    }

    toggleVisibility = () => {
        this.setState(prevState => ({
            showComponent: !prevState.showComponent,
        }));
    };
    render() {
        const { showComponent } = this.state;
        return (
            <div className="Main-panel">
                <div className="Button-list">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <button type="button" class="btn btn-light" onClick={this.toggleVisibility}>
                                {showComponent ? 'Basic Details' : 'BasicDetails'}
                            </button>
                        </li>
                        <li className="nav-item">
                            <button type="button" class="btn btn-light">Demographic Details</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" class="btn btn-light">Documents</button>
                        </li>
                    </ul>
                </div>
                <div className="Display-Panel">
                    {showComponent && <Basic />} {/* Render your component conditionally */}
                </div>
            </div>
        )
    }
}

export default Register