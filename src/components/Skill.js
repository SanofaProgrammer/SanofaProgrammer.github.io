import React from 'react';
import Data from './Data';

const Skill = () => {
    const skills = Data.skills;

    const populateSkills = () => {
        return skills.map((skill, index) => (
            <div className="col-6 col-md-4 col-lg-2" key={index}>
                <div className="card text-center p-2 hover-grow">
                    <div className="skill-icon pt-1">
                        {skill.icon}
                    </div>
                    <div className="card-body p-1">
                        <p className="card-text font-weight-bolder skill-title text-muted">{skill.title}</p>
                    </div>
                </div>
            </div>
        ));
    }

    return (
        <React.Fragment>
            <div className="section" id="skill">
                <div className="container">
                    <div className="h4 text-center mb-4 title">Professional Skills</div>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <div className="card-body">
                            <div className="row justify-content-center">
                                {populateSkills()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </React.Fragment>
    );
}

export default Skill;