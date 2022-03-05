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

    return(
        <div className="aboutContainer">
            <Heading style={{color:"#ffa97a"}}>My Skill</Heading>
            <p style={{color:"#767676", fontWeight:"bold"}}>My abilities</p>
            <div className="detailContainer" style={{justifyContent:"space-evenly"}}>
                <SkillCard title="Frontend Developer" subTitle="More than 3 years" skill={frontendSkill}/>
                <SkillCard title="Technical Writer" subTitle="More than 2 years" skill={technicalSkill}/>
            </div>
        </div>
    )
}

export default Skill