import React from 'react';

const Hero = () => {
    return (
        <section>
            <div className="heroSection">
                <div className="container">
                <div className="mainHeadig">
                    <h1 className="heading">More than 1.5 Million Students Have <br /> Said Hello to Stress-Free Studying</h1>
                </div>
                <div className="lessonCategories">
                    <span className="subTitle">Start preparing for your next test!</span> <br /><br />
                    <div className="categories">
                        <div className="category">GRE<span className="rMark">®</span></div>
                        <div className="category">GMAT<span className="rMark">®</span></div>
                        <div className="category">TOEFL<span className="rMark">®</span></div>
                        <div className="category">SAT<span className="rMark">®</span></div>
                        <div className="category">ACT<span className="rMark">®</span></div>
                        <div className="category">Praxis<span className="rMark">®</span></div>
                    </div>
                    <div className="categories2">
                    <div className="category">LSAT<span className="rMark">®</span></div>
                    <div className="category">MCAT<span className="rMark">®</span></div>
                    <div className="category">IELTS<span className="rMark">®</span></div>
                    </div>
                </div>
              </div>
            </div>
        </section>
    );
};

export default Hero;