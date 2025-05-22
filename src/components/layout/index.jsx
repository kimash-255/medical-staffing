import React from "react";
import Header from "../header";
import Footer from "../footer";
import TopBar from "../topbar";

const Layout = ({ children }) => {
    return (
        <>
        <TopBar/>
        <Header/>
        <main>
            {children}
        </main> 
        <Footer/>
        
        </>
    );
};
export default Layout;