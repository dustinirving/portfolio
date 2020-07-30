import React from 'react'
import { Card, Form, Input, Button, Typography, notification } from 'antd'
import useWindowSize from '../utils/useWindowSize'
const { Title } = Typography

const Contact = () => {
  const [width] = useWindowSize()
  const [form] = Form.useForm()
  const onFinish = values => {
    openNotificationWithIcon('success')
    form.resetFields()
  }
  const onFinishFailed = errorInfo => {
    console.log('Failed: ', errorInfo)
  }
  const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Email Sent',
      description:
        'Your email has been sent. I will get back to you as soon as posssible.'
    })
  }
  return (
    <>
      <Title>Contact Me</Title>
      <Card
        style={{
          width: width > 900 ? '60%' : '80%',
          margin: 'auto',
          border: 'none',
          backgroundColor: '#f0f2f5'
        }}
        headStyle={{ border: 'none' }}
      >
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed} form={form}>
          <Form.Item name='name'>
            <Input
              placeholder='Name'
              style={{ fontSize: 18, borderRadius: 15 }}
            />
          </Form.Item>
          <Form.Item
            name='email'
            rules={[{ type: 'email', message: 'Must be a valid email.' }]}
          >
            <Input
              placeholder='Email'
              style={{ fontSize: 18, borderRadius: 15 }}
            />
          </Form.Item>
          <Form.Item name='subject'>
            <Input
              placeholder='Subject'
              style={{ fontSize: 18, borderRadius: 15 }}
            />
          </Form.Item>
          <Form.Item name='message'>
            <Input.TextArea
              placeholder='Message'
              style={{ fontSize: 18, borderRadius: 15 }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType='submit'
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
