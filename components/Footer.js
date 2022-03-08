import { Heading } from "@chakra-ui/react"
import ContactCard from "./cards/ContactCard"

const Footer = () => {
    return(
        <div className="footerBody">
            <div className="footerContainer">
                <Heading style={{color:"#293241"}} size="lg">SurajOnDev</Heading>
                <Heading size="sm">UI design by 
                <a href="https://www.figma.com/community/file/1074329833039581814">
                     <span style={{color:"#d53f8c"}}> Noé</span>
                    </a>
                </Heading>
            </div>
        </div>
    )
}

export default Footer