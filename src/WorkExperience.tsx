import jpmcPostcard from './assets/postcards/JpmcPostcard.png';
import uniOfLivPostcard from './assets/postcards/UniOfLivPostcard.png';
import tutorDoctorPostcard from './assets/postcards/TutorDoctorPostcard.png';
import externPostcard from './assets/postcards/ExternPostcard.png';
import springpodPostcard from './assets/postcards/SpringpodPostcard.png';
import PostcardDetail from './PostcardDetail';

function WorkExperience() {
    return (
        <div className="work-experience">
            Work Experience
            <div className="subtitle">
                <span>Click on each post / card to learn more!</span>
            </div>
            <div className="image-row">

                <PostcardDetail
                    src={jpmcPostcard}
                    alt="unable to display JPMC Postcard"
                    role="Software Engineering Industrial Placement"
                    duration="Jun 2025 - Jun 2026"
                    details="test text for JPMC placement"
                />

                <PostcardDetail
                    src={uniOfLivPostcard}
                    alt="unable to display Uniof Liverpool Postcard"
                    role="President, Girls in Coding Society"
                    duration="Jun 2024 - Jul 2025"
                    details="test text for Uniof Liverpool placement"
                />

                <PostcardDetail
                    src={tutorDoctorPostcard}
                    alt="unable to display Tutor Doctor Postcard"
                    role="GCSE Maths Tutor"
                    duration="Mar 2025 - Jun 2025"
                    details="test text for Tutor Doctor placement"
                />

                <PostcardDetail
                    src={externPostcard}
                    alt="unable to display Extern Postcard"
                    role="AI Risk Landscape Market Researcher"
                    duration="Aug 2024"
                    details="test text for Extern placement"
                />

                <PostcardDetail
                    src={springpodPostcard}
                    alt="unable to display Springpod Postcard"
                    role="Software Development Virtual Work Experience"
                    duration="Apr 2022 - Aug 2022"
                    details="test text for Springpod "
                />
            </div>
        </div>
    )
}

export default WorkExperience;
