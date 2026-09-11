import ContactInfo from "./ContactInfo"
import WorkExperience from "./WorkExperience"
import Education from "./Education"

function App() {
  return(
    <div>
      <section className = "cover-background">
        <ContactInfo/>
        <div className = "name">Dhriti Sharma</div>
        <div className = "phonetic">/dhree-tih/shur-mah/</div>
        <div className = "below-name">Personal Portfolio</div>
      </section>
        <WorkExperience/>
        <Education/>
    </div>
  )
}

export default App
