// import React from 'react';
// import '../Auth/Login.css'
// import { Navbar, Nav, Badge, Image } from 'react-bootstrap';
// import { Link } from 'react-router-dom'


// function Navigationbar() {
//     return (
//         <React.Fragment>
// <Navbar bg="light" variant="light" className="shadow p-3  bg-white rounded">
//     <Nav className="me-auto">
//         <Nav.Link to="/"><i className="fa fa-tasks"></i></Nav.Link>
//     </Nav>
//     <Nav>
//         <Nav.Link href="#deets">
//             <Badge className='bell' badgeContent={4} color="secondary">
//                 <i className="fa fa-bell"></i>
//             </Badge>
//         </Nav.Link>
//         <Nav.Link eventKey={2} href="#memes">
//             <Badge className='msg' badgeContent={4} color="secondary">
//                 <i className="fa fa-envelope"></i>
//             </Badge>
//         </Nav.Link>
//         <Nav.Link xs={6} md={4} className='logo'>
//             <Image src='https://source.unsplash.com/user/erondu/25x25' roundedCircle />
//         </Nav.Link>
//         <Nav.Link>
//             <Link to='/'><i className="fa fa-cog"></i></Link>
//         </Nav.Link>
//     </Nav>
// </Navbar>
//         </React.Fragment>
//     )
// }

// export default Navigationbar;


import React from 'react';
import Switch from 'react-switch';
// import { FaBars } from 'react-icons/fa';
import { Navbar, Nav, Badge, Image, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigationbar = ({
    collapsed,
    // rtl,
    // image,
    handleToggleSidebar,
    handleCollapsedChange,
    // handleRtlChange,
    // handleImageChange,
}) => {
    return (
        <main style={{ marginLeft: "17rem", marginTop: "-47rem" }}>
            {/* <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div> */}
            <Navbar bg="light" variant="light" className="shadow p-3  bg-white rounded">
                <Nav className="me-auto">
                    {/* <Nav.Link to="/"><i className="fa fa-tasks"></i></Nav.Link> */}
                    <div className="block ">
                        <Switch
                            height={16}
                            width={30}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            onChange={handleCollapsedChange}
                            checked={collapsed}
                            onColor="#219de9"
                            offColor="#bbbbbb"
                        />
                        <span> collapsed</span>
                    </div>
                </Nav>

                <Nav>
                    <Nav.Link href="#deets">
                        <Badge className='bell' badgeContent={4} color="secondary">
                            <i className="fa fa-bell"></i>
                        </Badge>
                    </Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        <Badge className='msg' badgeContent={4} color="secondary">
                            <i className="fa fa-envelope"></i>
                        </Badge>
                    </Nav.Link>
                    <Nav.Link xs={6} md={4} className='logo'>
                        <Image src='https://source.unsplash.com/user/erondu/25x25' roundedCircle />
                    </Nav.Link>

                    <NavDropdown title="john Doe" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1"><i className="fa fa-cog" />  setting</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2"><i className="feather icon-user" /> Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3"><i className="feather icon-mail" /> My message</NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        <Link to='/'><NavDropdown.Item href="#action/3.4"><i className='feather icon-log-out' /> Logout</NavDropdown.Item></Link>
                    </NavDropdown>
                    {/* <Nav.Link>
                        <Link to='/'><i className="fa fa-cog"></i></Link>
                    </Nav.Link> */}
                </Nav>
            </Navbar>

        </main>
    );
};

export default Navigationbar;