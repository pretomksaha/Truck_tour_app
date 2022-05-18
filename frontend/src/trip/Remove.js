import React from "react";
import { useLocation, Navigate} from "react-router-dom";
import axios from 'axios';

// Function to get the query id from url
function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

// Call delete method in backend and redirect.
function Remove() {
    const query = useQuery();
    const searchID=query.get("id");
    const fatchData = async () =>{ 
         await axios.delete(process.env.REACT_APP_BACKEND_ACCESS_TRIPS+'/delete/'+searchID);
    }
    fatchData();
  return (
      <div>
          <Navigate to="../trips" />
      </div>

  );
}

export default Remove;
