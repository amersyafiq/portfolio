import React from 'react'
import './assets/css/aboutme.css'

const AboutMe = () => {
  return (
    <section className="aboutme text-white">
        <div className='content-line mb-2'></div>
        <div className='biography'>
            <div className='biography-title mb-3'>
                <div className='biography-logo-container'>
                    <img src="https://img.icons8.com/?size=100&id=22940&format=png&color=FEC361" alt="" />
                </div>
                <h3 className='m-0'>Introduction</h3>
            </div>
            <p className='mb-3'>
                My name is <b>Amer Syafiq bin Abdul Razak</b> and I'm currently in my <b>last semester</b> pursuing Diploma of Computer Science in Universiti Teknologi Mara (UiTM)
                with the CGPA of <b>3.96</b>. My field of interest are <b>3D Modelling</b>, <b>Web Designing</b>, and <b>Web Development</b> particularly
                the <b>front-end</b>. 
            </p>
            <p className='pb-3'>
                This portfolio serves as part of my internship application in which I will be carrying out
                from <b>8 September 2024 – 20 February 2025 (6 months)</b>. I am enthusiastic about gaining hands-on experience
                 and learning from real-world settings at your company.
            </p>
        </div>
        <div className='biography'>
            <div className='biography-title mb-3'>
                <div className='biography-logo-container'>
                    <img src="https://img.icons8.com/?size=100&id=39020&format=png&color=FEC361" alt="" />
                </div>
                <h3 className='m-0'>Education</h3>
            </div>
            <div className='education justify-content-between gap-3'>
                <div className='education-container'>
                    <h6 className='mb-0'>Universiti Teknologi Mara (UiTM)</h6>
                    <p className='mb-0'>Diploma in Computer Science</p>
                    <span className='mb-0'>CGPA: 3.96 (2022 - now)</span>
                </div>
                <div className='education-container'>
                    <h6 className='mb-0'>SMK Seksyen 19</h6>
                    <p className='mb-0'>Sijil Pelajaran Malaysia (SPM) - 8A</p>
                    <span className='mb-0'>Peperiksaan Tingkatan 3 (PT3) - 7A</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutMe