// Import Subject File Database Script
import subjectFileDB from '../scripts/subjectFileDB';

// Import Components
import Headerblock from '../components/blocks/Headerblock';
import Imageblock from '../components/blocks/Imageblock';
import Textblock from '../components/blocks/Textblock';
import MessageBox from '../components/search/MessageBox';
import LinkButton from '../components/search/LinkButton';

// Functions
function Search({setLinkState, searchVal}) {
    // Get Data From Database
    const currentState = subjectFileDB();

    // Filter For Results
    const results = FilterResults(currentState, searchVal);

    // Format Results For HTML and Return Them
    return FormatResults(setLinkState, currentState, searchVal, results);
}

function FilterResults(currentState, searchVal)
{
    // Filter Search Results
    const results = currentState.filter((subjectFile) =>
    {
        // Check if the searchVal has been set and if the searchVal is included in any subjectFile item values
        if(searchVal && subjectFile.item.toLowerCase().includes(searchVal.toLowerCase()))
        {
            // Return Results to Results Constant Variable
            return subjectFile;
        }
    });

    // Return Search Results
    return results;
}

function FormatResults(setLinkState, currentState, searchVal, results)
{
    // Check if Search Results were Found
    if(results.length > 0)
    {
        // Return Formatted-HTML Search Results
        return (
            <div className="wrapper">
                {
                    results.map(subjectFile =>
                        <div className="container scpblock border" key={subjectFile.id}>
                            {/* Item and Object Class */}
                            <Headerblock item={subjectFile.item} object={subjectFile.class} />
    
                            {/* Image */}
                            <Imageblock image={subjectFile.image} />
    
                            {/* Special Containment Procedures */}
                            <Textblock header="Special Containment Procedures:" paragraph={subjectFile.containment} />
    
                            {/* Description */}
                            <Textblock header="Description:" paragraph={subjectFile.description} />
    
                            {/* Read More Link Button */}
                            <LinkButton id={subjectFile.id} item={subjectFile.item} setLinkState={setLinkState} />
                        </div>
                    )}
            </div>
        );
    }
    else
    {
        // Check if the currentState's length is equal to 0 or check if searchVal is set and if the searchVal is included within any subjectFile item values
        if(currentState.length === 0 || searchVal && currentState.some(function(i){ return i.item.toLowerCase().includes(searchVal.toLowerCase());}))
        {
            // Return Loading MessageBox
            return ( <MessageBox message="Loading..."/> );
        }
        else
        {
            // Return No Results Were Found MessageBox
            return ( <MessageBox message="No Results Were Found"/> );
        }
    }
}

// Export Search
export default Search;