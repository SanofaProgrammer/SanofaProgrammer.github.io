import React from 'react';
import './Loader.css';

/**
 * Global Loader indicator
 * 
 * Props definition-
 * className: classes to add
 * align: left|center|right
 * size: small|medium|large|xLarge
 * 
 * @param {*} props 
 */
const Loader = (props) => {
    var align = 'mx-auto text-center';
    if (props.align === 'left') {
        align = 'float-left text-left';
    } else if (props.align === 'center') {
        align = 'mx-auto text-center';
    } else if (props.align === 'right') {
        align = 'float-right text-right';
    }

    var size = '';
    if (props.size === 'small') {
        size = 'la-sm';
    } else if (props.size === 'medium') {
        size = '';
    } else if (props.size === 'large') {
        size = 'la-2x';
    } else if (props.size === 'xLarge') {
        size = 'la-3x';
    }

    return (
        <React.Fragment>
        <div className="loader-component-wrapper row h-100">
            <div className={`col-sm-12 w-100 accentInactiveColor la-line-scale-pulse-out my-auto ${size} ${align} ${props.className ? props.className : ''}`}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        </React.Fragment>
    );
};

export default Loader;