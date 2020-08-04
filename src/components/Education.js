import React from 'react'
import { List, Typography } from 'antd'
import useWindowSize from '../utils/useWindowSize'
const { Title, Paragraph, Text } = Typography

const Education = () => {
  const [width] = useWindowSize()
  return (
    <>
      <Typography style={{}}>
        <Title style={{ fontSize: width > 500 ? 38 : 32 }}>Education</Title>
        <List>
          <List.Item
            style={{
              fontSize: '24px',
              textAlign: 'left',
              margin: 'auto',
              marginBottom: 50,
              width: width > 900 ? '60%' : '80%'
            }}
          >
            Carleton University &nbsp;
            <span style={{ fontStyle: 'italic', fontSize: 18 }}>
              (Feb 2020 - Jul 2020)
            </span>
            <List.Item.Meta
              title='Certificate in Web Development'
              description='A 6-month intensive coding bootcamp in full stack web development. Achieved an A+ Average.'
            />
          </List.Item>
          <List.Item
            style={{
              fontSize: '24px',
              textAlign: 'left',
              margin: 'auto',
              marginBottom: 50,
              width: width > 900 ? '60%' : '80%'
            }}
          >
            University of Ottawa &nbsp;
            <span style={{ fontStyle: 'italic', fontSize: 18 }}>
              (Sep 2016 - Oct 2016)
            </span>
            <List.Item.Meta
              title='TESL Certificate'
              description='Completed a 100 hour certificate to Teach English as a Second Language.'
            />
          </List.Item>
          <List.Item
            style={{
              fontSize: '24px',
              textAlign: 'left',
              margin: 'auto',
              width: width > 900 ? '60%' : '80%'
            }}
          >
            University of Ottawa &nbsp;
            <span style={{ fontStyle: 'italic', fontSize: 18 }}>
              (Sep 2012 - Apr 2016)
            </span>
            <List.Item.Meta
              title='Bachelor of Science in Biochemistry'
              description='Earned a Honours Bachelor of Science with a Specialization in Biochemistry. Was granted a $2000 entrance scholarship'
            />
          </List.Item>
        </List>
      </Typography>
    </>
  )
}

export default Education
