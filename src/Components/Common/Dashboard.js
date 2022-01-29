import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidenav'
// import './side.scss'
import Main from './Main'

export default function Dashboard({ setLocale }) {
    const [rtl, setRtl] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [image, setImage] = useState(true);
    const [toggled, setToggled] = useState(false);
    const handleCollapsedChange = (checked) => {
        setCollapsed(checked);
    };

    const handleRtlChange = (checked) => {
        setRtl(checked);
        setLocale(checked ? 'ar' : 'en');
    };
    const handleImageChange = (checked) => {
        setImage(checked);
    };

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };
    return (
        <div className={`app ${rtl ? 'rtl' : ''} ${toggled ? 'toggled' : ''}`}>
            <React.Fragment>
            <Sidebar
                 image={image}
                 collapsed={collapsed}
                 rtl={rtl}
                 toggled={toggled}
                 handleToggleSidebar={handleToggleSidebar}
                    
                />
                <Navbar
                   image={image}
                   toggled={toggled}
                   collapsed={collapsed}
                   rtl={rtl}
                   handleToggleSidebar={handleToggleSidebar}
                   handleCollapsedChange={handleCollapsedChange}
                   handleRtlChange={handleRtlChange}
                   handleImageChange={handleImageChange}
                />
                <Main/>
              
            </React.Fragment>
        </div>
    )
}
