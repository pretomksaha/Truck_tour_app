import React,{ useState, useEffect } from "react";
import '../components/Create.css';
import axios from 'axios';

// Add a new Truck Tour Information 
function Organize() {
    const [truckList, setData] = useState([]);
    const [index, setIndex] = useState('');
    const [distance, setDistance] = useState('');
    let truckNumber=index.split(',')[1];
    let fuelPrice = index.split(',')[0];
    let price= (parseFloat(fuelPrice)*parseFloat(distance))/10; // total cost = (per liter price* distance)/ 10
    
    // use Effect on page load to get data from backend
    useEffect(() => {
        const fatchData = async () =>{ 
            const result = await axios(process.env.REACT_APP_BACKEND_ACCESS_TRUCKS);
            setData(result.data);
          }
          fatchData();
        },[])
  return (
    <div class="container">
        <div class='mainLR'>
                <div class="page-wrapper font-poppins">
                    <div class="wrapper .wrapper--w960">
                        <div class="card-3">
                            <div class="card-heading-organize">
                            </div>
                            <div class="card-body">
                            <h2 class="title">Organized Tour Routes</h2>
                                    <div class="input-group">
                                        <select onChange={(e)=>setIndex(e.target.value)} class="selectpicker input--style-3" name="number_plate"  >
                                            <option disabled="disabled" selected="selected" >Truck Number Plate</option>
                                            {truckList.map(item => (
                                            <option value={[item.oil_price,item.number_plate]}>{item.number_plate}</option>
                                            
                                            ))}
                                        </select>
                                        <div class="select-dropdown"></div>                
                                    </div>
                                    <form method="POST" action="/trips">
                                    <input type="hidden"  value={truckNumber} name="number_plate"/> 
                                    
                                    <div class="input-group"> 
                                        <label class="input--style-3" >Start Date:</label>                  
                                        <input class="input--style-3 bg-transparent py-2" type="date" id="start-date" name="start_date"/>                                                      
                                    </div>
                                    <div class="input-group"> 
                                        <label class="input--style-3">End Date:</label>                  
                                        <input class="input--style-3 bg-transparent py-2" type="date" id="end-date" name="end_date"/>                                                      
                                    </div>


                                    <div class="input-group">
                                        <input onChange={(e)=>setDistance(e.target.value)} class="input--style-3" type="number" placeholder="Distence in kilometer" step="0.01" name="distance"/>
                                    </div>
                                    <input type="hidden"  value={fuelPrice} name="liter_price"/> 
                                    <div class="input-group">
                                        <input class="input--style-3" type="number" placeholder="Total Price of Fuel in Euro" name="total_cost" step="0.01" value={price}/>
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

export default Organize;
