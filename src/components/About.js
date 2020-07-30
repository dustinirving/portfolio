import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from 'antd'
import {
  GithubFilled,
  LinkedinFilled,
  FilePdfFilled,
  MailFilled
} from '@ant-design/icons'
const { Title, Paragraph, Text } = Typography

const About = () => {
  const styling = {
    iconSize: {
      fontSize: '40px',
      marginTop: '200px',
      marginBottom: '50px'
    }
  }
  return (
    <>
      <Typography style={{ padding: '50px' }}>
        <Title style={{ fontSize: '60px', marginBottom: 0 }}>
          Dustin Irving
        </Title>
        <Title style={{ marginTop: 0, marginBottom: 5, color: 'grey' }}>
          Full-Stack Web Developer
        </Title>
        <Paragraph style={{ fontSize: 18 }}>
          Ottawa, ON | 613-292-4533
        </Paragraph>
        <Paragraph
          style={{ fontSize: '18px', textAlign: 'left', marginTop: '50px' }}
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
            <GithubFilled style={{ paddingRight: '40px', color: 'black' }} />
          </a>
          <a target='_blank' href='https://www.linkedin.com/in/dustin-irving'>
            <LinkedinFilled
              style={{ paddingRight: '40px', color: '#0077B5' }}
            />
          </a>
          <FilePdfFilled style={{ paddingRight: '40px', color: '#F40F02' }} />
          <MailFilled />
        </div>
      </Typography>
    </>
  )
}

export default About
