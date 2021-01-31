import React from 'react';
import ReactiveButton from 'reactive-button';
import Data from './Data';
import {ImFilePdf} from 'react-icons/im';
import { IconContext } from 'react-icons';
import { FaEnvelope, FaFileAlt, FaPaperPlane, FaUserCircle } from 'react-icons/fa';

const Contact = () => {
    return (
        <React.Fragment>
            <div className="section" id="contact">
                <div className="cc-contact-information" style={{ backgroundImage: "url('assets/img/footer-image.png')" }}>
                    <div className="container">
                        <div className="cc-contact">
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="card mb-0" data-aos="zoom-in">
                                        <div className="h4 text-center title">Contact Me</div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="card-body">
                                                    <form action={Data.my.formspree} id="contact-me-form" method="POST">
                                                        <div className="p pb-3"><strong>Send Me A Message</strong></div>
                                                        <div className="row mb-3">
                                                            <div className="col">
                                                                <div className="input-group">
                                                                    <span className="input-group-addon text-primary center-this">
                                                                        <FaUserCircle/>
                                                                    </span>
                                                                    <input className="form-control" type="text" name="name" placeholder="Name"
                                                                        required="required" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-3">
                                                            <div className="col">
                                                                <div className="input-group">
                                                                    <span className="input-group-addon text-primary center-this">
                                                                        <FaFileAlt/>
                                                                    </span>
                                                                    <input className="form-control" type="text" name="Subject" placeholder="Subject"
                                                                        required="required" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-3">
                                                            <div className="col">
                                                                <div className="input-group">
                                                                    <span className="input-group-addon text-primary center-this">
                                                                        <FaEnvelope/>
                                                                    </span>
                                                                    <input className="form-control" type="email" name="_replyto" placeholder="E-mail"
                                                                        required="required" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-3">
                                                            <div className="col">
                                                                <div className="form-group">
                                                                    <textarea className="form-control" name="message" placeholder="Your Message"
                                                                        required="required"></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col">
                                                                <ReactiveButton
                                                                    type="submit"
                                                                    idleText={<React.Fragment><FaPaperPlane/> Send</React.Fragment>}
                                                                    style={{fontSize: '13px'}}
                                                                />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="card-body">
                                                    <p className="mb-0"><strong>Address</strong></p>
                                                    <p className="pb-2 text-muted">{Data.my.address}</p>
                                                    {!Data.my.hidePhone && 
                                                    <React.Fragment>
                                                        <p className="mb-0"><strong>Phone</strong></p>
                                                        <p className="pb-2 text-muted">{Data.my.phone}</p>
                                                    </React.Fragment>
                                                    }
                                                    <p className="mb-0"><strong>Email</strong></p>
                                                    <p><a href={'mailto:'+Data.my.email} target="_blank" data-type="mail" className="text-muted">{Data.my.email}</a></p>
                                                    {!Data.my.hideCv && 
                                                    <React.Fragment>
                                                        <p className="mb-0"><strong>CV</strong></p>
                                                        <div>
                                                            <a href={Data.my.cv} className="text-muted"
                                                                target="_blank" rel="noopener noreferrer">
                                                                <IconContext.Provider value={{ size: '1.5rem'}}>
                                                                    <ImFilePdf/>
                                                                </IconContext.Provider>
                                                            </a>
                                                        </div>
                                                    </React.Fragment>
                                                    }
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Contact;