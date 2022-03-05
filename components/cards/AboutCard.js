import { Heading } from "@chakra-ui/react"
import {BiBriefcaseAlt2} from 'react-icons/bi'
import { IconContext } from "react-icons/lib"

const AboutCard = ({title, subTitle, icon}) => {
    return(
        <div className="aboutCardContainer">
            <IconContext.Provider value={{ color: "#ffa97a", size:"24px"}}>
                <BiBriefcaseAlt2 />
            </IconContext.Provider>
            <Heading size="xs">{title}</Heading>
            <p style={{color:"#959595", fontWeight:"600"}}>{subTitle}</p>
        </div>
    )
}

export default AboutCard