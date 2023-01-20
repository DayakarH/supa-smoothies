import styled from '@emotion/styled';
import { Link, useLocation } from 'react-router-dom';
import mainImg from '../assets/main.svg';
import { motion } from 'framer-motion';

const StyledMainLockup = styled(motion.main)`
	container-type: inline-size;
	& .main__text {
		color: hsl(159, 56%, 7%);

		& h1 {
			font-family: 'Montserrat', sans-serif;
			margin-block-end: 1rem;
			font-size: clamp(1.35rem, calc(0.78rem + 2.87vw), 3rem);
		}
		& p {
			margin-block-end: 3rem;
			font-size: clamp(1.13rem, calc(0.99rem + 0.65vw), 1.5rem);
		}

		& a {
			text-decoration: none;
			background-color: hsl(155, 43%, 18%);
			color: #fff;
			padding: 1em 2em;
			border-radius: 1rem;
			box-shadow: var(--shadow-elevation-high);
		}
	}

	@container (min-width: 600px) {
		& > div {
			display: flex;
		}
		& .main__img {
			display: flex;
			align-items: flex-start;
		}
	}

	@container (max-width: 600px) {
		.main__img {
			display: none;
		}
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
	damping: 20,
};

const Home = () => {
	return (
		<StyledMainLockup
			initial='initial'
			animate='in'
			exit='out'
			variants={pageVariants}
			transition={pageTransition}
			className='container'
		>
			<div>
				<div className='main__text'>
					<h1>
						Drink to your health with our tasty, nutrient-packed smoothies.
					</h1>
					<p>
						"Get your daily dose of deliciousness with Supa Smoothies - the
						ultimate smoothie destination!"
					</p>
					<Link to='/smoothies'>Show Me!</Link>
				</div>
				<div className='main__img'>
					<img
						src={mainImg}
						alt='two people energizing themselves with healthy drinks'
					/>
				</div>
			</div>
		</StyledMainLockup>
	);
};

export default Home;
