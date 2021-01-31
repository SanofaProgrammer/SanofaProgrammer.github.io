import React, { Suspense } from 'react';
import { useImage } from 'react-image';
import ReactiveButton from 'reactive-button';
import Data from './Data';
import Typed from 'react-typed';
import ImageErrorBoundary from './ImageErrorBoundary';

const MyImageComponent = (props) => {
  const {src} = useImage({
    srcList: [props.src],
  });

  return <img src={src} alt="MD. Ariful Alam"/>
}

const ImageLoader = <img src={process.env.PUBLIC_URL + '/assets/img/Ariful-Alam-min.jpg'} alt="MD. Ariful Alam" />;

const ErrorImage = <img className="sznImg mx-auto" src={process.env.PUBLIC_URL + '/assets/img/image-not-found.png'} alt="404"/>;

const Profile = () => {
    return (
        <React.Fragment>
            <div className="profile-page">
                <div className="wrapper">
                    <div className="page-header page-header-small" filter-color="theme">
                        <div className="page-header-image" data-parallax="true" style={{ backgroundImage: "url('assets/img/cc-bg-1.jpg')" }}></div>
                        <div className="container">
                            <div className="content-center">
                                <div className="cc-profile-image">
                                    {/* eslint-disable-next-line */}
                                    <a href="#">
                                        <ImageErrorBoundary fallback={ErrorImage}>
                                            <Suspense fallback={ImageLoader}>
                                                <MyImageComponent src={process.env.PUBLIC_URL + '/assets/img/Ariful-Alam.jpg'}/>
                                            </Suspense>
                                        </ImageErrorBoundary>
                                    </a>
                                </div>
                                <div className="h2 title">{Data.my.name}</div>
                                <p className="category text-white">
                                    <Typed
                                        className="font-weight-light"
                                        strings={Data.my.taglines && Data.my.taglines.length ? Data.my.taglines : ['']}
                                        typeSpeed={70}
                                        backSpeed={40}
                                        smartBackspace={true}
                                        loop={true}
                                    />
                                </p>
                                {!Data.my.hideCv && 
                                <div>
                                    <a href={Data.my.cv} target="_blank" data-aos="zoom-in" data-aos-anchor="data-aos-anchor" rel="noopener noreferrer">
                                        <ReactiveButton 
                                            style={{fontSize: '0.8571em'}} 
                                            idleText="Download CV"
                                            className="mt-4"
                                        />
                                    </a>
                                </div>
                                }
                            </div>
                        </div>
                        <div className="section">
                            <div className="container">
                                <div className="button-container">
                                    {Data.socialLinks.map((socialLink, index) => (
                                        <a key={index} className="btn btn-default btn-round btn-lg btn-icon center-this" href={socialLink.link} target="_blank" title={socialLink.title} rel="noopener noreferrer">
                                            {socialLink.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Profile;