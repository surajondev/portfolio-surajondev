import WorkCard from "../cards/WorkCard"
import { motion } from "framer-motion"

const WorkContainer = ({data}) => {
    return(
        <motion.div 
            animate={{ x: [-100, 0], opacity:[0,1] }} 
            transition={{ ease:"easeInOut", duration: 0.5 }}
            className="detailContainer" 
            style={{justifyContent:"space-evenly", flexWrap: "wrap", margin:"0px"}}
        >
            {data.map((data) => <WorkCard key={data.name} title={data.name} img={data.img} link={data.link} tag={data.tag} href={data.href}/>)}
        </motion.div>
    )
}

export default WorkContainer