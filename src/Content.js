import React from 'react'
import { useState } from 'react'
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';

const Content = () => {
    const [select, setSelect] = useState('aboutme');

    const handleSelect = (selection) => { setSelect(selection); }

  return (
    <section className="content h-100">
        <div className="content-title">
            <div onClick={() => {handleSelect('aboutme')}} className={select == 'aboutme' ? 'content-title-container content-title-active' : 'content-title-container'}>
                <h3>ABOUT ME</h3>
            </div>
            <div onClick={() => {handleSelect('skills')}} className={select == 'skills' ? 'content-title-container content-title-active' : 'content-title-container'}>
                <h3>SKILLS</h3>
            </div>
            <div onClick={() => {handleSelect('projects')}} className={select == 'projects' ? 'content-title-container content-title-active' : 'content-title-container'}>
                <h3>PROJECTS</h3>
            </div>
        </div>
        <div className='content-container'>
            {select=='aboutme' && <AboutMe />}
            {select=='skills' && <Skills />}
            {select=='projects' && <Projects />}
        </div>
    </section>
  )
}

export default Content