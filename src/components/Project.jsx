/* eslint-disable react/prop-types */


const Project = (props) => {
    const hrefHandler = () => {
        window.open(props.link, '_blank');
    }


    return (

        <div className="project-item border-2 border-white rounded-xl p-4 flex flex-col gap-4 shadow-xl cursor-pointer max-[1400px]:text-base" onClick={hrefHandler}>
            <h2 className="text-center">{props.title}</h2>
            <div className="w-rounded-xl">
                <img className="object-cover" src={props.image} alt={props.title}></img>
            </div>
            <p className="text-base text-center max-[1400px]:text-base">
                {props.children}
            </p>


            <a onClick={(e) => { e.stopPropagation() }} className="text-center text-base border-2 border-white rounded-xl hover:bg-white hover:text-black w-2/3 m-auto p-2" href={props.git} target="_blank" rel="noopener noreferrer">
                View code
            </a>
        </div>

    )

}

export default Project;