import React from "react";
import './Create.css';


function Update() {
    const users = {
            date:"10.05.2022",
            number_plate:"DA01PS043",
            oil_type:"diesel",
            oil_capacity:"25",
            oil_price:"1.96"
        }

  return (
    <div class="container">
    <div class='mainLR'>
        
                <div class="page-wrapper font-poppins">
                    <div class="wrapper .wrapper--w960">
                        <div class="card-3">
                            <div class="card-heading-updated">
                            </div>
                            <div class="card-body">
                            <h2 class="title">Update Truck Info</h2>
                                <form method="POST">
                                    <div class="input-group">
                                        <input class="input--style-3" type="text" placeholder={"Truk Plate Number"} name="name" value={users.number_plate}/>
                                    </div>

                                    <div class="input-group">
                                        <input class="input--style-3 js-datepicker" type="text" placeholder="Date of Entry" name="birthday" value={users.date}/>
                                        <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                    </div>

                                    <div class="input-group">
                                        <input class="input--style-3" type="text" placeholder="Type of Oil" name="oil_type" value={users.oil_type}/>
                                    </div>

                                    <div class="input-group">
                                        <input class="input--style-3" type="number" placeholder="Oil Capacity of Truck" name="oil_capacity" value={users.oil_capacity}/>
                                    </div>
                                    
                                    <div class="input-group">
                                        <input class="input--style-3" type="number" placeholder="Oil Price per Liter" name="oil_price" value={users.oil_price}/>
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

export default Update;
