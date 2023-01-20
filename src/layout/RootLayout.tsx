import styled from '@emotion/styled';
import logo from '../assets/logo.svg';
import { Link, Outlet, redirect, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hamburger from '../components/UI/Hamburger';

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-block-start: 2em;
	margin-block-end: 2rem;

	a {
		align-self: stretch;
	}
`;

const pageVariants = {
	initial: {
		opacity: 0,
		x: '-100vw',
	},
	in: {
		opacity: 1,
		x: 0,
	},
	out: {
		y: '-100vh',
	},
};

const pageTransition = {
	ease: 'easeOut',
	duration: 0.5,
	type: 'spring',
	bounce: 0.7,
	stiffness: 70,
};
const RootLayout = () => {
	const { pathname } = useLocation();

	return (
		<>
			<StyledHeader className='container'>
				<Link to='/'>
					<img src={logo} alt='logo' />
				</Link>
				<Navbar />
			</StyledHeader>
			<AnimatePresence mode='wait'>
				<Outlet />
			</AnimatePresence>
		</>
	);
};

export const rootLoader = () => redirect('/smoothies');

export default RootLayout;
