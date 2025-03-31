import Link from "next/link";

const PricingCard = ({name,price,monthly,content,FeatureList,btnname,btnurl}) => {
    return (
    <div className="col-xl-4 col-md-6">
        <div className="pricing-card style1">
            <div className="pricing-card-header">
                <h6>{name}</h6>
                <div className="price-wrapper">
                    <span className="price">{price}</span> <span className="text"> / {monthly}</span>
                </div>
                <p className="text">{content}</p>
            </div>
            <div className="pricing-card-body">
                <ul className="checklist">
                {FeatureList?.map((item, index) => (
                    <li key={index}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                            viewBox="0 0 15 15" fill="none">
                            <path opacity="0.992" fillRule="evenodd" clipRule="evenodd"
                                d="M7.22393 0C10.1444 0.0048682 12.3871 1.22628 13.952 3.66423C15.1321 5.76513 15.3168 7.95136 14.5062 10.2229C13.3721 12.8859 11.3758 14.4614 8.51719 14.9495C5.62984 15.2424 3.28454 14.2622 1.48125 12.0088C-0.0776275 9.77987 -0.406074 7.37811 0.495906 4.80353C1.26674 2.9139 2.5754 1.53341 4.42187 0.662026C5.31983 0.270692 6.25384 0.0500183 7.22393 0ZM11.2269 4.43403C11.6225 4.43526 11.7508 4.62002 11.6118 4.98829C9.90797 6.93843 8.20413 8.8886 6.50032 10.8387C6.34295 10.9814 6.17359 10.9968 5.99226 10.8849C5.24811 9.89445 4.50399 8.904 3.75985 7.91352C3.63052 7.68883 3.67671 7.50922 3.89841 7.37466C3.99079 7.35412 4.08316 7.35412 4.17554 7.37466C4.74004 7.75441 5.30458 8.1342 5.86909 8.51396C6.02234 8.62678 6.18659 8.64729 6.36176 8.57554C7.97994 7.1872 9.60165 5.80667 11.2269 4.43403Z"
                                fill="#1AD079" />
                        </svg> {item}
                    </li>
                    ))}

                </ul>
            </div>
            <Link className="theme-btn style5" href={btnurl}> {btnname} </Link>
        </div>
    </div>
    );
};

export default PricingCard;