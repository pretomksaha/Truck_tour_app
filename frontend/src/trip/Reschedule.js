import React, { useState , useEffect } from "react";
import '../components/Create.css';
import { useLocation } from "react-router-dom";
import axios from 'axios';

// Function to get the query id from url
function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

// update existing Truck tour 
function Reschedule() {
    const query = useQuery();
    const searchID=query.get("id");
    const [trip, setTrips] = useState([]);
    const [truckList, setData] = useState([]);
    const [index, setIndex] = useState('');
    let [distance, setDistance] = useState('');
    let truckNumber=index.split(',')[1];
    let fuelPrice = index.split(',')[0];
    if(fuelPrice == ''){
        fuelPrice = trip.liter_price;
    }
    if (distance ==''){
        distance=trip.distance;
    }
    let price = (parseFloat(fuelPrice)*parseFloat(distance))/10; // total cost = (per liter price* distance)/ 10

    // use Effect on page load to get data from backend
    useEffect(() => {
    const fatchData = async () =>{ 
        const truckResult = await axios(process.env.REACT_APP_BACKEND_ACCESS_TRUCKS);
        const tripsResult = await axios(process.env.REACT_APP_BACKEND_ACCESS_TRIPS+'/update/'+searchID);
        setData(truckResult.data);
        setTrips(tripsResult.data);   
    }
          fatchData();
        },[])
  return (
    <div class="container">
    <div class='mainLR'>
            <div class="page-wrapper font-poppins">
                <div class="wrapper .wrapper--w960">
                    <div class="card-3">
                        <div class="card-heading-reschedule">
                        </div>
                        <div class="card-body">
                        <h2 class="title">Reschedule Tour Trips</h2>
                                <div class="input-group">
                                    <select onChange={(e)=>setIndex(e.target.value)} class="selectpicker input--style-3" name="number_plate"  >
                                        <option disabled="disabled" selected="selected" value={trip.number_plate} >{trip.number_plate}</option>
                                        {truckList.map(item => (
                                        <option value={[item.oil_price,item.number_plate]}>{item.number_plate}</option>
                                        
                                        ))}
                                    </select>
                                    <div class="select-dropdown"></div>                
                                </div>
                                <form method="POST" action=".">
                                <input type="hidden"  value={trip.id} name="id"/> 
                                <input type="hidden"  value={truckNumber} name="number_plate"/> 
                                <div class="input-group"> 
                                    <label class="input--style-3" >Start Date: {trip.start_date}</label>                  
                                    <input class="input--style-3 bg-transparent py-2" type="date" id="start-date" name="start_date"/>                                                      
                                </div>
                                <div class="input-group"> 
                                    <label class="input--style-3">End Date: {trip.end_date}</label>                  
                                    <input class="input--style-3 bg-transparent py-2" type="date" id="end-date" name="end_date"/>                                                      
                                </div>

                                <div class="input-group">
                                    <input onChange={(e)=>setDistance(e.target.value)} class="input--style-3" type="number" placeholder={trip.distance} step="0.01" name="distance"/>
                                </div>
                                <input type="hidden"  name="liter_price"/> 
                                <div class="input-group">                               
                                    <input class="input--style-3" type="number" placeholder={trip.total_cost} name="total_cost" step="0.01" value={price}/>
                                </div>
                                
                                <div class="p-t-10">
                                    <button class="btn--pill btn--green" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Reschedule;
