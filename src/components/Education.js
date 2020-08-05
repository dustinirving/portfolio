import React from 'react'
import { List, Typography } from 'antd'
import useWindowSize from '../utils/useWindowSize'
const { Title, Paragraph, Text } = Typography

const Education = () => {
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
  return (
    <>
      <Typography style={{}}>
        <Title style={{ fontSize: width > 500 ? 38 : 28 }}>Education</Title>
        <List style={{ fontSize: breakpoints(24, 18, 18, 17, 15, 14, 14) }}>
          <List.Item
            style={{
              textAlign: 'left',
              margin: 'auto',
              marginBottom: 50,
              width: width > 900 ? '60%' : '80%'
            }}
          >
            Carleton University &nbsp;
            <span style={{ fontStyle: 'italic' }}>( Feb 2020 - Jul 2020 )</span>
            <List.Item.Meta
              title='Certificate in Web Development - A+ Average'
              description='A 6-month intensive coding bootcamp in full stack web development.'
            />
          </List.Item>
          <List.Item
            style={{
              textAlign: 'left',
              margin: 'auto',
              marginBottom: 50,
              width: width > 900 ? '60%' : '80%'
            }}
          >
            University of Ottawa &nbsp;
            <span style={{ fontStyle: 'italic' }}>( Sep 2016 - Oct 2016 )</span>
            <List.Item.Meta
              title='TESL Certificate'
              description='Completed a 100 hour certificate to Teach English as a Second Language.'
            />
          </List.Item>
          <List.Item
            style={{
              textAlign: 'left',
              margin: 'auto',
              width: width > 900 ? '60%' : '80%'
            }}
          >
            University of Ottawa &nbsp;
            <span
              style={{
                fontStyle: 'italic'
              }}
            >
              ( Sep 2012 - Apr 2016 )
            </span>
            <List.Item.Meta
              title='Bachelor of Science in Biochemistry - $2000 Scholarship'
              description='Earned a Honours Bachelor of Science with a Specialization in Biochemistry'
            />
          </List.Item>
        </List>
      </Typography>
    </>
  )
}

export default Education
