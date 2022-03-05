import WorkCard from "../cards/WorkCard"

const WorkContainer = ({data}) => {
    return(
        <div className="detailContainer" style={{justifyContent:"space-evenly", flexWrap: "wrap", margin:"0px"}}s>
            {data.map((data) => <WorkCard key={data.name} title={data.name} img={data.img} link={data.link} tag={data.tag} href={data.href}/>)}
        </div>
    )
}

export default WorkContainer