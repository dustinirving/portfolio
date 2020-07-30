import React, { useState, useEffect } from 'react'
import { Menu, Layout } from 'antd'
import Dustin from '../images/dustin.jpg'
import { NavHashLink as Link } from 'react-router-hash-link'
import {
  UserOutlined,
  PhoneOutlined,
  OrderedListOutlined,
  BarChartOutlined,
  BookOutlined
} from '@ant-design/icons'
import useWindowSize from '../utils/useWindowSize'
const { Sider } = Layout

const Sidebar = () => {
  const [width] = useWindowSize()

  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    width < 767 ? setCollapsed(true) : setCollapsed(false)
  }, [width])

  const styling = {
    menu: {
      //   backgroundColor: '#3d7ab8',
      //   color: 'white',
      paddingTop: '40px',
      fontWeight: 'bold',
      textAlign: width > 767 ? 'left' : 'center'
    },
    border: {
      borderRadius: '50%',
      boxShadow: 'white 0px 0px 10px',
      maxWidth: '100%',
      maxHeight: '100%'
    },
    padding: {
      padding: width > 767 ? '25px' : '20px'
    },
    menuItem: {
      paddingLeft: width > 767 ? '50px' : 0
    },
    align: {}
  }

  return (
    <>
      <Sider
        width={250}
        collapsed={collapsed}
        style={{
          overflow: 'auto',
          borderRight: '1px solid #C4C4C4'
        }}
      >
        <Menu
          mode='inline'
          style={styling.menu}
          inlineCollapsed={collapsed}
          theme='dark'
        >
          <div style={styling.padding}>
            <img src={Dustin} style={styling.border} />
          </div>

          <Menu.Item key='1' icon={<UserOutlined style={styling.menuItem} />}>
            <Link style={{ textDecoration: 'none' }} to='/#about'>
              About
            </Link>
          </Menu.Item>

          <Menu.Item
            key='2'
            icon={<OrderedListOutlined style={styling.menuItem} />}
          >
            <Link style={{ textDecoration: 'none' }} to='/#projects'>
              Projects
            </Link>
          </Menu.Item>

          <Menu.Item
            key='3'
            icon={<BarChartOutlined style={styling.menuItem} />}
          >
            <Link style={{ textDecoration: 'none' }} to='/#skills'>
              Skills
            </Link>
          </Menu.Item>

          <Menu.Item key='4' icon={<BookOutlined style={styling.menuItem} />}>
            <Link to='/#education' style={{ textDecoration: 'none' }}>
              Education
            </Link>
          </Menu.Item>

          <Menu.Item key='5' icon={<PhoneOutlined style={styling.menuItem} />}>
            <Link to='/#contact' style={{ textDecoration: 'none' }}>
              Contact
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  )
}

export default Sidebar
