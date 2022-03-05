import { Heading } from "@chakra-ui/react"
import ContactCard from "./cards/ContactCard"

const Footer = () => {
    return(
        <div className="footerBody">
            <div className="footerContainer">
                <Heading style={{color:"#293241"}} size="lg">SurajOnDev</Heading>
                <li style={{marginTop:"1em"}}>
                    <ul style={{color:"#293241"}} className='listItem'>About</ul>
                    <ul style={{color:"#293241"}} className='listItem'>Experience</ul>
                    <ul style={{color:"#293241"}} className='listItem'>Services</ul>
                    <ul style={{color:"#293241"}} className='listItem'>Contact</ul>
                </li>
                <ContactCard backgroundColor="#293241" padding="0.7em" size="18px"/>
                <Heading size="sm">UI design by 
                <a href="https://www.figma.com/community/file/1074329833039581814"> Noé</a>
                </Heading>
            </div>
        </div>
    )
}

export default Footer