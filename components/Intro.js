import { Heading, Stack, Button, Box } from "@chakra-ui/react"
import Image from "next/image"
import profile from '../assets/profile.png'

const Intro = () => {
    return(
        <div className="introContainer">
            <div className="introText">
                <p>Hello I am</p>
                <Heading>Suraj<span style={{color:"#d53f8c"}}> Vishwakarma</span></Heading>
                <p style={{color:"#ffa97a"}}>Web Developer and Technical Writer</p>
            </div>
            <Stack direction='row' spacing={4} align='center' style={{margin:"1.5em 0"}}>
                <Button className="downloadCV" borderColor='#ffa97a' color="#ffa97a" variant='outline' size="lg" _hover={{ borderColor:"#cc8762", color:"#cc8762" }}>
                    Download CV
                </Button>
                <Button className="About" color="black" borderColor='#ffa97a' backgroundColor="#ffa97a" variant='solid' size="lg" _hover={{ bg: '#cc8762' }}>
                    About
                </Button>
            </Stack>
            <Box className="profile" w='275px' h='275px' bgGradient='linear(#FFA97A , rgba(248,242,244,0.5))'>
                <Image alt="Suraj Vishwakarma Image" src={profile}/>
            </Box>
        </div>
    )
}

export default Intro