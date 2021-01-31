import React from 'react';
import { FaBootstrap, FaGitAlt, FaGithub, FaLaravel, FaNode, FaReact, FaVuejs } from 'react-icons/fa';
import { SiCsharp, SiCss3, SiJavascript, SiJquery, SiMysql, SiPhp } from 'react-icons/si';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { RiFacebookCircleFill } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import { ImMail4 } from 'react-icons/im';

const skillIconSize = '4rem';

const my = {
    name: 'MD. Ariful Alam',
    about: <React.Fragment>
            <p className="quote-line">Coder | Dreamer | Maker</p>
            <p className="py-2">Hi, my name is MD. Ariful Alam and I am a Full Stack Engineer from Bangladesh. </p>
            <p>I am a BSc graduate and currently working as a Jr. Full Stack Engineer in a reputed company in Bangladesh. I have a great thirst for learning and believe in continuous improvement. I speak fluently in PHP and JavaScript. </p>
        </React.Fragment>,
    phone: '01761703366',
    email: 'arifulalamszn@gmail.com',
    address: 'Dhaka, Bangladesh',
    university: 'American International University-Bangladesh',
    github: 'https://github.com/arifszn',
    hideCv: false,
    hidePhone: true,
    cv: 'https://drive.google.com/file/d/1MglBXDTqLpamqiEP8BhhNyl4psy8ay8v/view',
    formspree: 'https://formspree.io/arifulalamszn@gmail.com',
    taglines: ['FULL STACK ENGINEER', 'WEB APPLICATION DEVELOPER', 'SOFTWARE ENGINEER']
}

const skills = [
    { 
        title: 'PHP', 
        icon:   <IconContext.Provider value={{ size: skillIconSize, color: "#7377AD"}}>
                    <SiPhp/>
                </IconContext.Provider>
    },
    {
        title: 'Laravel', 
        icon:   <IconContext.Provider value={{ size: skillIconSize, color: "#FF2D20"}}>
                    <FaLaravel/>
                </IconContext.Provider>
    },
    { 
        title: 'JavaScript', 
        icon:   <IconContext.Provider value={{ size: skillIconSize, color: "#E1CC1B"}}>
                    <SiJavascript/>
                </IconContext.Provider>
    },
    {
        title: 'React.js', 
        icon:   <IconContext.Provider value={{ size: skillIconSize, color: "#31B2FB"}}>
                    <FaReact/>
                </IconContext.Provider>
    },
    { 
        title: 'Vue.js', 
        icon:   <IconContext.Provider value={{ size: skillIconSize, color: "#42B983"}}>
                    <FaVuejs/>
                </IconContext.Provider>
    },
    { 
        title: 'Node.js', 
        icon:   <IconContext.Provider value={{ size: skillIconSize, color: "#5C9553"}}>
                    <FaNode/>
                </IconContext.Provider>
    },
    { 
        title: 'jQuery', 
        icon:   <IconContext.Provider value={{ size: skillIconSize, color: "#0769AD"}}>
                    <SiJquery/>
                </IconContext.Provider>
    },
    { 
        title: 'MySQL', 
        icon:   <IconContext.Provider value={{ size: skillIconSize, color: "#4479A1"}}>
                    <SiMysql/>
                </IconContext.Provider>
    },
    { 
        title: 'Git', 
        icon:   <IconContext.Provider value={{ size: skillIconSize, color: "#F44D27"}}>
                    <FaGitAlt/>
                </IconContext.Provider>
    },
    { 
        title: 'CSS', 
        icon:   <IconContext.Provider value={{ size: skillIconSize, color: "#2862E9"}}>
                    <SiCss3/>
                </IconContext.Provider>
    },
    { 
        title: 'Bootstrap', 
        icon:   <IconContext.Provider value={{ size: skillIconSize, color: "#533B78"}}>
                    <FaBootstrap/>
                </IconContext.Provider>
    },
    { 
        title: 'C#', 
        icon:   <IconContext.Provider value={{ size: skillIconSize, color: "#9568CE"}}>
                    <SiCsharp/>
                </IconContext.Provider>
    },
];

const projects = [
    {
        title: 'Salespype',
        thumbnail: process.env.PUBLIC_URL + '/assets/img/projects/salespype/1.png',
        images: [
            process.env.PUBLIC_URL + '/assets/img/projects/salespype/1.png',
            process.env.PUBLIC_URL + '/assets/img/projects/salespype/2.png',
        ],
        skills: ['Laravel', 'React.js', 'Node.js'],
        tags: ['Professional'],
        description: <React.Fragment>Automated Lead Management System.</React.Fragment>,
        links: [
            {
                name: 'Homepage',
                link: 'https://salespype.com/'
            }
        ]
    },
    {
        title: 'PypePro',
        thumbnail: process.env.PUBLIC_URL + '/assets/img/projects/pypepro/1.png',
        images: [
            process.env.PUBLIC_URL + '/assets/img/projects/pypepro/1.png',
            process.env.PUBLIC_URL + '/assets/img/projects/pypepro/2.png',
        ],
        skills: ['Laravel', 'React.js', 'Node.js'],
        tags: ['Professional'],
        description: <React.Fragment>Automated Lead Management System. Pro version of <a href="https://salespype.com/" target="_blank" rel="noopener noreferrer">Salespype</a> crm.</React.Fragment>,
        links: [
            {
                name: 'Homepage',
                link: 'https://pypepro.com/'
            }
        ]
    },
    {
        title: 'PayMoney - Secure Online Payment Gateway',
        thumbnail: process.env.PUBLIC_URL + '/assets/img/projects/paymoney/1.png',
        images: [
            process.env.PUBLIC_URL + '/assets/img/projects/paymoney/2.png',
            process.env.PUBLIC_URL + '/assets/img/projects/paymoney/3.png',
            process.env.PUBLIC_URL + '/assets/img/projects/paymoney/4.png',
        ],
        skills: ['Laravel', 'PHP', 'JavaScript'],
        tags: ['Professional'],
        description: <React.Fragment>PayMoney is an online payment gateway that ensures smooth and secure transaction from the pre-payment to the pay-out process.</React.Fragment>,
        links: [
            {
                name: 'Demo',
                link: 'https://paymoney.techvill.org/'
            },
            {
                name: 'Codecanyon',
                link: 'https://codecanyon.net/item/paymoney-secure-online-payment-gateway/22341650'
            }
        ]
    },
    {
        title: 'vRent - Vacation Rental Marketplace',
        thumbnail: process.env.PUBLIC_URL + '/assets/img/projects/vrent/1.png',
        images: [
            process.env.PUBLIC_URL + '/assets/img/projects/vrent/2.png',
            process.env.PUBLIC_URL + '/assets/img/projects/vrent/3.png',
            process.env.PUBLIC_URL + '/assets/img/projects/vrent/4.png',
        ],
        skills: ['Laravel', 'PHP', 'JavaScript'],
        tags: ['Professional'],
        description: <React.Fragment>vRent is an online vacation rental booking website designed particularly for holiday rentals all over the world.</React.Fragment>,
        links: [
            {
                name: 'Demo',
                link: 'https://vrent.techvill.org/'
            },
            {
                name: 'Codecanyon',
                link: 'https://codecanyon.net/item/vrent-vacation-rental-marketplace/19418596'
            }
        ]
    },
    {
        title: 'goBilling - Invoicing, Billing & Accounting System',
        thumbnail: process.env.PUBLIC_URL + '/assets/img/projects/gobilling/1.png',
        images: [
            process.env.PUBLIC_URL + '/assets/img/projects/gobilling/1.png',
            process.env.PUBLIC_URL + '/assets/img/projects/gobilling/2.png',
        ],
        skills: ['Laravel', 'PHP', 'JavaScript'],
        tags: ['Professional'],
        description: <React.Fragment>goBilling makes the process of managing Invoices, Bank Accounts for business much easier.</React.Fragment>,
        links: [
            {
                name: 'Codecanyon',
                link: 'https://codecanyon.net/item/gobilling-invoicing-billing-accounting-system/19642467'
            }
        ]
    },
    {
        title: 'PayMoney - Mobile App',
        thumbnail: process.env.PUBLIC_URL + '/assets/img/projects/paymoney_mobile/1.png',
        images: [
            process.env.PUBLIC_URL + '/assets/img/projects/paymoney_mobile/1.png',
            process.env.PUBLIC_URL + '/assets/img/projects/paymoney_mobile/2.png',
        ],
        skills: ['Cordova', 'JavaScript'],
        tags: ['Professional'],
        description: <React.Fragment>PayMoney Mobile APP is a simple mobile application for sending money quickly between friends and family. It is the Android version of PayMoney – Secure Online payment gateway.</React.Fragment>,
        links: [
            {
                name: 'APK Demo',
                link: 'https://drive.google.com/file/d/1tWqZzSZMJvRk5noCc81ieaY7EPjE7JGF/view'
            },
            {
                name: 'Codecanyon',
                link: 'https://codecanyon.net/item/paymoney-mobile-app/22707492'
            }
        ]
    },
    {
        title: 'Reactive Button',
        thumbnail: process.env.PUBLIC_URL + '/assets/img/projects/reactive_button/1.png',
        images: [
            process.env.PUBLIC_URL + '/assets/img/projects/reactive_button/1.png',
            process.env.PUBLIC_URL + '/assets/img/projects/reactive_button/2.png',
            process.env.PUBLIC_URL + '/assets/img/projects/reactive_button/3.png',
        ],
        skills: ['React.js'],
        tags: ['Personal', 'Packages'],
        description: <React.Fragment>A React Button component that thinks like React. It is a beautiful component to replace the traditional boring buttons. Comes with customization on top. The goal is to let the users visualize what is happening after a button click.</React.Fragment>,
        links: [
            {
                name: 'Github',
                link: 'https://github.com/arifszn/reactive-button'
            },
            {
                name: 'Docs',
                link: 'https://arifszn.github.io/reactive-button'
            },
            {
                name: 'NPM',
                link: 'https://www.npmjs.com/package/reactive-button'
            }
        ]
    },
    {
        title: 'Reddit Image Fetcher',
        thumbnail: process.env.PUBLIC_URL + '/assets/img/projects/reddit_image_fetcher/1.png',
        images: [
            process.env.PUBLIC_URL + '/assets/img/projects/reddit_image_fetcher/1.png',
            process.env.PUBLIC_URL + '/assets/img/projects/reddit_image_fetcher/2.png',
        ],
        skills: ['JavaScript'],
        tags: ['Personal', 'Packages'],
        description: <React.Fragment>A JavaScript package for fetching reddit images, memes, wallpapers and more. PHP version is available <a href="https://github.com/arifszn/reddit-image-fetcher-php" target="_blank" rel="noopener noreferrer">here</a>.</React.Fragment>,
        links: [
            {
                name: 'Github',
                link: 'https://github.com/arifszn/reddit-image-fetcher'
            },
            {
                name: 'Docs',
                link: 'https://arifszn.github.io/reddit-image-fetcher'
            },
            {
                name: 'NPM',
                link: 'https://www.npmjs.com/package/reddit-image-fetcher'
            }
        ]
    },
    {
        title: 'Reddit Image Fetcher(PHP)',
        thumbnail: process.env.PUBLIC_URL + '/assets/img/projects/reddit_image_fetcher_php/1.png',
        images: [
            process.env.PUBLIC_URL + '/assets/img/projects/reddit_image_fetcher_php/1.png',
            process.env.PUBLIC_URL + '/assets/img/projects/reddit_image_fetcher_php/2.png',
        ],
        skills: ['PHP'],
        tags: ['Personal', 'Packages'],
        description: <React.Fragment>A PHP package for fetching reddit images, memes, wallpapers and more. JavaScript version is available <a href="https://github.com/arifszn/reddit-image-fetcher" target="_blank" rel="noopener noreferrer">here</a>.</React.Fragment>,
        links: [
            {
                name: 'Github',
                link: 'https://github.com/arifszn/reddit-image-fetcher-php'
            },
            {
                name: 'Docs',
                link: 'https://arifszn.github.io/reddit-image-fetcher-php'
            },
            {
                name: 'Composer',
                link: 'https://packagist.org/packages/arifszn/reddit-image-fetcher'
            }
        ]
    },
    {
        title: 'memeDB',
        thumbnail: process.env.PUBLIC_URL + '/assets/img/projects/memedb/1.png',
        images: [
            process.env.PUBLIC_URL + '/assets/img/projects/memedb/1.png',
            process.env.PUBLIC_URL + '/assets/img/projects/memedb/2.png',
            process.env.PUBLIC_URL + '/assets/img/projects/memedb/3.png',
        ],
        skills: ['React.js'],
        tags: ['Personal'],
        description: <React.Fragment>Auto fetched memes and wallpapers viewer. The images are scarped from reddit. Built using <a href="https://github.com/arifszn/reddit-image-fetcher" target="_blank" rel="noopener noreferrer">Reddit Image Fetcher</a> which is maintained by me.</React.Fragment>,
        links: [
            {
                name: 'Site',
                link: 'https://memedb.netlify.app/'
            },
            {
                name: 'Github',
                link: 'https://github.com/arifszn/memeDB'
            },
        ]
    },
    {
        title: 'React Laravel',
        thumbnail: process.env.PUBLIC_URL + '/assets/img/projects/react_laravel/1.png',
        images: [
            process.env.PUBLIC_URL + '/assets/img/projects/react_laravel/1.png',
            process.env.PUBLIC_URL + '/assets/img/projects/react_laravel/2.png',
            process.env.PUBLIC_URL + '/assets/img/projects/react_laravel/3.png',
        ],
        skills: ['Laravel 7.5.2', 'React 16.13.1', 'Redux 7.2', 'React Router 5.1.2'],
        tags: ['Personal'],
        description: <React.Fragment>A crud based Laravel app to learn how to integrate React and other important React features in Laravel.</React.Fragment>,
        links: [
            {
                name: 'Demo',
                link: 'https://szn-react-laravel.herokuapp.com'
            },
            {
                name: 'Github',
                link: 'https://github.com/arifszn/react-laravel'
            }
        ]
    },
    {
        title: 'vMovie',
        thumbnail: process.env.PUBLIC_URL + '/assets/img/projects/vmovie/1.png',
        images: [
            process.env.PUBLIC_URL + '/assets/img/projects/vmovie/1.png',
            process.env.PUBLIC_URL + '/assets/img/projects/vmovie/2.png',
        ],
        skills: ['Vue.js', 'Vuetify', 'Vuex'],
        tags: ['Personal'],
        description: <React.Fragment>A movie info website made with Vue.js, Vuetify, Vuex. This site uses TMDB api for movie database.</React.Fragment>,
        links: [
            {
                name: 'Demo',
                link: 'https://vmovie.surge.sh/'
            },
            {
                name: 'Github',
                link: 'https://github.com/arifszn/vMovie'
            }
        ]
    },
    {
        title: 'Email Scraper',
        thumbnail: process.env.PUBLIC_URL + '/assets/img/projects/email_scraper/1.png',
        images: [
            process.env.PUBLIC_URL + '/assets/img/projects/email_scraper/1.png',
            process.env.PUBLIC_URL + '/assets/img/projects/email_scraper/2.png',
        ],
        skills: ['Node.js', 'React.js'],
        tags: ['Personal'],
        description: <React.Fragment>An email scraper made with Node and React.</React.Fragment>,
        links: [
            {
                name: 'Site',
                link: 'https://emailscraper.glitch.me'
            },
            {
                name: 'Github',
                link: 'https://github.com/arifszn/email-scraper'
            }
        ]
    },
    {
        title: 'Project Todo',
        thumbnail: process.env.PUBLIC_URL + '/assets/img/projects/project_todo/1.png',
        images: [
            process.env.PUBLIC_URL + '/assets/img/projects/project_todo/1.png',
            process.env.PUBLIC_URL + '/assets/img/projects/project_todo/2.png',
            process.env.PUBLIC_URL + '/assets/img/projects/project_todo/3.png',
        ],
        skills: ['Vue.js', 'Vuetify', 'Firebase'],
        tags: ['Personal'],
        description: <React.Fragment>A project todo list web app made with Vue js, Vuetify and Firebase.</React.Fragment>,
        links: [
            {
                name: 'Demo',
                link: 'https://project-todo.surge.sh/'
            },
            {
                name: 'Github',
                link: 'https://github.com/arifszn/project-todo'
            }
        ]
    },
    {
        title: 'Laravel E-commerce',
        thumbnail: process.env.PUBLIC_URL + '/assets/img/projects/laravel_ecommerce/1.png',
        images: [
            process.env.PUBLIC_URL + '/assets/img/projects/laravel_ecommerce/2.png',
            process.env.PUBLIC_URL + '/assets/img/projects/laravel_ecommerce/3.png',
            process.env.PUBLIC_URL + '/assets/img/projects/laravel_ecommerce/4.png'
        ],
        skills: ['Laravel 5.6', 'PHP', 'JavaScript'],
        tags: ['Personal'],
        description: <React.Fragment>An E-commerce website made with Laravel framework. It was created for varsity course project.</React.Fragment>,
        links: [
            {
                name: 'Demo',
                link: 'https://laravel-ecommerce-eshop.herokuapp.com/'
            },
            {
                name: 'GitHub',
                link: 'https://github.com/arifszn/laravel-ecommerce'
            }
        ]
    },
];

