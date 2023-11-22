import React from "react";

class Basic extends React.Component {
    render() {
        return (
            <div classname="Basic-Detail-Panel">
                <form className="row g-3">
                    <div classname="container text-center">
                        <div className="row">
                            <div className="col">
                                <div className="col-md-6">
                                    <label for="inputFirstName" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="inputFirstName" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="col-md-6">
                                    <label for="inputMiddleName" className="form-label">Middle Name</label>
                                    <input type="text" className="form-control" id="inputMiddleName" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="col-md-6">
                                    <label for="inputLastName" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="inputLastName" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div classname="container text-center">
                        <div className="row">
                            <div className="col">
                                <div className="col-md-6">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Salutation</option>
                                        <option value="1">Mr.</option>
                                        <option value="2">Mrs.</option>
                                        <option value="3">Shri</option>
                                        <option value="3">Shri</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col">
                                <div className="col-md-6">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Gender</option>
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                        <option value="3">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col">
                                <div className="col-md-6">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <label for="inputAddress" className="form-label">Address</label>
                        <textarea className="form-control" id="inputAddress" rows="3"></textarea>
                    </div>

                    <div classname="container text-center">
                        <div className="row">
                            <div className="col">
                                <div className="col-md-6">
                                    <label for="inputCity" className="form-label">City</label>
                                    <input type="text" className="form-control" id="inputCity" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="col-md-6">
                                    <label for="inputState" className="form-label">State</label>
                                    <select id="inputState" className="form-select">
                                        <option selected>Choose...</option>
                                        <option>Maharashtra</option>
                                        <option>Uttar Pradesh</option>
                                        <option>Bihar</option>
                                        <option>West Bengal</option>
                                        <option>Madhya Pradesh</option>
                                        <option>Tamil Nadu</option>
                                        <option>Rajasthan</option>
                                        <option>Karnataka</option>
                                        <option>Gujarat</option>
                                        <option>Andhra Pradesh</option>
                                        <option>Odisha</option>
                                        <option>Telangana</option>
                                        <option>Kerala</option>
                                        <option>Jharkhand</option>
                                        <option>Assam</option>
                                        <option>Punjab</option>
                                        <option>Chhattisgarh</option>
                                        <option>Haryana</option>
                                        <option>Uttarakhand</option>
                                        <option>Himachal Pradesh</option>
                                        <option>Tripura</option>
                                        <option>Meghalaya</option>
                                        <option>Manipur</option>
                                        <option>Nagaland</option>
                                        <option>Goa</option>
                                        <option>Arunachal Pradesh</option>
                                        <option>Mizoram</option>
                                        <option>Sikkim</option>
                                        <option>Jammu and Kashmir</option>
                                        <option>Ladakh</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col">
                                <div className="col-md-6">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div classname="container text-center">
                        <div className="row">
                            <div className="col">
                                <div className="col-md-6">
                                    <label for="mobileNo" className="form-label">Mobile No</label>
                                    <input type="number" className="form-control" id="mobileNo" max="10" />
                                </div>
                            </div>
                            <div className="col">
                                <label for="dob" className="form-label">Date of Birth</label>
                                <input type="date" className="form-control" id="dob" />
                            </div>
                        </div>
                    </div>

                    <form class="row g-3">
                        <div class="col-auto">
                            <label for="inputPassword2" class="visually-hidden">Unigoa Email</label>
                            <input type="password" class="form-control" id="inputPassword2" placeholder="Unigoa Email" />
                        </div>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
                        </div>
                    </form>


                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Save and Next</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default Basic