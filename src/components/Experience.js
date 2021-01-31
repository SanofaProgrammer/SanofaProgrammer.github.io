import React from 'react';
import Data from './Data';

const Experience = () => {
    const experiences = Data.experiences;

    const populateExperiences = () => {
        return experiences.map((experience, index) => (
            <li key={index}>
                <div className={(index % 2 === 0) ? 'direction-r' : 'direction-l'}>
                    <div className="flag-wrapper">
                        <span className="flag">
                            <div className="text-center">
                                {experience.company}
                            </div>
                        </span>
                        <span className="time-wrapper">
                            <span className="time">{experience.from} - {experience.to}</span>
                        </span>
                    </div>
                    <div className="desc">
                        <div className="timeline-title category">{experience.position}</div>
                        <div>
                            <ul className="tasks text-muted" dir={(index % 2 === 0) ? 'lrl' : 'rtl'}>
                                { experience.responsibilities.map((responsibility, index2) => (
                                    <li key={index2}>{responsibility}</li>
                                )) }
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
        ));
    }

    return (
        <React.Fragment>
            <div className="section" id="experience">
                <div className="container cc-experience">
                    <div className="h4 text-center mb-4 title">Work Experience</div>
                    <div className="text-center mb-4 category" id="total-experience"></div>
                    <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <div className="card-body">
                            <ul className="timeline">
                                {populateExperiences()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Experience;