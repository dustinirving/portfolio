import React from 'react'
import { Typography } from 'antd'
import {
  GithubFilled,
  LinkedinFilled,
  FilePdfFilled,
  MailFilled
} from '@ant-design/icons'
import resume from '../resources/Resume.pdf'
import useWindowSize from '../utils/useWindowSize'
const { Title, Paragraph } = Typography

const About = () => {
  const [width] = useWindowSize()

  const breakpoints = (xl, lg, md, sm, xs, xxs, xxxs) => {
    if (width > 1200) return xl
    else if (width > 991 && width < 1200) return lg
    else if (width > 767 && width < 992) return md
    else if (width > 575 && width < 768) return sm
    else if (width > 479 && width < 576) return xs
    else if (width > 350 && width < 480) return xxs
    return xxxs
  }

  const styling = {
    title: {
      fontSize: breakpoints(60, 60, 50, 45, 40, 35, 35),
      marginBottom: 0
    },
    subTitle: {
      fontSize: breakpoints(38, 38, 35, 32, 30, 25, 22),
      marginTop: 0,
      marginBottom: 5,
      color: 'grey'
    },
    iconSize: {
      fontSize: breakpoints(40, 40, 40, 40, 35, 32, 25),
      marginTop: breakpoints(175, 100, 100, 90, 75, 60, 0),
      marginBottom: 50
    },
    iconSpace: {
      marginRight: breakpoints(40, 40, 40, 35, 30, 25, 25)
    },
    paragraph: {
      fontSize: breakpoints(18, 18, 17, 16, 15, 15, 14),
      marginTop: breakpoints(50, 50, 50, 50, 50, 30, 10),
      textAlign: 'left'
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
        <Title style={styling.title}>Dustin Irving</Title>
        <Title style={styling.subTitle}>Full-Stack Web Developer</Title>
        <Paragraph style={{ fontSize: width < 480 ? 14 : 18 }}>
          Ottawa, ON | 613-292-4533 | dustin.irving@gmail.com
        </Paragraph>
        <Paragraph style={styling.paragraph}>
          Welcome to my portfolio! I'm Dustin, a web developer with a
          certificate in Web Development from Carleton University's Coding
          Bootcamp and a Bachelor of Science in Biochemistry from the University
          of Ottawa. I'm knowledgeable in all areas of web development and
          particularly skilled with the MERN stack. I enjoy creating full-stack,
          user friendly applications with a minimalist user interface. My most
          recent project is vogi, an application that is designed to bring
          volunteers and organizations together to work on projects and mutually
          benefit. Check out my work below!
        </Paragraph>
        <div className='icons-list' style={styling.iconSize}>
          <a
            target='_blank'
            href='https://www.github.com/dustinirving'
            style={styling.iconSpace}
          >
            <GithubFilled
              onMouseOver={changeOpacity}
              onMouseOut={defaultOpacity}
              style={{ color: 'black' }}
              title='Github'
            />
          </a>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/dustin-irving'
            style={styling.iconSpace}
          >
            <LinkedinFilled
              onMouseOver={changeOpacity}
              onMouseOut={defaultOpacity}
              style={{ color: '#0077B5' }}
              title='LinkedIn'
            />
          </a>
          <a
            href={resume}
            target='_blank'
            rel='noopener noreferrer'
            style={styling.iconSpace}
          >
            <FilePdfFilled
              onMouseOver={changeOpacity}
              onMouseOut={defaultOpacity}
              style={{ color: '#F40F02' }}
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
