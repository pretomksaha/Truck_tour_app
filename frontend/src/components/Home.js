import React from "react";

function Home() {
    const users = [
        {
            date:"10.05.2022",
            number_plate:"DA01PS043",
            oil_type:"diesel",
            oil_capacity:"25",
            oil_price:"1.96"
        },
        {
            date:"10.05.2022",
            number_plate:"DA01PS043",
            oil_type:"diesel",
            oil_capacity:"25",
            oil_price:"1.96"
        },
      ];
      const joinList = [users, users];
    return(
        <section>
            <div class="page-wrapper .bg-gra-01 font-poppins">
                <div class="wrapper">
                    <div class="card card-3">
                        <ul>
                            {joinList.map((nestedItem, i) => (
                            <ul key={i}>
                                <h3> List {i} </h3>
                                {nestedItem.map(data => (
                                <li key={data.date}>
                                    <div>{data.number_plate}</div>
                                    <div>{data.oil_type}</div>
                                    <div>{data.oil_capacity}</div>
                                    <div>{data.oil_price}</div>
                                </li>
                                ))}
                            </ul>
                            ))}
                        </ul>       
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;