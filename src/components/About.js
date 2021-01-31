import React from 'react';
import Data from './Data';

const About = () => {
    return (
        <React.Fragment>
            <div className="section" id="about">
                <div className="container">
                    <div className="card" data-aos="fade-up" data-aos-offset="10">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="card-body">
                                    {/* <div className="h4 mt-0 title">About</div> */}
                                    <div className="about-me-block pb-2">
                                        {Data.my.about}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="card-body">
                                    <div className="h4 mt-0 title">Basic Information</div>
                                    <div className="row mt-3">
                                        <div className="col-sm-4">
                                            <strong >Github:</strong>
                                        </div>
                                        <div className="col-sm-8">
                                            <a href={Data.my.github} target="_blank" rel="noopener noreferrer" className="text-muted">
                                                {Data.my.github}
                                            </a>
                                        </div>
                                    </div>
                                    { !Data.my.hidePhone && 
                                    <div className="row mt-3">
                                        <div className="col-sm-4">
                                            <strong className="text-uppercase">Phone:</strong>
                                        </div>
                                        <div className="col-sm-8 text-muted">{Data.my.phone}</div>
                                    </div>
                                    }
                                    <div className="row mt-3">
                                        <div className="col-sm-4">
                                            <strong>Email:</strong>
                                        </div>
                                        <div className="col-sm-8">
                                            <a href={'mailto:'+Data.my.email} data-type="mail" className="text-muted" target="_blank">
                                                {Data.my.email}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-sm-4">
                                            <strong>Address:</strong>
                                        </div>
                                        <div className="col-sm-8 text-muted">{Data.my.address}</div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-sm-4">
                                            <strong>University:</strong>
                                        </div>
                                        <div className="col-sm-8 text-muted">{Data.my.university}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About;