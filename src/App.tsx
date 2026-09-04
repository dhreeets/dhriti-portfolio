import ContactInfo from "./ContactInfo"
import WorkExperience from "./WorkExperience"

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
    </div>
  )
}

export default App
