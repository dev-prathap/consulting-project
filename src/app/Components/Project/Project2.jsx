import Link from 'next/link';
import data from '../../Data/project1.json';
import Image from 'next/image';

const Project2 = () => {
    return (
        <section className="project-section section-padding fix">
        <div className="project-container-wrapper style2">
            <div className="container">
                <div className="project-wrapper style2">
                    <div className="row gy-4">
                    {data.map((item, index)=>(
                        <div key={index} className="col-xl-3 col-md-6">
                            <div className="project-card style1">
                                <div className="project-thumb">
                                <Image src={item.img} alt="img" width={424} height={575}   />
                                </div>
                                <div className="project-content">
                                    <h3>
                                    <Link href="/project/project-details">{item.title}</Link>
                                    </h3>
                                    <p className="text">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Project2;