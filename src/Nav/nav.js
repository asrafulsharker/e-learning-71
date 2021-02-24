import React from 'react';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

import {AiOutlineFileSearch , AiOutlineUser} from 'react-icons/ai';
 import {IoIosNotificationsOutline} from 'react-icons/io';
import Logo from '../images/Logo.png';
import './nav.css';


const { SubMenu } = Menu;
class Nav extends React.Component{

    state = {
        collapsed: false,
      };
    
      toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };

      render() {
    return (
        <div className="container-fluid nav-bg" style={{position:"fixed",zIndex:"999"}} >
            <div className="nav row" style={{ padding:" 10px 80px "}}>
                <img src={Logo} alt="Logo"  />
                <div className="row ml-auto col-md-7" >
                <form  className="m-auto nav-form col-md-8" >
                    <input type="text" className="nav-input " placeholder="search" />
                    <button className="nav-btn"  type="submit"><AiOutlineFileSearch /></button>
                </form>
                    <div className="row nav-user">
                        <AiOutlineUser className="m-auto"/>
                        <p className="m-auto">User</p>
                    </div>
                    <IoIosNotificationsOutline className="m-auto nav-notification" />
                </div>

            </div>
                        {/* ant */}
                        <br/>
                        <div style={{ width: 170 }}>
                            <Button type="" onClick={this.toggleCollapsed} style={{ marginBottom: 16,textAlign:"center"}}>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                            
                            </Button>
                            <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme="light"
                            inlineCollapsed={this.state.collapsed}
                            >
                            <Menu.Item key="1" icon={<PieChartOutlined />}>
                                Option 1
                            </Menu.Item>
                            <Menu.Item key="2" icon={<DesktopOutlined />}>
                                Option 2
                            </Menu.Item>
                            <Menu.Item key="3" icon={<ContainerOutlined />}>
                                Option 3
                            </Menu.Item>
                            <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                                <Menu.Item key="5">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                                <Menu.Item key="9">Option 9</Menu.Item>
                                <Menu.Item key="10">Option 10</Menu.Item>
                                <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                            </Menu>
                        </div>
                
            
        </div>
    )
}
}

export default Nav
