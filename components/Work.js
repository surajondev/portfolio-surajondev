import { useState, useEffect } from "react"
import { Heading, Button, Stack } from "@chakra-ui/react"
import WorkContainer from "./containers/WorkContainer"
import data from '../data/workData.js'

const Work = () => {
    const [active, setActive] = useState("all")

    let writingData = data.filter((data)=> data.tag==="Writing")
    let webData = data.filter((data)=> data.tag==="Web Dev")

    let activeButton = {color:"black", borderColor:'#ffa97a', backgroundColor:"#ffa97a", variant:'solid', size:"md"}
    let disableButton = {color:"#ffa97a", borderColor:'#ffa97a',  variant:'outline', size:"md"}

    return(
        <div className="aboutContainer">
            <Heading style={{color:"#ffa97a"}}>Recent Work</Heading>
            <p style={{color:"#767676", fontWeight:"bold"}}>My portfolio</p>
            <Stack direction='row' spacing={4} align='center' style={{margin:"1.5em 0"}}>
                <Button onClick={() => setActive("all")}  isDisabled={true} _disabled={disableButton}  _active={activeButton}  _hover={{ bg: '#cc8762' }}>
                    All
                </Button>
                <Button onClick={() => setActive("writing")} isActive={true} _active={disableButton} _hover={{ borderColor:"#cc8762", color:"#cc8762" }}>
                    Writing
                </Button>
                <Button onClick={() => setActive("webdev")} color="#ffa97a" borderColor='#ffa97a'  variant='outline' size="md" _hover={{ borderColor:"#cc8762", color:"#cc8762" }}>
                    Web Dev
                </Button>
            </Stack>
            {active ==="all" && <WorkContainer data={data}/>}
            {active ==="writing" && <WorkContainer data={writingData}/>}
            {active ==="webdev" && <WorkContainer data={webData}/>}
        </div>
    )
}

export default Work