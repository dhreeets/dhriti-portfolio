import EducationDetail from './EducationDetail';
import liverBuilding from './assets/buildings/LiverBuilding.png'
import hymersBuilding from './assets/buildings/HymersBuilding.png'
import heritageBuilding from './assets/buildings/HeritageBuilding.png'

function Education() {
    return (
        <div className="education">
            Education
            <div className="city-name-row">
                <EducationDetail
                    src={liverBuilding}
                    alt="unable to display Liver building"
                    city='Liverpool'
                    duration='Sep 2023 - Jul 2027'
                    institution='University of Liverpool'
                    qualification='BSc (Hons) Computer Science w Year in Industry'
                    details={["test"]}
                />

                <EducationDetail
                    src={hymersBuilding}
                    alt="unable to display Hymers building"
                    city='Hull'
                    duration='Sep 2021 - Jul 2023'
                    institution='Hymers College'
                    qualification='A Levels: Computer Science, Mathematics, Physics'
                    details={["test"]}
                />

                <EducationDetail
                    src={heritageBuilding}
                    alt="unable to display Heritage building"
                    city='New Delhi'
                    duration='Mar 2008 - Jul 2021'
                    institution='The Heritage School, Rohini'
                    qualification='GCSE Equivalent: All India Secondary School Examination (AISSE)'
                    details={["test"]}
                />
            </div>
        </div>
    )
}

export default Education;