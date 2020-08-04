import React, { useState } from 'react'
import { Typography, Tag, Card, Row, Col, List } from 'antd'
import useWindowSize from '../utils/useWindowSize'

const { Title, Text } = Typography
const Skills = () => {
  const [width] = useWindowSize()
  const styling = {
    tag: {
      lineHeight: '30px',
      fontSize: '20px'
    },
    gridStyle: {
      width: '20%',
      textAlign: 'center'
    }
  }
  const [frontend, setFrontend] = useState([
    {
      skill: 'JavaScript',
      color: '#F0DB4F',
      icon: 'devicon-javascript-plain'
    },
    { skill: 'React', color: '#61DBFB', icon: 'devicon-react-original' },
    {
      skill: 'HTML5',
      color: '#E44D26',
      icon: 'devicon-html5-plain'
    },
    {
      skill: 'CSS3',
      color: '#889CDE',
      icon: 'devicon-css3-plain'
    },
    {
      skill: 'Bootstrap',
      color: '#553C7B',
      icon: 'devicon-bootstrap-plain'
    },
    { skill: 'Handlebars', color: '', icon: 'devicon-handlebars-plain colored' }
  ])
  const [backend, setBackend] = useState([
    {
      skill: 'Node.js',
      color: '',
      icon: 'devicon-nodejs-plain-wordmark colored'
    },
    { skill: 'Express', color: '#303030', icon: 'devicon-express-original' },
    {
      skill: 'MongoDB',
      color: '',
      icon: 'devicon-mongodb-plain colored'
    },
    {
      skill: 'MySQL',
      color: '',
      icon: 'devicon-mysql-plain colored'
    },
    {
      skill: 'Python',
      color: '',
      icon: 'devicon-python-plain colored'
    }
  ])
  const [other, setOther] = useState([
    {
      skill: 'Git'
    },
    {
      skill: 'RESTful APIs'
    },
    {
      skill: 'Agile Development'
    },
    {
      skill: 'MVC'
    },
    {
      skill: 'Data Structures and Algorithms'
    },
    {
      skill: 'JEST'
    },
    {
      skill: 'Mobile-first design'
    },
    {
      skill: 'PWAs'
    }
  ])
  return (
    <Typography style={{ backgroundColor: '#f0f2f5', marginTop: 150 }}>
      <Title style={{ paddingBottom: '1rem' }}>Technical Skills</Title>
      <Row>
        <Col xs={24} sm={24} md={24} lg={11} xl={11}>
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
                <Col xs={12} sm={12} md={8} lg={12} xl={8}>
                  <Card bordered={false} style={{ backgroundColor: 'white' }}>
                    <i
                      style={{ color: item.color, fontSize: '30px' }}
                      class={item.icon}
                    ></i>
                    <br />
                    <span style={{ fontSize: '16px' }}>{item.skill}</span>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
        </Col>
        <Col lg={2} xl={2} />

        <Col xs={24} sm={24} md={24} lg={11} xl={11}>
          <Card
            title='Backend'
            bodyStyle={{ border: 'none' }}
            style={{
              backgroundColor: 'white',
              borderColor: 'lightGray',
              borderRadius: '15px',
              marginTop: width > 991 ? 0 : 20
            }}
            headStyle={{ border: 'none', fontSize: 22 }}
          >
            <Row>
              {backend.map(item => (
                <Col xs={12} sm={12} md={8} lg={12} xl={8}>
                  <Card bordered={false} style={{ backgroundColor: 'white' }}>
                    <i
                      style={{ color: item.color, fontSize: '30px' }}
                      class={item.icon}
                    ></i>
                    <br />
                    <span style={{ fontSize: '16px' }}>{item.skill}</span>
                  </Card>
                </Col>
              ))}
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
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
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
                  Git version-control
                </Tag>
              </List.Item>
              <List.Item style={{ border: 'none' }}>
                <Tag
                  style={{
                    lineHeight: '22px',
                    fontSize: '15px',
                    margin: 'auto',
                    textAlign: 'left'
                  }}
                >
                  RESTful APIs
                </Tag>
              </List.Item>
              <List.Item style={{ border: 'none' }}>
                <Tag
                  style={{
                    lineHeight: '22px',
                    fontSize: '15px',
                    margin: 'auto',
                    textAlign: 'left'
                  }}
                >
                  Agile Development
                </Tag>
              </List.Item>
              <List.Item style={{ border: 'none' }}>
                <Tag
                  style={{
                    lineHeight: '22px',
                    fontSize: '15px',
                    margin: 'auto',
                    textAlign: 'left'
                  }}
                >
                  MVC Framework
                </Tag>
              </List.Item>
            </List>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
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
                  Data Structures and Algorithms
                </Tag>
              </List.Item>
              <List.Item style={{ border: 'none' }}>
                <Tag
                  style={{
                    lineHeight: '22px',
                    fontSize: '15px',
                    margin: 'auto',
                    textAlign: 'left'
                  }}
                >
                  JEST
                </Tag>
              </List.Item>
              <List.Item style={{ border: 'none' }}>
                <Tag
                  style={{
                    lineHeight: '22px',
                    fontSize: '15px',
                    margin: 'auto',
                    textAlign: 'left'
                  }}
                >
                  Mobile-first design
                </Tag>
              </List.Item>
              <List.Item style={{ border: 'none' }}>
                <Tag
                  style={{
                    lineHeight: '22px',
                    fontSize: '15px',
                    margin: 'auto',
                    textAlign: 'left'
                  }}
                >
                  Progressive Web Applications
                </Tag>
              </List.Item>
            </List>
          </Col>
        </Row>
      </Card>
    </Typography>
  )
}

export default Skills
