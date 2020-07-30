import React, { useState } from 'react'
import { Card, Typography, Tag, Row, Col } from 'antd'
import Covid from '../images/covid.jpg'
import Samaritan from '../images/samaritan.jpg'
import Travelbook from '../images/travelbook.png'
import Vogi from '../images/vogi.png'
import Transactions from '../images/transactions.jpg'
import Employee from '../images/employee.jpg'
const { Title } = Typography
const { Meta } = Card

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      title: 'Vogi',
      url: Vogi,
      alt: 'Vogi',
      description:
        'Vogi allows other organizations and volunteers to connect and work on projects together to mutually benefit.'
    },
    {
      title: 'Travelbook',
      url: Travelbook,
      alt: 'Travelbook',
      description:
        'A social media platform that allows you to share your own travel experiences with fellow travellers.'
    },
    {
      title: 'Covid-19 tracker',
      url: Covid,
      alt: 'Covid-19 Tracker',
      description:
        'The Covid-19 Tracker retrieves, displays, and visualizes covid-19 related data, and provides the user with related news.'
    },
    { title: 'Good Samaritan', url: Samaritan, alt: 'Good Samaritan' },
    { title: 'Offline Transactions', url: Transactions, alt: 'Transactions' },
    {
      title: 'Employee Tracking CLI',
      url: Employee,
      alt: 'Employee Tracking CLI'
    }
  ])
  return (
    <>
      <Typography style={{ marginTop: 50 }}>
        <Title>Projects</Title>
        <Row gutter={[50, 20]}>
          {projects.map(project => (
            <Col xs={24} sm={24} md={12} lg={12} xl={8}>
              <Card
                cover={<img alt={project.alt} src={project.url} style={{}} />}
              >
                <Meta title={project.title} description={project.description} />
                <br />
                <div>
                  <Tag>
                    <a
                      style={{ color: 'grey' }}
                      href='https://github.com/ant-design/ant-design/issues/1862'
                    >
                      Repo
                    </a>
                  </Tag>
                  <Tag>
                    <a
                      style={{ color: 'grey' }}
                      href='https://github.com/ant-design/ant-design/issues/1862'
                    >
                      Site
                    </a>
                  </Tag>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Typography>
    </>
  )
}

export default Projects
