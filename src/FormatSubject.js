// Import StyleSheet
import './css/App.css';

// Functions
function FormatSubject(result) {
    // Return Formatted HTML Subject File
    return (
        <div className="wrapper">
            {
                result.map(subjectFile =>
                    // Body
                    <div key={subjectFile.id} className="container">
                        <div className="headerblock border">
                            <h1>Item #: {subjectFile.item}</h1>
                            <h2>Object Class: {subjectFile.class}</h2>
                        </div>

                        <div className="imageblock border">
                            <img className="subject-image" src={subjectFile.image} alt="Subject File" />
                        </div>

                        <div className="textblock border">
                            <article>
                                <h2>Special Containment Procedures:</h2>
                                <p>{subjectFile.containment}</p>
                            </article>
                        </div>

                        <div className="textblock border">
                            <article>
                                <h2>Description:</h2>
                                <p>{subjectFile.description}</p>
                            </article>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

// Export FormatSubject
export default FormatSubject;