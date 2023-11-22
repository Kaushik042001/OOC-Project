import React from "react";
import axios from 'axios';
import TableBody from "./Table_Body";

class AddItem extends React.Component {
    constructor() {
        super()
        this.state={
            pc_id:'',
            mac_add:'',
            mouse_name:'',
            mouse_id:'',
            mouse_mno:'',
            keyboard_name:'',
            keyboard_id:'',
            keyboard_mno:'',
            processor:'',
            ram:'',
            storage:''
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})

    }
    handleSubmit=()=>{
        var d=this.state
        axios.post("http://127.0.0.1:5000/insert",d).then(res=>console.log('rec inserted'))
    }

    render() {
       
        return (
            <div className="Main-Container">
                <form className="PC" onSubmit={this.handleSubmit}>
                    <div className="form-group" style={{ marginTop: '10px' }}>
                        <label for="exampleInputEmail1"><b>Enter PC Details</b></label><br />
                        <input type="text" name="pc_id" onChange={this.handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="PC ID" /><br />
                        <input type="text" name="mac_add" onChange={this.handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Mac Address" /> <br />
                    </div>

                    <div className="form-group">
                        <label for="exampleInputPassword1">Mouse</label><br />
                        <input type="text" name="mouse_name" onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Name" /><br />
                        <input type="text" name="mouse_id" onChange={this.handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ID" /><br />
                        <input type="text" name="mouse_mno" onChange={this.handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Model Number" /> <br />
                    </div>

                    <div className="form-group">
                        <label for="exampleInputPassword1">Keyboard</label> <br />
                        <input type="text" name="keyboard_name" onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Name" /> <br />
                        <input type="text" name="keayboard_id" onChange={this.handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ID" /> <br />
                        <input type="text" name="keyboard_mno" onChange={this.handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Model Number" /> <br />
                    </div>

                    <div className="form-group">
                        <label for="exampleInputPassword1">CPU</label> <br />
                        <input type="text" name="processor" onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Processor" /> <br />
                        <input type="text" name="ram" onChange={this.handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="RAM" />  <br />
                        <input type="text" name="storage" onChange={this.handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Storage" /> <br />
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                    <button type="reset" className="btn btn-primary" style={{ float: 'right', marginRight: '150px' }}>Reset</button>
                </form>

                <div className="Item-Container">
                    <div className="d-flex" role="search">
                        <span style={{ marginTop: '12px', marginLeft: '0px', fontSize: '19px' }}>Item Category</span>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ marginLeft: '550px' }} />
                        <button className="btn btn-outline-success" type="submit" style={{ marginLeft: '10px' }}>Search</button>
                    </div>

                    <div className="Table-Container">
                        <table className="table border">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">PC ID</th>
                                    <th scope="col">Mac Address</th>
                                    <th scope="col">Operations</th>
                                </tr>
                            </thead>
                            <TableBody />
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddItem