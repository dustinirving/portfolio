import React from 'react'
import { List, Typography } from 'antd'
const { Title, Paragraph, Text } = Typography

const Education = () => {
  return (
    <>
      <Typography style={{ marginTop: '150px' }}>
        <Title>Education</Title>
        <List>
          <List.Item
            style={{
              fontSize: '24px',
              textAlign: 'left',
              margin: 'auto',
              marginBottom: 50,
              width: '60%'
            }}
          >
            Carleton University &nbsp;
            <span style={{ fontStyle: 'italic', fontSize: 18 }}>
              (Feb 2020 - July 2020)
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
              width: '60%'
            }}
          >
            University of Ottawa &nbsp;
            <span style={{ fontStyle: 'italic', fontSize: 18 }}>
              (Feb 2020 - July 2020)
            </span>
            <List.Item.Meta
              title='TESL Certificate'
              description='Completed a 100 hour certificate to Teach English as a Second Language'
            />
          </List.Item>
          <List.Item
            style={{
              fontSize: '24px',
              textAlign: 'left',
              margin: 'auto',
              width: '60%'
            }}
          >
            University of Ottawa &nbsp;
            <span style={{ fontStyle: 'italic', fontSize: 18 }}>
              (Feb 2020 - July 2020)
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
