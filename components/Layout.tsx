import React, { ReactNode } from 'react';

// import Navbar from './Navbar';
// import Footer from './Footer';

type LayoutProps = {
    children: ReactNode;
};

const Layout = (props: LayoutProps) => {
    const { children } = props;

    return (
        <>
            {/* <Navbar isMobile={isMobile} scrollToRef={scrollToRef} /> */}
            {children}
            {/* <Footer contactDetails={contactDetails} /> */}
        </>
    );
};

export default Layout;
