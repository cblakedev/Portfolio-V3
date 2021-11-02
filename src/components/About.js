import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import profileImg from '../assets/profileImg.jpg';
import { IoMdDownload } from 'react-icons/io';
import resume from '../assets/CBResume.pdf'
import { FaReact } from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { FaBootstrap } from 'react-icons/fa';
import { SiSequelize } from 'react-icons/si';
import { SiPostman } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io'

function About() {

    return (
        <Container>
            <Row className='aboutMeTitleWrapper'>
                <Col className='aboutMeTitle'>
                    <h1>About<span> Me</span></h1>
                </Col>
            </Row>
            <Row>
                <Col className='aboutMeImg'>
                    <img src={profileImg} alt='Im Chris' />
                </Col>
                <Col className='aboutMeInfo'>
                    <h2>Personal Info</h2>
                    <p>Hello! My name is Chris and I enjoy solving problems and creating business solutions in the web.
                        I've always been curious and intrigued on how software can assist us in our daily lives. Technology nowadays is a
                        huge part of our livelihood and as an avid nerd, I want to contribute to make the world
                        a better place, one web app at a time.
                    </p>
                    <a href={resume} download>
                        <span className='resumeDownload'>Download Resume</span>
                        <span className='resumeSvg'><IoMdDownload /></span>
                    </a>
                </Col>
            </Row>
            <Row className='skillsTitleWrapper'>
                <Col className='skillsTitle'>
                    <h2>
                        My Skills
                    </h2>
                </Col>
            </Row>
            <Row>
                <Col md={3} className='skillsList'>
                    <FaReact />
                    <h5>React</h5>
                </Col>
                <Col md={3} className='skillsList'>
                    <IoLogoJavascript />
                    <h5>JavaScript</h5>
                </Col>
                <Col md={3} className='skillsList'>
                    <SiPostgresql />
                    <h5>Postgres</h5>
                </Col>
                <Col md={3} className='skillsList'>
                    <SiTypescript />
                    <h5>TypeScript</h5>
                </Col>
                <Col md={3} className='skillsList'>
                    <FaNodeJs />
                    <h5>Node</h5>
                </Col>
                <Col md={3} className='skillsList'>
                    <SiExpress />
                    <h5>Express</h5>
                </Col>
                <Col md={3} className='skillsList'>
                    <AiFillHtml5 />
                    <h5>HTML</h5>
                </Col>
                <Col md={3} className='skillsList'>
                    <FaCss3Alt />
                    <h5>CSS</h5>
                </Col>
                <Col md={4} className='skillsList'>
                    <FaBootstrap />
                    <h5>Bootstrap</h5>
                </Col>
                <Col md={4} className='skillsList'>
                    <SiSequelize />
                    <h5>Sequelize</h5>
                </Col>
                <Col md={4} className='skillsList'>
                    <SiPostman />
                    <h5>Postman</h5>
                </Col>
            </Row>
        </Container>
    )
}

export default About