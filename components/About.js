import { Heading, Box, Button } from "@chakra-ui/react"
import intro from '../assets/intro.png'
import Image from "next/image"
import AboutCard from "./cards/AboutCard"

const About = () => {
    return(
        <div className="aboutContainer"> 
            <Heading style={{color:"#ffa97a"}}>About Me</Heading>
            <p style={{color:"#767676", fontWeight:"bold"}}>My intro</p>
            <div className="detailContainer">
                <Box style={{borderRadius:"2em"}} w='275px' h='275px' bgGradient='linear(#FFA97A, rgba(248,242,244,0.5))'>
                    <Image alt="Suraj Vishwakarma Profile" src={intro}/>
                </Box>
                <div>   
                    <p style={{color:"#959595", fontWeight:"bold"}}>I have been writing technical blog posts on different platforms and </p>
                    <p style={{color:"#959595", fontWeight:"bold"}}>my website since early 2020. During this period, I was able to learn </p>
                    <p style={{color:"#959595", fontWeight:"bold"}}>many things about writing and maintaining a technical blog.</p>
                    <div className="aboutCardStyle">
                        <AboutCard title="Articles" subTitle="60+" icon="GrArticle"/>
                        <AboutCard title="Reached" subTitle="300K+" icon="GrShareOption"/>
                        <AboutCard title="Projects" subTitle="8+" icon="GrProjects"/>
                    </div>
                    <Button mt="2.5em" className="About" color="black" borderColor='#ffa97a' backgroundColor="#ffa97a" variant='solid' size="lg" _hover={{ bg: '#cc8762' }}>
                        Contact Me
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default About