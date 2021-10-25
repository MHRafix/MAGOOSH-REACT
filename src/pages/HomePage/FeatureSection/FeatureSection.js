import React from 'react';
import FeatureImg1 from '../../images/f1.svg';
import FeatureImg2 from '../../images/f2.svg';
import FeatureImg3 from '../../images/f3.svg';

const FeatureSection = () => {
    return (
        <section>
            <div className="featureSection">
                 <div className="container">
                     <div className="row">
                         <div className="col-lg-4 col-md-4 col-sm-12">
                             <div className="featureBox">
                                 <img src={FeatureImg1} alt="featureImage" />
                                 <h2 className="title">400 million</h2>
                                 <p className="desc">practice questions <br /> answered</p>
                             </div>
                         </div>
                         <div className="col-lg-4 col-md-4 col-sm-12">
                             <div className="featureBox">
                                 <img src={FeatureImg2} alt="featureImage" />
                                 <h2 className="title">185</h2>
                                 <p className="desc">countries with <br /> Magoosh students</p>
                             </div>
                         </div>
                         <div className="col-lg-4 col-md-4 col-sm-12">
                             <div className="featureBox">
                                 <img src={FeatureImg3} alt="featureImage" />
                                 <h2 className="title">11 million</h2>
                                 <p className="desc">hours of video lessons<br /> watched</p>
                             </div>
                         </div>
                     </div>
                 </div>
            </div>
        </section>
    );
};

export default FeatureSection;