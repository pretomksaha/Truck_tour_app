import React,{ useState } from "react";
import './Create.css';
import { useLocation } from "react-router-dom";
import axios from 'axios';


function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }


function Update() {
    const [data, setData] = useState([]);
    const query = useQuery();
    const searchID=query.get("id");
    const fatchData = async () =>{ 
        const result = await axios(process.env.REACT_APP_BACKEND_ACCESS_TRUCKS+'/update/'+searchID);
        setData(result.data);  
    }
          fatchData();
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
                                <form method="Post" action=".">
                                    <input class="input--style-3" type="hidden"  name="id" value={data.id}/>
                                    <div class="input-group">
                                        <input class="input--style-3" type="text" placeholder={data.number_plate} name="number_plate" />
                                    </div>

                                    <div class="input-group">
                                        <input class="input--style-3 js-datepicker" type="text" placeholder={data.date} name="Date" />
                                        <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                    </div>

                                    <div class="input-group">
                                        <input class="input--style-3" type="text" placeholder={data.oil_type} name="oil_type" />
                                    </div>

                                    <div class="input-group">
                                        <input class="input--style-3" type="number" placeholder={data.oil_capacity} name="oil_capacity" />
                                    </div>
                                    
                                    <div class="input-group">
                                        <input class="input--style-3" type="number" placeholder={data.oil_price} name="oil_price" />
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
