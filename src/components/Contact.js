import React from 'react'
import { Card, Form, Input, Button, Typography } from 'antd'
const { Title } = Typography

const Contact = () => {
  return (
    <>
      <Title>Contact Me</Title>
      <Card
        style={{
          width: '60%',
          margin: 'auto',
          border: 'none',
          backgroundColor: '#f0f2f5'
        }}
        headStyle={{ border: 'none' }}
      >
        <Form>
          <Form.Item>
            <Input
              placeholder='Name'
              style={{ fontSize: 18, borderRadius: 15 }}
            />
          </Form.Item>
          <Form.Item>
            <Input
              placeholder='Email'
              style={{ fontSize: 18, borderRadius: 15 }}
            />
          </Form.Item>
          <Form.Item>
            <Input
              placeholder='Subject'
              style={{ fontSize: 18, borderRadius: 15 }}
            />
          </Form.Item>
          <Form.Item>
            <Input.TextArea
              placeholder='Message'
              style={{ fontSize: 18, borderRadius: 15 }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              style={{
                backgroundColor: '#001529',
                color: 'white',
                borderRadius: 15
              }}
            >
              Send
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  )
}

export default Contact
