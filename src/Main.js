import React from 'react'
import { Container } from 'react-bootstrap'
import profile_image from './assets/img/picture.png'
import Content from './Content'

const Main = ({modalOpen}) => {
  return (
    <section className="main">
            <div>
                <div className='main-top d-flex'>
                    <Container className='h-100 align-content-center'>
                        <h3 className="text-logo mb-0 ms-3">AMER SYAFIQ</h3>
                    </Container>
                    <Container className='h-100 align-content-center'>
                        <h3 className='text-end me-3 text-main mb-0'>PORTFOLIO</h3>
                    </Container>
                </div>
                <div className='main-bottom'>
                    <div className='main-side gap-3'>
                        <div className='img-container'>
                            <img src={profile_image} alt="" />
                        </div>
                        <button onClick={()=>{modalOpen()}} className="resume-button">VIEW RESUME</button>
                        <div className='contact-container'>
                            <div className='contact-divider mt-2'></div>
                            <div className='contact-item gap-2 mb-4'>
                                <div className='contact-item-label'>
                                    <img src="https://img.icons8.com/?size=100&id=12623&format=png&color=FFFFFF" alt="location icon" />
                                </div>
                                <div className='contact-item-content flex-column'>
                                    <h3>EMAIL</h3>
                                    <p className='text-truncate'><a href="mailto: amersyafiq1103@gmail.com">amersyafiq1103@gmail.com</a></p>
                                </div>
                            </div>
                            <div className='contact-item gap-2 mb-4'>
                                <div className='contact-item-label'>
                                    <img src="https://img.icons8.com/?size=100&id=9730&format=png&color=FFFFFF" alt="location icon" />
                                </div>
                                <div className='contact-item-content flex-column'>
                                    <h3>CONTACT</h3>
                                    <p className='text-truncate'>+60 16-930 9302</p>
                                </div>
                            </div>
                            <div className='contact-item gap-2 mb-4'>
                                <div className='contact-item-label'>
                                    <img src="https://img.icons8.com/?size=100&id=87941&format=png&color=FFFFFF" alt="location icon" />
                                </div>
                                <div className='contact-item-content flex-column'>
                                    <h3>BIRTHDAY</h3>
                                    <p className='text-truncate'>11 March 2004</p>
                                </div>
                            </div>
                            <div className='contact-item gap-2 mb-4'>
                                <div className='contact-item-label'>
                                    <img src="https://img.icons8.com/?size=100&id=7880&format=png&color=FFFFFF" alt="location icon" />
                                </div>
                                <div className='contact-item-content flex-column'>
                                    <h3>LOCATION</h3>
                                    <p>Shah Alam, Selangor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main-content-container ps-4 pt-4'>
                        <Content />
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Main