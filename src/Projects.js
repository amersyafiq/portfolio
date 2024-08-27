import React from 'react'
import './assets/css/projects.css'
import { useState } from 'react'
import { Carousel, Container} from 'react-bootstrap'
import Masonry from 'react-masonry-css'
import bg_image1 from './assets/img/sys_img1.png'
import bg_image2 from './assets/img/sys_img2.jpg'
import bg_image3 from './assets/img/dr_azri_web.png'
import media_img1 from './assets/img/ENT300_IMG1.png'
import media_img2 from './assets/img/food4u.png'
import media_img3 from './assets/img/ENT300_IMG16.png'
import media_img4 from './assets/img/plateplanner.png'
import media_img5 from './assets/img/ENT300_IMG5.png'
import media_img6 from './assets/img/corporate.png'


const Projects = () => {
    const [type, setType] = useState('system');

    const systemData = [
        {
            bgImage: bg_image3,
            figmaURL: "https://www.figma.com/design/Z03hRYfiruZRHXG2gESkYq/Untitled?node-id=3-2&t=x1dJY4iZxZuLF3r5-1",
            title: "Dr Azri Perfume Website Prototyping",
            technology: [
                "Figma", "Blender"
            ],
            desc: "Prototype of Dr. Azri Perfume website UI/UX in both desktop and mobile version. Process begins with low-fidelity wireframing and then proceed to the prototype."
        },
        {
            bgImage: bg_image1,
            demoURL: "https://thefood4uproject.000webhostapp.com/index.php",
            gitURL: "https://github.com/amersyafiq/food4u-food-bank-system",
            title: "Food4U Food Bank System",
            technology: [
                "HTML", "CSS", "jQuery", "PHP", "PHPMailer"
            ],
            desc: "Web application that allows users to volunteer and donate to charity events. Completed with admin dashboard that allows full control of the system."
        },
        {
            bgImage: bg_image2,
            demoURL: "https://amersyafiq.vercel.app",
            gitURL: "https://github.com/amersyafiq/portfolio",
            title: "Internship Application Portfolio",
            technology: [
                "React.js", "Bootstrap", "Netlify"
            ],
            desc: "Web application showcasing a personal portfolio for internship applications. Built with React.js, Bootstrap, and deployed on Netlify."
        }
    ];

    const multimediaData = [
        {
            mediaImg: media_img1,
            tags: [
                "Blender"
            ],
            title: "Dr. Azri Perfume Marketing Material #1"
        },
        {
            mediaImg: media_img2,
            tags: [
                "Figma"
            ],
            title: "Food4U Food Bank System UI Prototype"
        },
        {
            mediaImg: media_img4,
            tags: [
                "Figma"
            ],
            title: "Food Planner Mobile App Prototype"
        },
        {
            mediaImg: media_img3,
            tags: [
                "Blender", "Photoshop"
            ],
            title: "Dr. Azri Perfume Marketing Material #2"
        },
        {
            mediaImg: media_img6,
            tags: [
                "Animate", "Blender"
            ],
            title: "Corporate Website Prototype"
        },
        {
            mediaImg: media_img5,
            tags: [
                "Blender"
            ],
            title: "Dr. Azri Perfume Marketing Material #3"
        }
    ];

    const handleType = (selectedType) => {
        setType(selectedType);
    }

  return (
    <section className="projects">
        <ul className='projects-type-container'>
            <li onClick={()=>{handleType('system')}} className="projects-type me-2 system">
                <a className='me-3'>SYSTEM DEVELOPMENT</a>
            </li>
            <li onClick={()=>{handleType('multimedia')}} className="projects-type multimedia">
                <a>MULTIMEDIA</a>
            </li>      
            <div className={type==='system' ? 'projects-type-highlight' : 'projects-type-highlight highlight-multimedia'} />
        </ul>
        {   type==='system' &&
            <Carousel>
                {
                    systemData.map((system)=>{
                        return (
                            <Carousel.Item>
                                <div className='projects-item-container'>
                                    <div className='projects-img-container'>
                                        <img src={system.bgImage} className='imgCar' alt="" />
                                        <div className='projects-item-buttons d-flex gap-2 ms-3 mb-1'>
                                            { system.demoURL && <a href={system.demoURL} target="_blank" className="btn btn-primary">DEMO</a> }
                                            { system.gitURL && <a href={system.gitURL} target="_blank" className="btn btn-secondary">GITHUB</a> }
                                            { system.figmaURL && <a href={system.figmaURL} target="_blank" className="btn btn-primary">FIGMA</a> }
                                        </div>
                                    </div>
                                    <div className='projects-item-caption gap-1 flex-column justify-content-top h-100'>
                                        <div className='d-flex'>
                                            <h3 className='m-0'>{system.title}</h3>
                                            <div className="projects-item-technology">
                                                {
                                                    system.technology.map((tech)=>{
                                                        return (
                                                            <p>{tech}</p>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <p className='m-0'>{system.desc}</p>
                                    </div>
                                </div>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        }
        {
            type==='multimedia' &&
            <Container className='multimedia-container'>
                <Masonry
                breakpointCols={{default: 2, 800: 1}}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                    {
                        multimediaData.map((media)=>{
                            return (
                                <div>
                                    <div className='projects-img-container'>
                                        <div className='position-relative'>
                                            <img src={media.mediaImg} className='imgMulti' alt="" />
                                            <div className='multimedia-tags d-flex'>
                                                {
                                                    media.tags.map((tag)=>{
                                                        return (
                                                            <p>{tag}</p>
                                                        )
                                                    })
                                                } 
                                            </div>
                                        </div>
                                        <h3 className='multimedia-caption mt-1'>{media.title}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Masonry>
            </Container>
        }
    </section>
  )
}

export default Projects