const experiences = [
    { 
        company: 'Orangetoolz - My Offer 360 Degree',
        from: 'July 2019',
        to: 'Present',
        position: 'Jr. Full Stack Engineer',
        responsibilities: [
            'Development using Laravel and React',
            'Developing RESTful API',
            'Database administration',
            'Redesigning sections of the system',
            'Maintaining multiple CRM Systems',
            'Automating CRM system'
        ]
    },
    { 
        company: 'Techvillage',
        from: 'January 2019',
        to: ' June 2019',
        position: 'Jr. Software Engineer',
        responsibilities: [
            'Payment gateway integration',
            'Server Administration',
            'Development of new features',
            'Api creation'
        ]
    }
];

const educations = [
    { 
        institution: 'American International University-Bangladesh',
        from: '2015',
        to: '2019',
        degree: 'Bachelor of Science',
        infos: [
            {
                name: 'CGPA',
                value: '3.75 out of 4.00' 
            },
            {
                name: 'Department',
                value: 'Computer Science & Engineering' 
            },
            {
                name: 'Thesis',
                value: 'Measurement of Attention on Web Content And Design: An Eye Tracking Approach' 
            }
        ]
    },
    { 
        institution: 'Cantonment College, Jessore',
        from: '2012',
        to: '2014',
        degree: 'Higher Secondary Certificate (HSC)',
        infos: [
            {
                name: 'CGPA',
                value: '4.80 out of 5.00' 
            },
            {
                name: 'Group',
                value: 'Science' 
            }
        ]
    },
    { 
        institution: 'Chowgacha Shahadat Pilot High School',
        from: '2007',
        to: '2012',
        degree: 'Secondary School Certificate (SSC)',
        infos: [
            {
                name: 'CGPA',
                value: '5.00 out of 5.00' 
            },
            {
                name: 'Group',
                value: 'Science' 
            }
        ]
    }
];

const socialLinks =[
    {
        title: 'linkedin',
        icon:   <IconContext.Provider value={{ size: '1.9rem'}}>
                    <TiSocialLinkedinCircular/>
                </IconContext.Provider>,
        link: 'https://www.linkedin.com/in/ariful-alam'
    },
    {
        title: 'github',
        icon:   <IconContext.Provider value={{ size: '1.4rem'}}>
                    <FaGithub/>
                </IconContext.Provider>,
        link: my.github
    },
    {
        title: 'facebook',
        icon:   <IconContext.Provider value={{ size: '1.5rem'}}>
                    <RiFacebookCircleFill/>
                </IconContext.Provider>,
        link: 'https://www.facebook.com/swozon'
    },
    {
        title: 'email',
        icon:   <IconContext.Provider value={{ size: '1.4rem'}}>
                    <ImMail4/>
                </IconContext.Provider>,
        link: `mailto:${my.email}`
    }
];


const Data = {
    my: my,
    skills     : skills,
    projects   : projects,
    experiences: experiences,
    educations : educations,
    socialLinks : socialLinks
}

export default Data;