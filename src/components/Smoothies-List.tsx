import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { smoothie } from '../types';

const StyledList = styled(motion.ul)`
	list-style: none;
	padding: 0.7em 1em;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	gap: 1em;

	& > li {
		background-color: hsl(153, 58%, 42%);
		margin-block-end: 0.5em;
		border-radius: 1rem;
		box-shadow: var(--shadow-elevation-medium);

		padding: 0.4em 0.8em;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;

		& a {
			text-decoration: none;
			color: hsl(129, 11%, 95%);
		}
	}
`;

const pageVariants = {
	initial: {
		opacity: 0,
		y: '100vh',
	},
	in: {
		opacity: 1,
		y: 0,
	},
	out: {
		x: '100vw',
	},
};

const pageTransition = {
	ease: 'easeOut',
	duration: 0.5,
	type: 'spring',
	bounce: 0.7,
	stiffness: 70,
	damping: 18,
};

const SmoothiesList = ({ smoothies }: { smoothies: smoothie[] }) => {
	return (
		<StyledList
			className='container'
			initial='initial'
			animate='in'
			exit='out'
			variants={pageVariants}
			transition={pageTransition}
		>
			{smoothies.map(smoothie => (
				<li key={smoothie.id}>
					<Link to={`/smoothies/${smoothie.id}`}>{smoothie.title}</Link>
				</li>
			))}
		</StyledList>
	);
};

export default SmoothiesList;
