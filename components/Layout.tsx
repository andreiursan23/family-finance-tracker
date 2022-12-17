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
			{/* <Navbar /> */}
			{children}
			{/* <Footer /> */}
		</>
	);
};

export default Layout;
