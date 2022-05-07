//Import React useEffect and useState
import { useEffect, useState } from 'react';

//Import Formatter
import FormatSubject from './Formatter';

function SCP_188() {
    let index = 4;

    function fetchSCP()
    {
        //Create Variables
        var data = null;
        var xhr = new XMLHttpRequest();

        //Set Credentials Requirement to False
        xhr.withCredentials = false;
        
        //Get Data From Database
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4)
                setState(JSON.parse(this.responseText));
        });

        //Configure XHR (XML HTTP Request)
        xhr.open("GET", "https://scpfoundationdb-ef73.restdb.io/rest/subject-files");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("x-apikey", "6270a864fcf9897eb111a0e1");
        xhr.setRequestHeader("cache-control", "no-cache");
        
        //Send XHR (XML HTTP Request)
        xhr.send(data);
    }

    //Create a state using useState
    const [currentState, setState] = useState([]);

    //Utilize react useEffect to run fetchSCP function
    useEffect(() => { fetchSCP(); }, [currentState] );

    //Get subject file
    let result = currentState.filter(i => i.id === index);

    //Format Subject File For HTML
    return FormatSubject(result);
}

export default SCP_188;