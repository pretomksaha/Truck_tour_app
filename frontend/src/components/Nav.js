import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';


// Navigation for "Track Fleet", Create, "Truck Tour" and Organized
function Nav(){
    const setSearch = useState('');
    const navigate = useNavigate();

    //  Navigation to "Track Fleet"
    const onNavigatorHome = () => {       
        navigate("/trucks/");
    }

    return(
        <dev>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark top">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navMainMenu" class="navbar-collapse collapse">
                <div class="navbar-nav ml-auto">
                    <Link to='/trucks' className="nav-item nav-link active">Truck fleet</Link>
                    <Link to='/create' className="nav-item nav-link">New Truck</Link>
                    <Link to='/trips' className="nav-item nav-link">Truck Tours</Link>
                    <Link to='/organize' className="nav-item nav-link">Organize New Tours</Link>
                </div>
            </div>
            <form class="d-flex">
                <input onChange={(e)=>setSearch(e.target.value)} class="form-control me-2" name="SearchItem" type="search" placeholder="Number Plate" aria-label="Search" />
                <button onClick={onNavigatorHome} class="btn btn-outline-success" value="search"  type="submit">Search</button>
            </form>
        </nav>
    </dev>
    );
}
export default Nav;