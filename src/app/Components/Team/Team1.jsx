import Link from 'next/link';
import data from '../../Data/team1.json';
import Image from 'next/image';

const Team1 = () => {
    return (
<section className="team-page-section section-padding fix">
        <div className="team-page-container-wrapper style1">
            <div className="container">
                <div className="team-page-wrapper style1">
                    <div className="row gy-5">
                    {data.map((item, index)=>(
                        <div key={index} className="col-xl-4 col-md-6">
                            <div className="team-card style1">
                                <div className="team-thumb">
                                <Image src={item.img} alt="img" width={300} height={300}   />
                                </div>
                                <div className="team-card-content">
                                    <h3>
                                        <Link href="/team/team-details">{item.title}</Link>
                                    </h3>
                                    <p className="designation">{item.desc}</p>
                                    <ul className="social-links">
                                    <li><Link href={item.facebook}><i className="bi bi-facebook"></i></Link></li>
                            <li><Link href={item.twitter}><i className="bi bi-twitter"></i></Link></li>
                            <li><Link href={item.linkedin}><i className="bi bi-linkedin"></i></Link></li>
                            <li><Link href={item.pinterest}><i className="bi bi-pinterest"></i></Link></li>
                                    </ul>
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

export default Team1;