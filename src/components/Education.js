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
              description='Ant Design, a design language for background applications, is refined by Ant UED Team'
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
              description='Ant Design, a design language for background applications, is refined by Ant UED Team'
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
              description='Ant Design, a design language for background applications, is refined by Ant UED Team'
            />
          </List.Item>
        </List>
      </Typography>
    </>
  )
}

export default Education
