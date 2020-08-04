import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from 'antd'
import {
  GithubFilled,
  LinkedinFilled,
  FilePdfFilled,
  MailFilled
} from '@ant-design/icons'
import resume from '../resources/Resume.pdf'
import useWindowSize from '../utils/useWindowSize'
const { Title, Paragraph, Text } = Typography

const About = () => {
  const [width] = useWindowSize()

  const styling = {
    iconSize: {
      fontSize: width > 500 ? 40 : 35,
      marginTop: width > 1000 ? 150 : 100,
      marginBottom: 50
    }
  }

  const changeOpacity = e => {
    e.target.style.opacity = 0.6
  }
  const defaultOpacity = e => {
    e.target.style.opacity = 1
  }

  return (
    <>
      <Typography style={{ paddingTop: width > 600 ? '5%' : '2%' }}>
        <Title style={{ fontSize: width > 900 ? 60 : 50, marginBottom: 0 }}>
          Dustin Irving
        </Title>
        <Title
          style={{
            fontSize: width > 900 ? 38 : 32,
            marginTop: 0,
            marginBottom: 5,
            color: 'grey'
          }}
        >
          Full-Stack Web Developer
        </Title>
        <Paragraph style={{ fontSize: 18 }}>
          Ottawa, ON | 613-292-4533 | dustin.irving@gmail.com
        </Paragraph>
        <Paragraph
          style={{
            fontSize: width > 900 ? 18 : 16,
            textAlign: 'left',
            marginTop: '50px'
          }}
        >
          Welcome to my portfolio! I'm Dustin, a web developer with a
          certificate in Web Development from Carleton University's Coding
          Bootcamp and a Bachelor of Science in Biochemistry from the University
          of Ottawa. I'm knowledgeable in all areas of web development and
          particularly skilled with the MERN stack. I enjoy creating full-stack,
          user friendly applications with a minimalist user interface. My most
          recent project is vogi, an application that is designed to bring
          volunteers and organizations together to work on projects to mutually
          benefit. Check out my work below!
        </Paragraph>
        <div className='icons-list' style={styling.iconSize}>
          <a target='_blank' href='https://www.github.com/dustinirving'>
            <GithubFilled
              onMouseOver={changeOpacity}
              onMouseOut={defaultOpacity}
              style={{ color: 'black', marginRight: '40px' }}
              title='Github'
            />
          </a>
          <a target='_blank' href='https://www.linkedin.com/in/dustin-irving'>
            <LinkedinFilled
              onMouseOver={changeOpacity}
              onMouseOut={defaultOpacity}
              style={{ marginRight: '40px', color: '#0077B5' }}
              title='LinkedIn'
            />
          </a>
          <a href={resume} target='_blank' rel='noopener noreferrer'>
            <FilePdfFilled
              onMouseOver={changeOpacity}
              onMouseOut={defaultOpacity}
              style={{ marginRight: '40px', color: '#F40F02' }}
              title='Resume'
            />
          </a>
          <a
            href='mailto:dustin.irving@gmail.com? subject=subject text'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'grey' }}
          >
            <MailFilled
              onMouseOver={changeOpacity}
              onMouseOut={defaultOpacity}
              title='Email'
            />
          </a>
        </div>
      </Typography>
    </>
  )
}

export default About
