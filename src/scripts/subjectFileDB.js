// Import React Hooks
import { useEffect, useState } from 'react';

// Functions
function subjectFileDB()
{
    // Get Data From Database
    function fetchSCP()
    { 
        // Create Data Variable and XHR (XML HTTP Request) Object
        var data = null;
        var xhr = new XMLHttpRequest();

        // Set Credentials Requirement to False
        xhr.withCredentials = false;
        
        // Get Data From Database
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4)
                setState(JSON.parse(this.responseText));
        });

        // Configure XHR (XML HTTP Request)
        xhr.open("GET", "https://scpfoundationdb-ef73.restdb.io/rest/subject-files");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("x-apikey", "6270a864fcf9897eb111a0e1");
        xhr.setRequestHeader("cache-control", "no-cache");
        
        // Send XHR (XML HTTP Request)
        xhr.send(data);
    }

    // Create State
    const [currentState, setState] = useState([]);

    // Utilize React useEffect to Run fetchSCP Function
    useEffect(() => { fetchSCP(); }, [currentState] );

    // Return currentState
    return currentState;
}

export default subjectFileDB;