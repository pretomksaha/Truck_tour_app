import React from "react";
import '../components/Home.css'

function Trips() {
    const users = [
        {
            date:"10.05.2022",
            number_plate:"DA01PS043",
            oil_type:"diesel",
            oil_capacity:"25",
            oil_price:"1.96"
        },
        {
            date:"10.05.2022",
            number_plate:"DA01PS043",
            oil_type:"diesel",
            oil_capacity:"25",
            oil_price:"1.96"
        },
      ];

    return(
        <div class="container">
            <div class="text-center mb-1">
                <h1>Truck Tours</h1>
                <p class="lead">List of all available Truck Tours</p>
            </div>

            <div class="card1 mb-3">
                    <div class="card1-body">
                        <div class="d-flex flex-column flex-lg-row">
                        <div class="col-sm-3 py-5">
                                <span class="badge bg-success">Truck Number Plate</span>
                                </div>
                            <div class="row flex-fill">
                                <table>
                                    <tr>
                                        <th>Entry Date</th>
                                        <th>Fual Type</th>
                                        <th>Fual Tank Capacity</th>
                                        <th>Fual Price</th>
                                        <th> Action</th>
                                    </tr>
                                </table>
                            </div>
            
                        </div>
                    </div>
                </div>
            { users.map(item => (
                <div class="card1 mb-3">
                    <div class="card1-body">
                        <div class="d-flex flex-column flex-lg-row">
                        <div class="col-sm-3 py-5">
                                <span class="badge bg-success">{item.number_plate}</span>
                                </div>
                            <div class="row flex-fill">
                            <table>
                                    <tr>
                                        <td>{item.date}</td>
                                        <td>{item.oil_type}</td>
                                        <td>{item.oil_capacity}</td>
                                        <td>{item.oil_price}</td>
                                        <td> <div class="btn-group"><a class="btn btn-warning" href="/reschedule" type="submit">Edit</a>
                                        <a class="btn btn-danger" href="/delete" type="submit">Remove</a></div>
                                        </td>
                                    </tr>
                                </table>

                            </div>
            
                        </div>
                    </div>
                </div>
                ))}
        </div>
    );
}

export default Trips;