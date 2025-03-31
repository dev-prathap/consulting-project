import Image from "next/image";

const FeatureCard = ({img,title,content}) => {
    return (
        <div className="fancy-box style2">
        <div className="icon"><Image src={img} alt="img" width={80} height={80}   /></div>
        <div className="content wow fadeInUp" data-wow-delay=".2s">
            <h4>{title}</h4>
            <p className="text">{content}</p>
        </div>
    </div>
    );
};

export default FeatureCard;