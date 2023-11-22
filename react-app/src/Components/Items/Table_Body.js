import React from "react";
import axios from "axios";
import AdditionalDetails from "./Additional_Details";

class TableBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            records: []
        };
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:5000/display").then(res => this.setState({ records: res.data })).catch(err => console.log(err))
    }

    toggleVisibility = () => {
        this.setState(prevState => ({
            showComponent: !prevState.showComponent,
        }));
    };


    render() {
        const { showComponent } = this.state;
        var hcontent = '';
        var trs = (this.state.records.length === 0) ? <h1>{hcontent}</h1> :
            this.state.records.map((e) =>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{e.pc_id}</td>
                        <td>{e.mac_add}</td>
                        <td>
                            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div className="btn-group me-2" role="group" aria-label="First group">
                                    <button type="button" className="btn btn-primary" onClick={this.toggleVisibility} >
                                        {showComponent ? 'Show less' : 'Show more'}
                                    </button>
                                </div>
                                <div class="btn-group me-2" role="group" aria-label="Second group">
                                    <button type="button" className="btn btn-secondary">Edit</button>
                                </div>
                                <div className="btn-group" role="group" aria-label="Third group">
                                    <button type="button" className="btn btn-info">Delete</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4">
                            {showComponent && <AdditionalDetails />} {/* Render your component conditionally */}
                        </td>
                    </tr>
                </tbody>
            )

        return (
            <>
                {trs}
            </>
        )
    }
}

export default TableBody