import React from 'react';
import Data from './Data';

const Footer = () => {
  return (
    <React.Fragment>
        <footer className="footer">
            <div className="container text-center">
                {Data.socialLinks.map((socialLink, index) => (
                    <a key={index} className="btn btn-link text-primary-light" target="_blank" href={socialLink.link} rel="noopener noreferrer">
                        {socialLink.icon}
                    </a>
                ))}
            </div>
            <div className="h4 title text-center text-muted">{Data.my.name}</div>
            <div className="text-center text-muted">
                <p>&copy; All rights reserved.</p>
            </div>
        </footer>
    </React.Fragment>
  );
}

export default Footer;
