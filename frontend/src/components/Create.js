import React from "react";
import './Create.css';

// Entry form for truck Info
function Create() {
  return (
    <div class="container">
        <div class='mainLR'>
                    <div class="page-wrapper font-poppins">
                        <div class="wrapper .wrapper--w960">
                            <div class="card-3">
                                <div class="card-heading">
                            </div>
                            
                            <div class="card-body">
                                <h2 class="title">Add New Truck Info</h2>
                                <form method="POST" action="/trucks">
                                    <div class="input-group">
                                        <input class="input--style-3" type="text" placeholder="Truk Plate Number" name="number_plate"/>
                                    </div>

                                    <div class="input-group">
                                        <input class="input--style-3 bg-transparent py-2" type="date" name="date"/> 
                                    </div>

                                    <div class="input-group">
                                        <input class="input--style-3" type="text" placeholder="Type of Fuel" name="oil_type"/>
                                    </div>

                                    <div class="input-group">
                                        <input class="input--style-3" type="number" placeholder="Fuel Capacity of Truck" step="0.01" name="oil_capacity"/>
                                    </div>
                                    
                                    <div class="input-group">
                                        <input class="input--style-3" type="number" placeholder="Fuel Price per Liter" step="0.01" name="oil_price"/>
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

export default Create;
