import React, { Suspense, useState } from 'react';
import { useImage } from 'react-image';
import { Carousel, Modal } from 'react-bootstrap';
import ReactiveButton from 'reactive-button';
import Loader from '../Loader/Loader';
import { FaChevronRight, FaChevronLeft, FaCaretRight } from 'react-icons/fa';
import ImageErrorBoundary from '../ImageErrorBoundary';

const MyImageComponent = (props) => {
  const {src} = useImage({
    srcList: [props.src],
  });

  return <img src={src} alt="carousel-item"/>
}

const ImageLoader = <div className="project-details-loader"><Loader size="medium"/></div>;

const ErrorImage = <img className="sznImg mx-auto" src={process.env.PUBLIC_URL + '/assets/img/image-not-found.png'} alt="404"/>;

const ProjectDetailsPopup = (props) => {
    const [isOpen, setIsOpen] = useState(true);
    
    const handleClose = () => {
        setIsOpen(false);

        setTimeout(() => {
            props.handleClose();
        }, 500);
    }

    const populateCarouseItem = () => {
        return props.project.images.map((image, index) => (
            <Carousel.Item key={index}>
                <ImageErrorBoundary fallback={ErrorImage}>
                    <Suspense fallback={ImageLoader}>
                        <MyImageComponent src={image}/>
                    </Suspense>
                </ImageErrorBoundary>
            </Carousel.Item>
        ));
    }

    const populateTypes = () => {
        return props.project.tags.map((tag, index) => (
            <span key={index} className="mr-1">
                <ReactiveButton
                    idleText={tag}
                    size="tiny"
                    disabled
                    color="secondary"
                    outline
                    rounded
                    style={{ fontSize: '12px' }}
                />
            </span>
        ));
    }

    const populateSkills = () => {
        return props.project.skills.map((skill, index) => (
            <span key={index} className={"custom-label custom-label-color-"+index}>{skill}</span>
        ));
    }

    const populateLinks = () => {
        return props.project.links.map((link, index, {length}) => (
            <React.Fragment key={index}>
                <a href={link.link} target="_blank" rel="noopener noreferrer">
                    <ReactiveButton
                        outline
                        animation={false}
                        size="small"
                        idleText={link.name}
                    />
                </a>
            </React.Fragment>
        ));
    }

    return (
        <React.Fragment>
            <Modal show={isOpen} onHide={handleClose} className="project-details-popup-wrapper">
                <Modal.Header className="pt-0" closeButton>
                    <Modal.Title className={'mt-3 mb-0 mx-auto text-muted text-center h5'}>{props.project.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <center>
                        <Carousel 
                            nextIcon={<span className="text-muted"><FaChevronRight/></span>} 
                            prevIcon={<span className="text-muted"><FaChevronLeft/></span>}
                        >
                            {populateCarouseItem()}
                        </Carousel>
                        <div className="pt-2">
                            {populateSkills()}
                        </div>
                    </center>
                    <center>
                        <div className="text-left d-flex flex-column pt-2">
                            <div className="project-type-block pb-3">
                                <div className="font-weight-bold pb-1">
                                    <span className="text-muted"><FaCaretRight/></span>Project Type:
                                </div>
                                <div className="text-justify px-2">
                                    <span>{populateTypes()}</span>
                                </div>
                            </div>
                            <div className="pb-3">
                                <div className="font-weight-bold">
                                    <span className="text-muted"><FaCaretRight/></span>Description:
                                </div>
                                <div className="px-2 text-justify">
                                    {props.project.description}
                                </div>
                            </div>
                            <div className="project-link-block">
                                <div className="project-links font-weight-bold text-center">
                                    {populateLinks()}
                                </div>
                            </div>
                        </div>
                    </center>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};

export default ProjectDetailsPopup;