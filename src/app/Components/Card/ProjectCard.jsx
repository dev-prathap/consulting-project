import Link from "next/link";

const ProjectCard = ({img,title,btnname}) => {
    return (
        <div className="project-card style1">
        <div className="project-thumb">
            <img src={img} alt="thumb" />
        </div>
        <div className="project-content">
            <h3>
                <Link href="/project/project-details">{title}</Link>
            </h3>
            <p className="text">{btnname}</p>
        </div>
    </div>
    );
};

export default ProjectCard;