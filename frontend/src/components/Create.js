import React from "react";
import './Create.css';


function Create() {
  return (
    <div class='mainLR'>
                <div class="page-wrapper .bg-gra-01 font-poppins">
                    <div class="wrapper">
                        <div class="card card-3">
                            <div class="card-heading"></div>
                            <div class="card-body">
                            <h2 class="title">Truck Info</h2>
                                <form method="POST">
                                    <div class="input-group">
                                        <input class="input--style-3" type="text" placeholder="Truk Plate Number" name="name"/>
                                    </div>

                                    <div class="input-group">
                                        <input class="input--style-3 js-datepicker" type="text" placeholder="Date of Entry" name="birthday"/>
                                        <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                    </div>

                                    <div class="input-group">
                                        <input class="input--style-3" type="text" placeholder="Type of Oil" name="oil_type"/>
                                    </div>

                                    <div class="input-group">
                                        <input class="input--style-3" type="number" placeholder="Oil Capacity of Truck" name="oil_capacity"/>
                                    </div>
                                    
                                    <div class="input-group">
                                        <input class="input--style-3" type="number" placeholder="Oil Price per Liter" name="oil_price"/>
                                    </div>
                                    
                                    <div class="p-t-10">
                                        <button class="btn btn--pill btn--green" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

  );
}

export default Create;
