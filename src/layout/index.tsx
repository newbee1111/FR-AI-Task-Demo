import { useState } from 'react'
import { FileOutlined, HeartOutlined } from '@ant-design/icons'
import { Layout, Menu, MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'

const { Content, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
  {
    key: '/question',
    icon: <FileOutlined></FileOutlined>,
    label: 'Questions',
  },
  {
    key: '/favorites',
    icon: <HeartOutlined></HeartOutlined>,
    label: 'Favorites',
  },
]

function LayoutWrapper(props: { children: JSX.Element }) {
  const [collapsed, setCollapsed] = useState(false)
  const navigator = useNavigate()
  const onMenuClick = ({ key }: { key: string }) => {
    navigator(key)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu
          onClick={onMenuClick}
          theme="dark"
          defaultSelectedKeys={[window.location.pathname]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout style={{ padding: '12px 0' }}>
        <Content style={{ margin: '0 16px' }}>{props.children}</Content>
      </Layout>
    </Layout>
  )
}

export default LayoutWrapper
