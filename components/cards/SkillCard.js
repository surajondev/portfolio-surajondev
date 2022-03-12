import { Heading, Progress, ChakraProvider, extendTheme  } from "@chakra-ui/react"

const theme = extendTheme({
    colors:{
        progressBar:{
            50:"#d53f8c",
            100:"#d53f8c",
            500:"#d53f8c"
        }
    }
})

const SkillCard = ({title, subTitle, skill}) => {
    return(
        <ChakraProvider theme={theme}>
            <div className="skillContainer" style={{marginTop:"1em"}}>
                <Heading size="md">{title}</Heading>
                <p style={{color:"#959595", fontWeight:"600"}}>{subTitle}</p>
                <div className="progressTitle">
                    <Heading size="sm">{skill[0].name}</Heading>
                    <p  style={{color:"#959595", fontWeight:"600"}}>{skill[0].progress}%</p>
                </div>
                <Progress value={skill[0].progress} size='xs' colorScheme="progressBar" backgroundColor="rgba(213,63,140,0.5)" />
                <div className="progressTitle">
                    <Heading size="sm">{skill[1].name}</Heading>
                    <p style={{color:"#959595", fontWeight:"600"}}>{skill[1].progress}%</p>
                </div>
                <Progress value={skill[1].progress} size='xs' colorScheme="pink"  backgroundColor="rgba(213,63,140,0.5)" />
                <div className="progressTitle">
                    <Heading size="sm">{skill[2].name}</Heading>
                    <p style={{color:"#959595", fontWeight:"600"}}>{skill[2].progress}%</p>
                </div>
                <Progress value={skill[2].progress} size='xs' colorScheme="pink" backgroundColor="rgba(213,63,140,0.5)" />
            </div>
        </ChakraProvider>
    )
}

export default SkillCard