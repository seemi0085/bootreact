// import React from 'react'
// import { Card, Image } from 'react-bootstrap'



// export default function Sidenav() {
//     return (
//         <React.Fragment>
//             <Card bg="dark" variant="dark" style={{ width: '15rem', marginTop: '-8rem', color: 'white' }}>
//                 <Card.Body>
//                     <Card.Title><Card.Header><Image src='https://source.unsplash.com/user/erondu/23x23' roundedCircle />Lector.</Card.Header></Card.Title><br />
//                     <Card.Text><i class="fa fa-home"></i> Dashboard</Card.Text><br />
//                     <Card.Text><i class="fa fa-cog"></i> Widgets</Card.Text><br />
//                     <Card.Text><i class="fa fa-align-center"></i> Ui Element</Card.Text><br />
//                     <Card.Text><i class="fa fa-circle"></i> Icon</Card.Text><br />
//                     <Card.Text><i class="fa fa-envelope"></i> Email</Card.Text><br />
//                     <Card.Text><i class="fa fa-map-marker"></i> map</Card.Text><br />
//                     <Card.Text><i class="fa fa-calendar"></i> calendar</Card.Text><br />
//                     <Card.Text><i class="fa fa-map"></i> Tool List</Card.Text><br />
//                     <Card.Text><i class="fa fa-book"></i> Documantation</Card.Text><br />
//                     <Card.Text><i class="fa fa-bell"></i> Notification</Card.Text><br />
//                 </Card.Body>
//             </Card>
//         </React.Fragment>
//     )
// }





// import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';

// import React from 'react'

// export default function Sidenav() {
//     return (
//         <React.Fragment>
//             <ProSidebar>
//                 <Menu iconShape="square">
//                     <MenuItem ><i class="fa fa-home"/> Dashboard</MenuItem><br/>
//                     <SubMenu title="Components">
//                         <MenuItem>Component 1</MenuItem>
//                         <MenuItem>Component 1</MenuItem>
//                         <MenuItem>
//                         <SubMenu title="Components">
//                         <MenuItem>Component 1</MenuItem>
//                         </SubMenu>
//                         </MenuItem>
//                     </SubMenu><br/>     
//                     <SubMenu title="Components" >
//                         <MenuItem>Component 1</MenuItem>
//                         <MenuItem>Component 2</MenuItem>
//                     </SubMenu><br/>
//                     <SubMenu title="Components" >
//                         <MenuItem>Component 1</MenuItem>
//                         <MenuItem>Component 2</MenuItem>
//                     </SubMenu><br/>
//                     <SubMenu title="Components" >
//                         <MenuItem>Component 1</MenuItem>
//                         <MenuItem>Component 2</MenuItem>
//                     </SubMenu><br/>
//                     <SubMenu title="Components" >
//                         <MenuItem>Component 1</MenuItem>
//                         <MenuItem>Component 2</MenuItem>
//                     </SubMenu><br/>
//                     <SubMenu title="Components" >
//                         <MenuItem>Component 1</MenuItem>
//                         <MenuItem>Component 2</MenuItem>
//                     </SubMenu><br/>
//                     <SubMenu title="Components" >
//                         <MenuItem>Component 1</MenuItem>
//                         <MenuItem>Component 2</MenuItem>
//                     </SubMenu><br/>
//                     <SubMenu title="Components" >
//                         <MenuItem>Component 1</MenuItem>
//                         <MenuItem>Component 2</MenuItem>
//                     </SubMenu><br/>
//                     <SubMenu title="Components" >
//                         <MenuItem>Component 1</MenuItem>
//                         <MenuItem>Component 2</MenuItem>
//                     </SubMenu><br/><br/><br/> 
//                 </Menu>
//             </ProSidebar>
//         </React.Fragment>
//     )
// }


import React from 'react';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import 'react-pro-sidebar/dist/css/styles.css';

const Sidebar = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
    return (
        <ProSidebar
            image={image ? false : false}
            rtl={rtl}
            collapsed={collapsed}
            toggled={toggled}
            breakPoint="md"
            onToggle={handleToggleSidebar}
            style={{ height: "47rem" }}
        >
            <SidebarHeader>
                <div
                    style={{
                        padding: '24px',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        fontSize: 14,
                        letterSpacing: '1px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',

                    }}
                >
                    SkyPearl iNfotech
                </div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem
                        icon={<FaTachometerAlt />}
                        suffix={<span className="badge red">new</span>}
                    >
                        dashboard
                    </MenuItem>
                    <MenuItem icon={<FaGem />}> components</MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <SubMenu
                        suffix={<span className="badge yellow">3</span>}
                        title="withSuffix"
                        icon={<FaRegLaughWink />}
                    >
                        <MenuItem>submenu 1</MenuItem>
                        <MenuItem>submenu 2</MenuItem>
                        <MenuItem>submenu 3</MenuItem>
                    </SubMenu>
                    <SubMenu
                        prefix={<span className="badge gray">3</span>}
                        title="withPrefix"
                        icon={<FaHeart />}
                    >
                        <MenuItem>submenu 1</MenuItem>
                        <MenuItem>submenu 2</MenuItem>
                        <MenuItem>submenu 3</MenuItem>
                    </SubMenu>
                    <SubMenu title="multiLevel" icon={<FaList />}>
                        <MenuItem>submenu 1 </MenuItem>
                        <MenuItem>submenu 2 </MenuItem>
                        <SubMenu title={`$submenu 3`}>
                            <MenuItem>submenu 3.1 </MenuItem>
                            <MenuItem>submenu 3.2 </MenuItem>
                            <SubMenu title={`$submenu 3.3`}>
                                <MenuItem>submenu 3.3.1 </MenuItem>
                                <MenuItem>submenu 3.3.2 </MenuItem>
                                <MenuItem>submenu 3.3.3 </MenuItem>
                            </SubMenu>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </SidebarContent>
        </ProSidebar>
    );
};

export default Sidebar;