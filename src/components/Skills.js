import React, { useState } from 'react'
import { Typography, Tag, Card, Row, Col, List } from 'antd'
import useWindowSize from '../utils/useWindowSize'
import Mongoose from '../images/mongoose.png'

const { Title, Text } = Typography
const Skills = () => {
  const [width] = useWindowSize()
  const [frontend] = useState([
    {
      skill: 'JavaScript',
      icon: 'devicon-javascript-plain colored'
    },
    {
      skill: 'React',
      icon: 'devicon-react-original colored'
    },
    {
      skill: 'HTML5',
      icon: 'devicon-html5-plain colored'
    },
    {
      skill: 'CSS3',
      icon: 'devicon-css3-plain colored'
    },
    {
      skill: 'Bootstrap',
      icon: 'devicon-bootstrap-plain colored'
    },
    {
      skill: 'Handlebars',
      icon: 'devicon-handlebars-plain colored'
    },
    ,
    {
      skill: 'jQuery',
      icon: 'devicon-jquery-plain colored'
    },
    { skill: 'TypeScript', icon: 'devicon-typescript-plain colored' }
  ])
  const [backend] = useState([
    {
      skill: 'Node.js',
      icon: 'devicon-nodejs-plain colored'
    },
    { skill: 'Express', color: '#303030', icon: 'devicon-express-original' },
    {
      skill: 'MongoDB',
      icon: 'devicon-mongodb-plain colored'
    },
    {
      skill: 'MySQL',
      icon: 'devicon-mysql-plain colored'
    },
    {
      skill: 'Sequelize',
      icon: 'devicon-sequelize-plain colored'
    },
    {
      skill: 'Python',
      icon: 'devicon-python-plain colored'
    },
    { skill: 'Postgres', icon: 'devicon-postgresql-plain colored' },
    { skill: 'NPM', icon: 'devicon-npm-original-wordmark colored' }
  ])
  const [other, setOther] = useState([
    {
      skill: 'Git Version-Control'
    },
    {
      skill: 'REST APIs'
    },
    {
      skill: 'Agile Development'
    },
    {
      skill: 'MVC Framework'
    },
    {
      skill: 'Data Structures and Algorithms'
    },
    {
      skill: 'JEST'
    },
    {
      skill: 'Mobile-First Design'
    },
    {
      skill: 'PWAs'
    },
    {
      skill: 'Travis CI'
    },
    {
      skill: 'Heroku'
    },
    { skill: 'Webpack' },
    { skill: 'Object Oriented Programming' }
  ])
  return (
    <Typography style={{ backgroundColor: '#f0f2f5', marginTop: 150 }}>
      <Title style={{ paddingBottom: '1rem', fontSize: width > 500 ? 38 : 32 }}>
        Technical Skills
      </Title>
      <Row gutter={20}>
        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
          <Card
            title='Frontend'
            bodyStyle={{ border: 'none' }}
            style={{
              backgroundColor: 'white',
              borderColor: 'lightGray',
              borderRadius: '15px'
            }}
            headStyle={{ border: 'none', fontSize: 22 }}
          >
            <Row>
              {frontend.map(item => (
                <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                  <Card bordered={false} style={{ backgroundColor: 'white' }}>
                    <i style={{ fontSize: '30px' }} class={item.icon}></i>
                    <br />
                    <span style={{ fontSize: '15px' }}>{item.skill}</span>
                  </Card>
                </Col>
              ))}
              <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                <Card bordered={false} style={{ backgroundColor: 'white' }}>
                  <svg viewBox='0 0 128 128' style={{ height: '30px' }}>
                    <path fill='none' d='M0 0h128v128H0z'></path>
                    <path
                      d='M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 0 1-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0 0 10 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0 0 26.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 0 1-2.61-6A9.12 9.12 0 0 1 87.37 70h.34a9.15 9.15 0 0 1 1 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 0 1-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0 0 16 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 0 0-17.27-20.85 62 62 0 0 0-34.74-10.59h-2.93a9.21 9.21 0 0 1-8 5.54h-.31a9.13 9.13 0 0 1-.3-18.25h.33a9 9 0 0 1 8 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 0 1 1.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 0 0-9.64 25.25 59.61 59.61 0 0 0 8.47 36.16 2.75 2.75 0 0 1 1.14-.16h.32a9.12 9.12 0 0 1 .33 18.24h-.33a9.16 9.16 0 0 1-9.12-8.79z'
                      fill='#764abc'
                    ></path>
                  </svg>
                  <br />
                  <span style={{ fontSize: '15px' }}>Redux</span>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
          <Card
            title='Backend'
            bodyStyle={{ border: 'none' }}
            style={{
              backgroundColor: 'white',
              borderColor: 'lightGray',
              borderRadius: '15px',
              marginTop: width > 1199 ? 0 : 20
            }}
            headStyle={{ border: 'none', fontSize: 22 }}
          >
            <Row>
              {backend.map(item => (
                <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                  <Card bordered={false} style={{ backgroundColor: 'white' }}>
                    <i style={{ fontSize: '30px' }} class={item.icon}></i>
                    <br />
                    <span style={{ fontSize: '15px' }}>{item.skill}</span>
                  </Card>
                </Col>
              ))}
              <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                <Card bordered={false} style={{ backgroundColor: 'white' }}>
                  <img style={{ height: '35px' }} src={Mongoose}></img>
                  <br />
                  <span style={{ fontSize: '15px' }}>Mongoose</span>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Card
        title='Other'
        bodyStyle={{ border: 'none' }}
        style={{
          backgroundColor: 'white',
          borderColor: 'lightGray',
          marginTop: 20,
          borderRadius: '15px'
        }}
        headStyle={{ border: 'none', fontSize: 22 }}
      >
        <Row>
          {other.map(item => (
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
              <List>
                <List.Item style={{ border: 'none' }}>
                  <Tag
                    style={{
                      lineHeight: '22px',
                      fontSize: '15px',
                      margin: 'auto',
                      textAlign: 'left'
                    }}
                  >
                    {item.skill}
                  </Tag>
                </List.Item>
              </List>
            </Col>
          ))}
        </Row>
      </Card>
    </Typography>
  )
}

export default Skills
