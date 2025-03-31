import ProjectCard from "../Card/ProjectCard";

const Project1 = () => {
    return (
    <section className="project-section section-padding fix">
        <div className="container">
            <div className="row gy-4">
                <div className="col-xl-6 col-md-6">
                <ProjectCard
                    img="/assets/images/project/projectThumb1_1.jpg"
                    title="Working Laptop"
                    btnname="View Project"
                ></ProjectCard>         
                </div>
                <div className="col-xl-6 col-md-6">
                    <div className="row gy-4">

                        <div className="col-md-6">
                            <ProjectCard
                                img="/assets/images/project/projectThumb1_2.jpg"
                                title="Working Laptop"
                                btnname="View Project"
                            ></ProjectCard>         
                        </div>
                        <div className="col-md-6">
                        <ProjectCard
                                img="/assets/images/project/projectThumb1_3.jpg"
                                title="Working Laptop"
                                btnname="View Project"
                        ></ProjectCard> 
                        </div>
                        <div className="col-md-6">
                        <ProjectCard
                                img="/assets/images/project/projectThumb1_4.jpg"
                                title="Working Laptop"
                                btnname="View Project"
                        ></ProjectCard> 
                        </div>
                        <div className="col-md-6">
                        <ProjectCard
                                img="/assets/images/project/projectThumb1_5.jpg"
                                title="Working Laptop"
                                btnname="View Project"
                        ></ProjectCard> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="row gy-4 mt-0">
                <div className="col-md-6">
                    <div className="row gy-4">
                        <div className="col-md-6">
                        <ProjectCard
                                img="/assets/images/project/projectThumb1_6.jpg"
                                title="Working Laptop"
                                btnname="View Project"
                        ></ProjectCard> 
                        </div>
                        <div className="col-md-6">
                        <ProjectCard
                                img="/assets/images/project/projectThumb1_7.jpg"
                                title="Working Laptop"
                                btnname="View Project"
                        ></ProjectCard> 
                        </div>
                        <div className="col-md-6">
                        <ProjectCard
                                img="/assets/images/project/projectThumb1_8.jpg"
                                title="Working Laptop"
                                btnname="View Project"
                        ></ProjectCard>                            
                        </div>
                        <div className="col-md-6">
                        <ProjectCard
                                img="/assets/images/project/projectThumb1_9.jpg"
                                title="Working Laptop"
                                btnname="View Project"
                        ></ProjectCard>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <ProjectCard
                                img="/assets/images/project/projectThumb1_10.jpg"
                                title="Working Laptop"
                                btnname="View Project"
                        ></ProjectCard>                   

                </div>
            </div>
        </div>
    </section>

    );
};

export default Project1;