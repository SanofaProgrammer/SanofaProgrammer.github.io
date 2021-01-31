import React, { useContext, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Profile from './Profile';
import About from './About';
import Skill from './Skill';
import Project from './Project';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';
import { ThemeContext } from '../context/ThemeContext';

const Portfolio = () => {
	const [theme] = useContext(ThemeContext);

	useEffect(() => {
		if (theme !== null) {
			document.documentElement.style.setProperty('--theme-color', theme.hex);
			document.documentElement.style.setProperty('--theme-color-light', `rgba(${ theme.rgb.r }, ${ theme.rgb.g }, ${ theme.rgb.b }, 0.5)`);
			document.documentElement.style.setProperty('--theme-color-lighter', `rgba(${ theme.rgb.r }, ${ theme.rgb.g }, ${ theme.rgb.b }, 0.3)`);
			document.documentElement.style.setProperty('--theme-color-lightest', `rgba(${ theme.rgb.r }, ${ theme.rgb.g }, ${ theme.rgb.b }, 0.1)`);
		}
	}, [theme]);
	
	return (
		<React.Fragment>
			<Header/>
			<div className="page-content">
				<Profile/>
				<About/>
				<Skill/>
				<Project/>
				<Experience/>
				<Education/>
				<Contact/>
			</div>
			<Footer/>
		</React.Fragment>
	);
}

export default Portfolio;
