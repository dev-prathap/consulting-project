import Image from 'next/image';
import data from '../../Data/work.json';
import SectionTitle from '../Common/SectionTitle';

const HowWork3 = () => {
    return (
        <section className="how-too-work section-padding fix pt-0">
        <div className="container">
             <div className="section-title mb-60">
                    <SectionTitle
                        SubTitle="How It Work"
                        Title="Our Working Process"
                    ></SectionTitle>
             </div>
             <div className="how-work-wrapper">
                <div className="row g-4">
                     <div className="col-lg-8">
                         <div className="how-work-content">
                             <p className="text wow fadeInUp">
                                 There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly
                             </p>
                             <div className="row g-4">
                             {data.map((item, index)=>(
                                 <div key={index} className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                                     <div className="how-work-number-items">
                                         <div className="number">
                                         {item.number}
                                         </div>
                                         <div className="content">
                                             <h3>{item.title}</h3>
                                             <p>
                                             {item.desc}
                                             </p>
                                         </div>
                                     </div>
                                 </div>
                                ))}

                             </div>
                         </div>
                     </div>
                     <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                         <div className="gap-image">
                         <Image src="/assets/images/gap.png" alt="img" width={376} height={431}   />
                         </div>
                     </div>
                </div>
             </div>
        </div>
     </section>
    );
};

export default HowWork3;