import React from "react"
import { Outlet } from "react-router-dom"
import NavBar from "./Home/NavBar"
import ScrollToTopButton from "./ScrollToTopButton"
import SocialMediaLinks from "./SocialMediaLinks"
import Footer from "./Footer"

const Layout = () => {
    return (
        <React.Fragment>
            <NavBar />
            <ScrollToTopButton />
            <SocialMediaLinks />
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}
export default Layout