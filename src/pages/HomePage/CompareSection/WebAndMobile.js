import React from 'react';
import ComputerIcon from '../../images/product-web.svg';
import ClockIcon from '../../images/web-clock.svg';
import WebPlayIcon from '../../images/web-play.svg';
import WebChart from '../../images/web-chart.svg';
import MessageIcon from '../../images/web-callout.svg';

import MobileIcon from '../../images/product-mobile.svg';
import MobileFlashCard from '../../images/mobile-flashcards11.svg';
import MobileMath from '../../images/mobile-math1.svg';
import MobileOpponent from '../../images/mobile-opponent.svg';
import MobileStar from '../../images/mobile-star.svg';

const WebAndMobile = () => {
    return (
        <section>
            <div className="compareSection">
                <div className="container">
                    <div className="row">
                        {/* Web virsion and divices systems and benifits lists */}
                    <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="compareBox">
                                        <div className="svgIcon">
                                            <img className="parentImg" src={ComputerIcon} alt="svgIcon" />
                                        </div>
                                        <div className="details">
                                            <h2 className="boxName">Web</h2>
                                            <p className="boxDesc">Prep anytime from your desktop with our self-study</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="compareBox">
                                    <div className="svgIcon">
                                          <img src={ClockIcon} alt="svgIcon" />
                                        </div>
                                        <div className="details">
                                            <p className="boxDesc2">Thousands of timed practice questions</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="compareBox">
                                    <div className="svgIcon">
                                          <img src={WebPlayIcon} alt="svgIcon" />
                                        </div>
                                        <div className="details">
                                            <p className="boxDesc2">Video lessons taught by experts</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="compareBox">
                                    <div className="svgIcon">
                                          <img src={WebChart} alt="svgIcon" />
                                        </div>
                                        <div className="details">
                                            <p className="boxDesc2">Track your progress</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="compareBox">
                                    <div className="svgIcon">
                                          <img src={MessageIcon} alt="svgIcon" />
                                        </div>
                                        <div className="details">
                                            <p className="boxDesc2">Friendly support team</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>



                          {/* Mobile or mini divices systems and benifits */}
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="compareBox">
                                        <div className="svgIcon">
                                            <img className="parentImg" src={MobileIcon} alt="svgIcon" />
                                        </div>
                                        <div className="details">
                                            <h2 className="boxName">Mobile</h2>
                                            <p className="boxDesc">Study on-the-go with our free mobile apps</p>
                                        </div>
                                    </div>
                                </div> 
                                <br /><br /><br /><br /><br /><br />

                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="compareBox">
                                    <div className="svgIcon">
                                          <img src={MobileFlashCard} alt="svgIcon" />
                                        </div>
                                        <div className="details">
                                            <p className="boxDesc2">Vocab flashcards</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="compareBox">
                                    <div className="svgIcon">
                                          <img src={MobileMath} alt="svgIcon" />
                                        </div>
                                        <div className="details">
                                            <p className="boxDesc2">Math and Verbal practice</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="compareBox">
                                    <div className="svgIcon">
                                          <img src={MobileOpponent} alt="svgIcon" />
                                        </div>
                                        <div className="details">
                                            <p className="boxDesc2">Play an opponent</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="compareBox">
                                    <div className="svgIcon">
                                          <img src={MobileStar} alt="svgIcon" />
                                        </div>
                                        <div className="details">
                                            <p className="boxDesc2">5-star ratings</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebAndMobile;