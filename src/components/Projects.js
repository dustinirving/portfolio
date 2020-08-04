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
  const [projects] = useState([
    {
      title: 'Vogi',
      image: Vogi,
      site: 'https://www.vogi.ca',
      repo: 'https://github.com/dustinirving/vogi',
      alt: 'Vogi',
      description:
        'Vogi connects volunteers with organizations, to work on projects together and mutually benefit.'
    },
    {
      title: 'Travelbook',
      image: Travelbook,
      site: 'https://www.travel-book.ca',
      repo: 'https://github.com/dustinirving/travel-book',
      alt: 'Travelbook',
      description:
        'A social media platform that allows you to share your own travel experiences with fellow travellers.'
    },
    {
      title: 'Covid-19 Tracker',
      image: Covid,
      site: 'https://lagbana.github.io/covid19-tracker/',
      repo: 'https://github.com/dustinirving/covid19-tracker',
      alt: 'Covid-19 Tracker',
      description:
        'Displays the latest data regarding cases of COVID-19 in a graph and provides the user with related news updates.'
    },
    {
      title: 'Good Samaritan',
      site: 'https://serene-mountain-91633.herokuapp.com/',
      repo: 'https://github.com/dustinirving/good-samaritan',
      image: Samaritan,
      alt: 'Good Samaritan',
      description:
        'Good samaritan is a tool that aims to minimize opioid misuse related harm, by alerting emergency response volunteers.'
    },
    {
      title: 'Offline Transactions',
      image: Transactions,
      site: 'https://offline-transactions.herokuapp.com/',
      repo: 'https://github.com/dustinirving/offline-transactions',
      alt: 'Transactions',
      description:
        'This is a Progressive Web Application where the user is able to able add or subtract funds from their budget.'
    },
    {
      title: 'Employee Tracking CLI',
      image: Employee,
      alt: 'Employee Tracking CLI',
      repo: 'https://github.com/dustinirving/employee-tracking-cli',
      description:
        'A command line application that allows the user to manage employees, roles and departments in a database.'
    }
  ])

  const changeColor = e => {
    e.target.style.color = '#001529'
  }
  const defaultColor = e => {
    e.target.style.color = 'grey'
  }
  return (
    <>
      <Typography style={{ marginTop: 50 }}>
        <Title style={{ paddingBottom: '1rem' }}>Projects</Title>
        <Row gutter={[50, 20]}>
          {projects.map(project => (
            <Col
              xs={22}
              sm={20}
              md={12}
              lg={12}
              xl={8}
              style={{ margin: 'auto' }}
            >
              <Card cover={<img alt={project.alt} src={project.image} />}>
                <Meta title={project.title} description={project.description} />
                <br />
                <div>
                  <Tag>
                    <a
                      onMouseOver={changeColor}
                      onMouseOut={defaultColor}
                      target='_blank'
                      style={{ color: 'grey' }}
                      href={project.repo}
                    >
                      Repo
                    </a>
                  </Tag>
                  {project.site ? (
                    <Tag>
                      <a
                        onMouseOver={changeColor}
                        onMouseOut={defaultColor}
                        target='_blank'
                        style={{ color: 'grey' }}
                        href={project.site}
                      >
                        Site
                      </a>
                    </Tag>
                  ) : (
                    <div />
                  )}
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
