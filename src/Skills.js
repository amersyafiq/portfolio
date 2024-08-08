import React from 'react'
import './assets/css/skills.css'
import java_logo from './assets/img/java_logo.webp'
import c_logo from './assets/img/c_logo.png'
import python_logo from './assets/img/python_logo.png'
import html_logo from './assets/img/html_logo.png'
import css_logo from './assets/img/css_logo.png'
import js_logo from './assets/img/js_logo.svg'
import jquery_logo from './assets/img/jquery_logo.svg'
import php_logo from './assets/img/php_logo.png'
import react_logo from './assets/img/react_logo.svg'
import bootstrap_logo from './assets/img/bootstrap_logo.svg'
import mysql_logo from './assets/img/mysql_logo.png'
import photoshop_logo from './assets/img/photoshop_logo.png'
import premiere_logo from './assets/img/premiere_logo.png'
import blender_logo from './assets/img/blender_logo.png'
import figma_logo from './assets/img/figma_logo.webp'

const Skills = () => {
    const progLang = [
        {
            logo: java_logo,
            name: "Java"
        },
        {
            logo: c_logo,
            name: "C/C++"
        },
        {
            logo: python_logo,
            name: "Python"
        }
    ];

    const webDev = [
        {
            logo: html_logo,
            name: "HTML"
        },
        {
            logo: css_logo,
            name: "CSS"
        },
        {
            logo: js_logo,
            name: "JavaScript"
        },
        {
            logo: jquery_logo,
            name: "jQuery"
        },
        {
            logo: php_logo,
            name: "PHP"
        },
        {
            logo: react_logo,
            name: "React.js"
        },
        {
            logo: bootstrap_logo,
            name: "Bootstrap"
        },
        {
            logo: mysql_logo,
            name: "MySQL"
        }
    ];

    const multimedia = [
        {
            logo: photoshop_logo,
            name: "Photoshop"
        },
        {
            logo: premiere_logo,
            name: "Premiere Pro"
        },
        {
            logo: blender_logo,
            name: "Blender"
        },
        {
            logo: figma_logo,
            name: "Figma"
        } 
    ];

  return (
    <section className="skills gap-4">
        <div className="skills-container">
            <h5>PROGRAMMING LANGUAGE</h5>
            <div className="skills-items-container gap-2">
                {
                    progLang.map((prog)=>{
                        return (
                            <div className="skills-items gap-2">
                                <img src={prog.logo} alt="" />
                                <p className="skills-items-name m-0">
                                    {prog.name}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className="skills-container">
            <h5>WEB DEVELOPMENT</h5>
            <div className="skills-items-container gap-2">
                {
                    webDev.map((web)=>{
                        return (
                            <div className="skills-items gap-2">
                                <img src={web.logo} alt="" />
                                <p className="skills-items-name m-0">
                                    {web.name}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className="skills-container">
            <h5>MULTIMEDIA TOOLS</h5>
            <div className="skills-items-container gap-2">
                {
                    multimedia.map((media)=>{
                        return (
                            <div className="skills-items gap-2">
                                <img src={media.logo} alt="" />
                                <p className="skills-items-name m-0">
                                    {media.name}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Skills