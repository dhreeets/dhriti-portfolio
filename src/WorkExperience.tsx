import jpmcPostcard from './JpmcPostcard.png';
import uniOfLivPostcard from './UniOfLivPostcard.png';
import tutorDoctorPostcard from './TutorDoctorPostcard.png';
import externPostcard from './ExternPostcard.png';
import springpodPostcard from './SpringpodPostcard.png';

function WorkExperience() {
    return (
        <div className="work-experience">Work Experience
            <div className="image-row">
                <div className="image-item">
                    <img 
                    src={jpmcPostcard} 
                    alt="unable to load jpmc postcard"
                    width="200px" 
                    height="auto"/>
                    <span>Software Engineering Industrial Placement</span>
                </div>
                
                <div className="image-item">
                    <img
                        src={uniOfLivPostcard}
                        alt="unable to load uni of liv postcard"
                        width="200px" 
                        height="auto"
                    />
                    <span>President, Girls in Coding</span>
                </div>

                <div className="image-item">
                    <img
                        src={tutorDoctorPostcard}
                        alt="unable to load tutor doctor postcard"
                        width="200px" 
                        height="auto"
                    />
                    <span>GCSE Maths Tutor</span>
                </div>

                <div className="image-item">
                    <img
                        src={externPostcard}
                        alt="unable to load extern postcard"
                        width="200px" 
                        height="auto"
                    />
                    <span>AI Market Risk Research Externship</span>
                </div>

                <div className="image-item">
                    <img
                        src={springpodPostcard}
                        alt="unable to load springpod postcard"
                        width="200px" 
                        height="auto"
                    />
                    <span>Software Engineering Virtual Work Experience</span>
                </div>

            </div>
        </div>
    )
}

export default WorkExperience;
