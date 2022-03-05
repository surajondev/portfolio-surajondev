import { Heading } from "@chakra-ui/react"
import ContactCard from "./cards/ContactCard"

const Contact = () => {
    return(
        <div className="aboutContainer">
            <Heading style={{color:"#ffa97a"}}>Contact Me</Heading>
            <p style={{color:"#767676", fontWeight:"bold"}}>Get in touch</p>
            <ContactCard padding="1em" size="24px"/>
        </div>
    )
}

export default Contact