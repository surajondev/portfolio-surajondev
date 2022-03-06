import { useState } from "react"
import { Heading, Button, Stack } from "@chakra-ui/react"
import WorkContainer from "./containers/WorkContainer"
import data from '../data/workData.js'

const Work = () => {
    const [active, setActive] = useState("All")
    const [all, setAll] = useState(true)
    const [writing, setWriting] = useState(false)
    const [webdev, setWebdev] = useState(false)

    let writingData = data.filter((data)=> data.tag==="Writing")
    let webData = data.filter((data)=> data.tag==="Web Dev")

    const activeButton = (name, isActive) => {
        if(isActive){
            return(
                <Button onClick={() => setActive(name)} color="black" borderColor='#ffa97a' backgroundColor="#ffa97a" variant='solid' size="md" _focus={{boxBorder:"none"}} _hover={{ bg: '#cc8762' }} >
                    {name}
                </Button>
            )
        }
        else{
            return(
                <Button 
                onClick={() => {
                    setActive(name);
                    if(name==="Writing"){
                        setWriting(true)
                        setAll(false)
                        setWebdev(false)
                    }
                    else if(name==="Web Dev"){
                        setWriting(false)
                        setAll(false)
                        setWebdev(true)
                    }
                    else{
                        setWriting(false)
                        setAll(true)
                        setWebdev(false)
                    }
                }} 
                color="#ffa97a" borderColor='#ffa97a'  
                variant='outline' size="md" _focus={{boxBorder:"none"}}  _hover={{ borderColor:"#cc8762", color:"#cc8762" }}>
                    {name}
                </Button>
            )
        }
    }

    return(
        <div className="aboutContainer">
            <Heading style={{color:"#ffa97a"}}>Recent Work</Heading>
            <p style={{color:"#767676", fontWeight:"bold"}}>My portfolio</p>
            <Stack direction='row' spacing={4} align='center' style={{margin:"1.5em 0"}}>
                {activeButton("All", all)}
                {activeButton("Writing", writing)}
                {activeButton("Web Dev", webdev)}
            </Stack>
            {active ==="All" && <WorkContainer data={data}/>}
            {active ==="Writing" && <WorkContainer data={writingData}/>}
            {active ==="Web Dev" && <WorkContainer data={webData}/>}
        </div>
    )
}

export default Work