import React, { useState, useEffect } from "react";
import '../components/Home.css';
import axios from 'axios';
import { useLocation } from "react-router-dom";

function Trips() {
    const [trips, setTrips] = useState([]);

    let getLink=process.env.REACT_APP_BACKEND_ACCESS_TRIPS;
    console.log(getLink)
    useEffect(() => {
        const fatchData = async () =>{ 
            const result = await axios(getLink);
            setTrips(result.data);
          }

          fatchData();
        },[])
    

    return(
        <div class="container">
            <div class="text-center mb-1">
                <h1>Truck Tours</h1>
                <p class="lead">List of all available Truck Tours</p>
            </div>

            <div class="card1 mb-3">
                    <div class="card1-body">
                        <div class="d-flex flex-row flex-lg-row">
                            <div class="d-flex align-items-start py-5">
                                <table>
                                    <tr>
                                        <td>Index</td>
                                        <td>Truck Number Plate</td>
                                        <td>Start Date</td>
                                        <td>End Date</td>
                                        <td>Distance (km)</td>
                                        <td>Total Cost (EURO)</td>
                                    </tr>
                                </table>
                                <div class="d-flex align-items-end py-3">
                                        <span>Action</span>
                                </div>
                            </div>
            
                        </div>
                    </div>
                </div>
            { trips.map(trip => (
                <div class="card1 mb-3">
                    <div class="card1-body">
                        <div class="d-flex flex-column flex-lg-row">
                                <div class="d-flex align-items-start py-5">
                                        <table>
                                                <tr>
                                                    <td>{trip.trip_id}</td>
                                                    <td>{trip.number_plate}</td>
                                                    <td>{trip.start_date}</td>
                                                    <td>{trip.end_date}</td>
                                                    <td>{trip.distance}</td>
                                                    <td>{trip.total_cost}</td>
                                                </tr>
                                            </table>
                                <div class="d-flex align-items-end py-3">
                                <span>
                                    <div class="btn-group">
                                        <a class="btn btn-warning" href={"../trips/update/?id="+trip.id} type="submit">Edit</a>
                                        <a class="btn btn-danger" href={"../trips/delete/?id="+trip.id} type="submit">Remove</a>
                                    </div>
                                        </span>
                                </div>

                            </div>
            
                        </div>
                    </div>
                </div>
                ))}
        </div>
    );
}

export default Trips;