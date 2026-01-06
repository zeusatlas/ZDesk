import React from 'react'
import { Outlet } from 'react-router-dom'
// Import layout components


import SideNav from '../components/SideNav'
import AppTopBar from '../components/AppTopBar'
import Footer from '../components/Footer'
import ThemeSettings from '../components/ThemeSettings'

const Root = () => {
    return (
        <>

            <div className="wrapper">

                {/* SIDENAV BAR */}
                <SideNav />


                <div className="topbar-space"></div>
                {/* APP TOBBAR */}
                <AppTopBar />

                <div className="content-page">

                    <Outlet />

                    {/* FOOTER */}
                    <Footer />
                </div>


                <div className="side-button-wrapper">
                    <button className="side-btn" data-bs-toggle="offcanvas" data-bs-target="#theme-settings-offcanvas" type='button'>
                        <i className="ti ti-settings icon-spin fs-24" />
                    </button>
                    <button className="side-btn">
                        <i className="ti ti-bell fs-24" />
                    </button>
                    <button className="side-btn">
                        <i className="ti ti-user fs-24" />
                    </button>
                </div>


            </div>

            {/* Theme settings */}
            <ThemeSettings />
        </>
    )
}

export default Root
