import jpmcPostcard from './assets/postcards/JpmcPostcard.png';
import uniOfLivPostcard from './assets/postcards/UniOfLivPostcard.png';
import tutorDoctorPostcard from './assets/postcards/TutorDoctorPostcard.png';
import externPostcard from './assets/postcards/ExternPostcard.png';
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
                    details={[
                        "Delivered full-stack features on a green-field application, building reactive backend services in Java/Spring Boot (WebFlux) for REST APIs, paired with React on the front end.",
                        "Designed and implemented relational data structures using Model Driven Development, integrating Oracle databases, and managing schema changes with Liquibase.",
                        "Operated across the full SDLC in a Jenkins-driven CI/CD pipeline, strengthening application resiliency through rigorous validation testing and identifying then implementing performance optimizations.",
                        "Delivered features in an Al-augmented Agile team, building out a complete Cucumber framework independently to drive Behaviour Driven Development and improve test coverage."
                    ]}
                />

                <PostcardDetail
                    src={uniOfLivPostcard}
                    alt="unable to display Uniof Liverpool Postcard"
                    role="President, Girls in Coding Society"
                    duration="Jun 2024 - Jul 2025"
                    details={[
                        "Elected as the society's 2nd President weeks after its inception, taking on foundational responsibility for building the society, and expanded membership from single digits to over 160 members, through targeted event organisation and outreach strategy.", 
                        "Established partnerships with external organizations with aligned goals, organizing joint events and career development workshops for society members, forming the elementary connections for future committees.",
                        "Led and delegated across a committee, coordinated task ownership to ensure timely execution of events and promotions, while managing communication across multiple stakeholder groups and balancing university workload."]}
                />

                <PostcardDetail
                    src={tutorDoctorPostcard}
                    alt="unable to display Tutor Doctor Postcard"
                    role="GCSE Maths Tutor"
                    duration="Mar 2025 - Jun 2025"
                    details={[
                        "Designed and delivered structured and personalized lesson plans for a GCSE student, resulting in the achievement of their dream grade in the final Mathematics GCSE exam."]}
                />

                <PostcardDetail
                    src={externPostcard}
                    alt="unable to display Extern Postcard"
                    role="AI Risk Landscape Market Researcher"
                    duration="Aug 2024"
                    details={[
                        "Executed thorough secondary research to identify, analyse, and classify prevalent Al risks, especially relevant to enterprises. Also catalogued 2 such risks as per the Al risk framework classified by the National Research Group (NRG).", 
                        "Formulated 2 in-depth, client-oriented case studies demonstrating potential business repercussions of specific Al risks.",
                        "Delivered strategic insights and actionable recommendations to clients for addressing and mitigating Al risks through an informative, comprehensive and data heavy presentation."]}
                />
            </div>
        </div>
    )
}

export default WorkExperience;
