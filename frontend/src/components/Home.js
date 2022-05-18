import React, { useState, useEffect } from "react";
import './Home.css';
import axios from 'axios';
import { useLocation } from "react-router-dom";

// Function to get the query id from url
function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

// An overview page 'Truck Fleet' 
function Home() {
    const [data, setData] = useState([]);
    const query = useQuery();
    const searchData=query.get("SearchItem");
    let getLink=process.env.REACT_APP_BACKEND_ACCESS_TRUCKS;
    if (searchData==null){
        getLink=getLink;
    }
    else{
        getLink=getLink+'/'+searchData;
    }

    // use Effect on page load to get data from backend
    useEffect(() => {
        const fatchData = async () =>{ 
            const result = await axios(getLink);
            setData(result.data);
          }

          fatchData();
        },[])
    
    return(
        <div class="container">
            <div class="text-center mb-1">
                <h1>Truck Fleet</h1>
                <p class="lead">List of all available Trucks information</p>
            </div>

            <div class="card1 mb-3">
                    <div class="card1-body">
                        <div class="d-flex flex-row flex-lg-row">
                                <div class="d-flex align-items-start py-5">
                                    <span class="badge bg-success">Truck Number Plate</span>
                                </div>
                            <div class="d-flex align-items-center py-3">
                                <table>
                                    <tr>
                                        <td>Entry Date</td>
                                        <td>Fual Type</td>
                                        <td>Fual Tank Capacity</td>
                                        <td>Fual Price</td>
                                    </tr>
                                </table>
                                <div class="d-flex align-items-end py-3">
                                        <span>Action</span>
                                </div>
                            </div>
            
                        </div>
                    </div>
                </div>
            { //Map every truck from database
            data.map(item => (
                <div class="card1 mb-3">
                    <div class="card1-body">
                        <div class="d-flex flex-column flex-lg-row">
                                <div class="d-flex align-items-start py-5">
                                        <span class="badge bg-success">{item.number_plate}</span>
                                </div>

                                <div class="d-flex align-items-center py-3">
                                        <table>
                                                <tr>
                                                    <td>{item.date}</td>
                                                    <td>{item.oil_type}</td>
                                                    <td>{item.oil_capacity}</td>
                                                    <td>{item.oil_price}</td>

                                                </tr>
                                            </table>
                                <div class="d-flex align-items-end py-3">
                                <span>
                                    <div class="btn-group">
                                        <a class="btn btn-warning" href={"../trucks/update/?id="+item.id} type="submit">Edit</a>
                                        <a class="btn btn-danger" href={"../trucks/delete/?id="+item.id} type="submit">Remove</a>
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

export default Home;