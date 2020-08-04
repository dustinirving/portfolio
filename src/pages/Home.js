import React from 'react'
import Sidebar from '../components/Sidebar'
import About from '../components/About'
import Education from '../components/Education'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import { Layout } from 'antd'
import useWindowSize from '../utils/useWindowSize'
const { Content } = Layout

const Home = () => {
  const [width] = useWindowSize()
  return (
    <>
      <Layout style={{ height: '100vh' }}>
        <Sidebar />
        <Content
          style={{
            paddingLeft: width > 600 ? '5%' : '4%',
            paddingRight: width > 600 ? '5%' : '4%',
            backgroundColor: '#F0F2F5',
            textAlign: 'center'
          }}
        >
          <div id='about' style={{ minHeight: '100vh' }}>
            <About />
          </div>
          <div id='projects' style={{ minHeight: '100vh' }}>
            <Projects />
          </div>
          <div id='skills' style={{ minHeight: '100vh' }}>
            <Skills />
          </div>
          <div
            id='education'
            style={{
              minHeight: '100vh',
              paddingTop: '10vh',
              marginTop: '10vh'
            }}
          >
            <Education />
          </div>
          <div id='contact' style={{ minHeight: '100vh', paddingTop: '20vh' }}>
            <Contact />
          </div>
        </Content>
      </Layout>
    </>
  )
}

export default Home
