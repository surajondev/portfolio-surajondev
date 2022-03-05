import { useState } from "react"
import { Heading, Button, Stack } from "@chakra-ui/react"
import WorkContainer from "./containers/WorkContainer"
import data from '../data/workData.js'

const Work = () => {
    const [active, setActive] = useState("all")

    let newData = data

    const writingActive = () => {
        newData = data.filter((data)=> data.tag==="Writing")
        console.log(newData)
    }

    return(
        <div className="aboutContainer">
            <Heading style={{color:"#ffa97a"}}>Recent Work</Heading>
            <p style={{color:"#767676", fontWeight:"bold"}}>My portfolio</p>
            <Stack direction='row' spacing={4} align='center' style={{margin:"1.5em 0"}}>
                <Button className="About" color="black" borderColor='#ffa97a' backgroundColor="#ffa97a" variant='solid' size="md" _hover={{ bg: '#cc8762' }}>
                    All
                </Button>
                <Button onClick={writingActive} className="downloadCV" borderColor='#ffa97a' color="#ffa97a" variant='outline' size="md" _hover={{ borderColor:"#cc8762", color:"#cc8762" }}>
                    Writing
                </Button>
                <Button className="downloadCV" borderColor='#ffa97a' color="#ffa97a" variant='outline' size="md" _hover={{ borderColor:"#cc8762", color:"#cc8762" }}>
                    Web Dev
                </Button>
            </Stack>
            {<WorkContainer data={newData}/>}
        </div>
    )
}

export default Work