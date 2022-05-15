import React from "react";
import '../components/Create.css';


function Organize() {
    const truckList=[
        {number_plate:"DA01PS043",},
        {number_plate:"DA01PS044",}
    ];
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
                                <form method="POST">
                                    
                                    <div class="input-group">
                                        <select name="number_plate" class="input--style-3">
                                        <option disabled="disabled" selected="selected" >Truck Number Plate</option>
                                        {truckList.map(item => (
                                        <option value={item.number_plate}>{item.number_plate}</option>
                                        ))}
                                        </select>
                                        <div class="select-dropdown"></div>                
                                    </div>
                                    

                                    <div class="input-group"> 
                                        <label class="input--style-3" >Start Date:</label>                  
                                        <input class="input--style-3 bg-transparent py-2" type="date" id="example-input"/>                                                      
                                    </div>
                                    <div class="input-group"> 
                                        <label class="input--style-3">End Date:</label>                  
                                        <input class="input--style-3 bg-transparent py-2" type="date" id="example-input"/>                                                      
                                    </div>


                                    <div class="input-group">
                                        <input class="input--style-3" type="number" placeholder="Distence" name="oil_capacity"/>
                                    </div>
                                    
                                    <div class="input-group">
                                        <input class="input--style-3" type="number" placeholder="Total Price of Foul" name="oil_price"/>
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
