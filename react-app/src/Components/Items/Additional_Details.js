import React from "react";
import axios from 'axios'

class AdditionalDetails extends React.Component {

    constructor() {
        super()
        this.state = { records: [] }
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:5000/display").then(res => this.setState({ records: res.data })).catch(err => console.log(err))
    }

    render() {
        var hcontent = '';
        var trs = (this.state.records.length === 0) ? <h1>{hcontent}</h1> :
            this.state.records.map((e) =>
                <div class="Additional-Details-Card">
                    <div class="card-container">
                        <div><b>Mouse Details</b></div>
                        <div><span>Name : </span><span>{e.mouse_name}</span></div>
                        <div><span>ID : </span><span>{e.mouse_id}</span></div>
                        <div><span>Model No : </span><span>{e.mouse_mno}</span></div>
                    </div>
                    <div class="card-container">
                        <div><b>Keyboard Details</b></div>
                        <div><span>Name : </span><span>{e.keyboard_name}</span></div>
                        <div><span>ID : </span><span>{e.keyboard_id}</span></div>
                        <div><span>Model No : </span><span>{e.keyboard_mno}</span></div>
                    </div>
                    <div class="card-container">
                        <div><b>CPU Details</b></div>
                        <div><span>Processor : </span><span>{e.processor}</span></div>
                        <div><span>RAM : </span><span>{e.ram}</span></div>
                        <div><span>Storage : </span><span>{e.storage}</span></div>
                    </div>
                </div>
            )

        return (
            <>
                {trs}
            </>
        )
    }
}

export default AdditionalDetails

