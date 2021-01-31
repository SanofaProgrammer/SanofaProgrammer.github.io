import React from 'react';
import Data from './Data';

const Education = () => {
    const educations = Data.educations;

    const populateEducations = () => {
        return educations.map((education, index) => (
            <li key={index}>
                <div className={(index % 2 === 0) ? 'direction-r' : 'direction-l'}>
                    <div className="flag-wrapper">
                        <span className="flag">
                            <div className="text-center">
                                {education.institution}
                            </div>
                        </span>
                        <span className="time-wrapper">
                            <span className="time">{education.from} - {education.to}</span>
                        </span>
                    </div>
                    <div className="desc">
                        <div className="timeline-title category">{education.degree}</div>
                        <div className="text-muted">
                            { education.infos.map((info, index2) => (
                                <p key={index2}><strong>{info.name}: </strong>{info.value}</p>
                            )) }
                        </div>
                    </div>
                </div>
            </li>
        ));
    }

    return (
        <React.Fragment>
            <div className="section" id="education">
                <div className="container cc-education">
                    <div className="h4 text-center mb-4 title">Education</div>
                    <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <div className="card-body">
                            <ul className="timeline">
                                {populateEducations()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Education;