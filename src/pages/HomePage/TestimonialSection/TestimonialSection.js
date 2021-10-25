import React from 'react';
import TestimonialImage from '../../images/Cindy-Le.png';

const TestimonialSection = () => {
    return (
        <section>
            <div className="testimonialSection">
                <div className="container">
                    <div className="grePayment">
                        <p className="heading">Expert GRE instruction at a fraction of the price</p>
                        <button className="regularBtn">check out online classes</button>
                    </div>
                </div>
            </div>
               <div className="testimonial">
                   <div className="container">
                        <div className="firstTestimonial">
                            <div className="row align-items-center">
                                <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                                    <img className="testimonialImg rounded-circle" src={TestimonialImage} alt="testimonialImage" />
                                    <h4 className="studentName">Cindy L.</h4>
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-12">
                                    <p className="reviewDesc">
                                    "Magoosh seemed to be by far the best option: a program I could use whenever I liked, following my own schedule."
                                    </p>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 text-center mt-3">
                                    <button className="formalBtn">student testimonials</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default TestimonialSection;