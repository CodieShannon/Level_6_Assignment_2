// Import React useEffect and useState
import { useEffect, useState } from 'react';

// Import FormatSubject
import FormatSubject from './FormatSubject';

// Functions
function Loader({id}) {
    function fetchSCP()
    {
        // Create Variables
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

    // Create a State using useState
    const [currentState, setState] = useState([]);

    // Utilize React useEffect to Run fetchSCP Function
    useEffect(() => { fetchSCP(); }, [currentState] );

    // Get Subject File
    let result = currentState.filter(i => i.id === id);

    // Format Subject File For HTML
    return FormatSubject(result);
}

// Export Loader
export default Loader;