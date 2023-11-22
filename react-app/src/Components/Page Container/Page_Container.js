import React from "react";

import Navbar from "../Navbar/Navbar";
//import Register from "../Registration/Registration.js";
//import Basic from "./Components/Registration/BasicDetails";
//import Edit from "./Components/Items/Edit.js";
//import AddItem from "./Components/Items/Item.js";
//import AddItem from "../Items/Item";
//import StaffLogin from "../Login/Staff_Login";
//import FacultyLogin from "../Login/Faculty_Login";
//import AddItem from "../Items/Item";
//import TableBody from "../Items/Table_Body";
import AddItem from "../Items/Item";


class PageContainer extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="Page-Container">
                    <AddItem />
                </div>
            </div>

        )
    }
}

export default PageContainer