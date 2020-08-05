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
  const [hiddenImg, setHiddenImg] = useState(false)
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    width < 767 ? setCollapsed(true) : setCollapsed(false)
    width < 480 ? setHiddenImg(true) : setHiddenImg(false)
  }, [width])

  const breakpoints = (xl, lg, md, sm, xs, xxs) => {
    if (width > 1200) return xl
    else if (width > 991 && width < 1200) return lg
    else if (width > 767 && width < 992) return md
    else if (width > 575 && width < 768) return sm
    else if (width > 479 && width < 576) return xs
    return xxs
  }

  const styling = {
    menu: {
      paddingTop: breakpoints(40, 40, 40, 20, 20, 20),
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
      padding: width > 767 ? '25px' : '20px',
      padding: breakpoints(25, 25, 25, 20, 20, 10)
    },
    menuItem: {
      paddingLeft: width > 767 ? 50 : 0,
      marginLeft: width < 480 ? -40 : 0
    }
  }

  return (
    <>
      <Sider
        width={250}
        collapsed={collapsed}
        collapsedWidth={width < 480 ? 40 : 80}
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
          selectable={false}
        >
          {hiddenImg ? (
            <div />
          ) : (
            <div style={styling.padding}>
              <img src={Dustin} style={styling.border} />
            </div>
          )}

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
