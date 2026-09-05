import jpmcPostcard from './JpmcPostcard.png';
import uniOfLivPostcard from './UniOfLivPostcard.png';

function WorkExperience() {
    return (
        <div className="work-experience">Work Experience
            <div className="images">
                <img 
                    className="jpmc-postcard"
                    src={jpmcPostcard} 
                    alt="unable to load jpmc postcard"
                    width="200px" 
                    height="auto"/>

                <img
                    className="uni-of-liv-postcard"
                    src={uniOfLivPostcard}
                    alt="unable to load uni of liv postcard"
                    width="200px" 
                    height="auto"
                />
            </div>
        </div>
    )
}

export default WorkExperience;
