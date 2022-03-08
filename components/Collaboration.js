import { Heading, Image, Link } from "@chakra-ui/react"
import CollabImg from "./cards/CollabImg"

const Collaboration = () => {
    return(
        <div className="aboutContainer">
            <Heading style={{color:"#ffa97a"}}>My Collaboration</Heading>
            <p style={{color:"#767676", fontWeight:"bold"}}>I have worked with</p>
            <div className="detailContainer" style={{justifyContent:"center"}}>
                <CollabImg 
                    link="https://www.spurwing.io/" 
                    src="https://avatars.githubusercontent.com/u/87380658?s=280&v=4" 
                    alt="Spurwing"
                />
                <CollabImg 
                    link="https://app.daily.dev/" 
                    src="https://bit.ly/3L81K66" 
                    alt="Daily.dev"
                />
                <CollabImg 
                    link="https://aviyel.com/" 
                    src="https://bit.ly/34h5otG" 
                    alt="Aviyel"
                />
                <CollabImg 
                    link="https://www.tuya.com/" 
                    src="https://bit.ly/3La8yAe" 
                    alt="Tuya Global"
                />
                <CollabImg 
                    link="https://www.jarchitect.com/" 
                    src="https://bit.ly/3Jb00aB" 
                    alt="JArchitect"
                />
                <CollabImg 
                    link="https://blog.logrocket.com/" 
                    src="https://bit.ly/34pCfMW" 
                    alt="LogRocket Blog"
                />
            </div>
        </div>
    )
}

export default Collaboration