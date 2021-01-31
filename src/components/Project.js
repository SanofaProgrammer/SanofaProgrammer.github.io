import React, { useState } from 'react';
import ProjectPreview from './Projects/ProjectPreview';
import { If } from 'react-if';
import ProjectDetailsPopup from './Projects/ProjectDetailsPopup';
import Data from './Data';
import ReactiveButton from 'reactive-button';
import { BsArrowBarRight } from 'react-icons/bs';
import { FaFolder, FaFolderOpen } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Project = () => {
    const [projectDetailsModal, setProjectDetailsModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    
    var hashTag = 'All';
    
    if (window.location.hash.substr(1) === 'projects#all') {
        hashTag = 'All';
    } else if (window.location.hash.substr(1) === 'projects#packages') {
        hashTag = 'Packages';
    } else if (window.location.hash.substr(1) === 'projects#professional') {
        hashTag = 'Professional';
    }

    const [selectedTag, setSelectedTag] = useState(hashTag);

    const projects = Data.projects;

    const itemPerPage = 12;
    const [visible, setVisible] = useState(itemPerPage);

    const loadMore = () => {
        console.log(window.location.hash.substr(1));
        setVisible(visible + itemPerPage);
    }

    const projectOnClickHandler = (project) => {
        setSelectedProject(project);
        setProjectDetailsModal(true);
    }

    const closeProjectDetailsPopup = () => {
        setSelectedProject(null);
        setProjectDetailsModal(false);
    }

    const populateProjectPreview = () => {
        return projects.filter(project => selectedTag === 'All' || (selectedTag !== 'All' && project.tags.includes(selectedTag))).slice(0, visible).map((project, index) => (
            <React.Fragment key={index}>
                <ProjectPreview project={project} projectOnClickHandler={projectOnClickHandler}/>
            </React.Fragment>
        ));
    }

    const filterOnClickHandler = (tag) => {
        setSelectedTag(tag);
    }

    const iconFolder = <IconContext.Provider value={{ size: '13px'}}>
            <FaFolder style={{verticalAlign: 'sub'}}/>
        </IconContext.Provider>
        

    const iconFolderOpen = <IconContext.Provider value={{ size: '13px'}}>
            <FaFolderOpen style={{verticalAlign: 'sub'}}/>
        </IconContext.Provider>

    return (
        <React.Fragment>
            <div className="section" id="projects">
                <div className="container">
                    <div className="row">
                        <div className="mx-auto col-md-12">
                            <div className="h4 text-center mb-4 title">Projects</div>
                            <div className="nav-align-center project-filter-navbar">
                                <ul className="nav nav-tabs justify-content-center" role="tablist">
                                    <li className="nav-item mx-1 my-2">
                                        <ReactiveButton
                                            width="132px"
                                            size="small"
                                            idleText={<span>{selectedTag === 'All' ? iconFolderOpen : iconFolder}  All</span>}
                                            outline={selectedTag === 'All' ? false : true }
                                            shadow
                                            onClick={() => filterOnClickHandler('All')}
                                            animation={false}
                                        />
                                    </li>
                                    <li className="nav-item mx-1 my-2">
                                        <ReactiveButton
                                            width="132px"
                                            size="small"
                                            idleText={<span>{selectedTag === 'Professional' ? iconFolderOpen : iconFolder} Professional</span>}
                                            outline={selectedTag === 'Professional' ? false : true }
                                            shadow
                                            onClick={() => filterOnClickHandler('Professional')}
                                            animation={false}
                                        />
                                    </li>
                                    <li className="nav-item mx-1 my-2">
                                        <ReactiveButton
                                            width="132px"
                                            size="small"
                                            idleText={<span>{selectedTag === 'Personal' ? iconFolderOpen : iconFolder} Personal</span>}
                                            outline={selectedTag === 'Personal' ? false : true }
                                            shadow
                                            onClick={() => filterOnClickHandler('Personal')}
                                            animation={false}
                                        />
                                    </li>
                                    <li className="nav-item mx-1 my-2">
                                        <ReactiveButton
                                            width="132px"
                                            size="small"
                                            idleText={<span>{selectedTag === 'Packages' ? iconFolderOpen : iconFolder} Packages</span>}
                                            outline={selectedTag === 'Packages' ? false : true }
                                            shadow
                                            onClick={() => filterOnClickHandler('Packages')}
                                            animation={false}
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content gallery mt-5">
                        <div className="tab-pane active">
                            <div className="mx-auto">
                                <div className="row">
                                    {populateProjectPreview()}
                                    <div className={`col-md-12 text-center pt-4 ${projects.filter(project => selectedTag === 'All' || (selectedTag !== 'All' && project.tags.includes(selectedTag))).length <= visible  ? 'd-none' : ''}`}>
                                        <ReactiveButton
                                            idleText={<React.Fragment>Load More <BsArrowBarRight/></React.Fragment>}
                                            onClick={loadMore}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <If condition={projectDetailsModal && selectedProject !== null}>
                <ProjectDetailsPopup
                    project={selectedProject}
                    handleClose={closeProjectDetailsPopup}
                />
            </If>
        </React.Fragment>
    );
}

export default Project;