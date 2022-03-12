import { Heading } from "@chakra-ui/react"
import SkillCard from "./cards/SkillCard"

const Skill = () => {
    const frontendSkill = [
        {name:"HTML", progress:"70"},
        {name:"CSS", progress:"60"},
        {name:"JavaScript", progress:"60"}
    ]

    const technicalSkill = [
        {name:"Programming", progress:"60"},
        {name:"Tutorial", progress:"30"},
        {name:"Discussion", progress:"30"}
    ]

    const frameworkSkill = [
        {name:"React", progress:"70"},
        {name:"NextJS", progress:"40"},
        {name:"thirdweb", progress:"50"}
    ]
    

    return(
        <div className="aboutContainer">
            <Heading style={{color:"#ffa97a"}}>My Skill</Heading>
            <p style={{color:"#767676", fontWeight:"bold"}}>My abilities</p>
            <div className="detailContainer" style={{justifyContent:"space-evenly", flexWrap: "wrap"}}>
                <SkillCard title="Frontend Developer" subTitle="More than 3 years" skill={frontendSkill}/>
                <SkillCard title="Technical Writer" subTitle="More than 2 years" skill={technicalSkill}/>
                <SkillCard title="Technical Writer" subTitle="More than 2 years" skill={frameworkSkill}/>
            </div>
        </div>
    )
}

export default Skill