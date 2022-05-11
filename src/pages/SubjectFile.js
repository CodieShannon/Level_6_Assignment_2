// Import Subject File Database Script
import subjectFileDB from '../scripts/subjectFileDB';

// Import Components
import Headerblock from '../components/blocks/Headerblock';
import Imageblock from '../components/blocks/Imageblock';
import Textblock from '../components/blocks/Textblock';

// Functions
function SubjectFile({id}) {
    // Get Data From Database
    const currentState = subjectFileDB();

    // Filter For Subject File
    const result = currentState.filter(i => i.id === id);

    // Format Subject File For HTML and Return It
    return FormatSubject(result);
}

function FormatSubject(result) {
    // Return Formatted-HTML Subject File
    return (
        <div className="wrapper">
            {
                result.map(subjectFile =>
                    // Body
                    <div key={subjectFile.id} className="container">
                        {/* Item and Object Class */}
                        <Headerblock item={subjectFile.item} object={subjectFile.class} />

                        {/* Image */}
                        <Imageblock image={subjectFile.image} />

                        {/* Special Containment Procedures */}
                        <Textblock header="Special Containment Procedures:" paragraph={subjectFile.containment} />

                        {/* Description */}
                        <Textblock header="Description:" paragraph={subjectFile.description} />
                    </div>
                )
            }
        </div>
    );
}

// Export SubjectFile
export default SubjectFile;