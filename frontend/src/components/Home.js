import React, { useState, useEffect } from "react";
import './Home.css';
import axios from 'axios';
import { useLocation } from "react-router-dom";


function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

function Home() {
    const [data, setData] = useState([]);
    const query = useQuery();;
    const searchData=query.get("SearchItem");
    let getLink=process.env.REACT_APP_BACKEND_ACCESS;
    
    if (searchData==null){
        getLink=getLink;
    }
    else{
        getLink=getLink+'/'+searchData;
    }

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
            { data.map(item => (
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
                                        <td> <div class="btn-group"><a class="btn btn-warning" href="/update" type="submit">Edit</a>
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

export default Home;