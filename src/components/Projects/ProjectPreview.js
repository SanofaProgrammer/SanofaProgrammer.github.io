import React, { Suspense } from 'react';
import { useImage } from 'react-image';
import ImageErrorBoundary from '../ImageErrorBoundary.js';
import Loader from '../Loader/Loader.js';

const MyImageComponent = (props) => {
  const {src} = useImage({
    srcList: [props.src],
  });

  return <img className="mx-auto sznThumbnail" src={src} alt="thumbnail"/>
}

const ImageLoader = <div className="mx-auto sznThumbnail"><Loader size="medium"/></div>;

const ErrorImage = <img className="sznImg mx-auto" src={process.env.PUBLIC_URL + '/assets/img/image-not-found.png'} alt="404"/>;

const ProjectPreview = (props) => {
    return (
        <React.Fragment>
            <div className="col-md-6 col-lg-3 py-1">
                <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <a href="/#" onClick={(e)=> {
                        e.preventDefault();
                        props.projectOnClickHandler(props.project);
                    }}>
                        <figure className="cc-effect">
                            <ImageErrorBoundary fallback={ErrorImage}>
                                <Suspense fallback={ImageLoader}>
                                    <MyImageComponent src={props.project.thumbnail}/>
                                </Suspense>
                            </ImageErrorBoundary>
                            <figcaption>
                                <div>
                                    <div className="h4">&nbsp;{props.project.title} &nbsp;</div>
                                    <p>See Details</p>
                                </div>
                            </figcaption>
                        </figure>
                    </a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProjectPreview;