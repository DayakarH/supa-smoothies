import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { smoothie } from '../types';
import { JSONToArray } from '../helpers';
import ListItem from './List-Item';

const StyledSmoothie = styled(motion.article)`
	container-type: inline-size;
	& > header {
		font-family: 'Montserrat', sans-serif;
		font-size: clamp(1.5rem, calc(0.78rem + 2.87vw), 2rem);
		text-align: center;
		margin-block-end: 1em;
	}
	& main > *,
	.main__text > *,
	.row > * {
		margin-block-end: 1em;
	}

	& .main__img {
		box-shadow: var(--shadow-elevation-low);
		aspect-ratio: auto 640 / 360;
		border-radius: 0.7em;
		margin-inline: auto;
	}
	& .nutrition {
		ul {
			list-style: none;
			display: flex;
			flex-wrap: wrap;
			gap: 0.8em 1.6em;
		}
	}

	& .sub__heading {
		font-size: var(--20px);
		text-decoration: underline;
		margin-block-end: 0.5em;
	}
	& .col:nth-of-type(2) {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	& .servings {
		align-self: flex-end;
	}

	@container (min-width:300px) {
		& .main__img {
			max-width: 300px;
		}
	}
	@container (min-width:700px) {
		& main {
			display: flex;
			gap: 3em;

			.main__text {
				display: flex;
				flex-direction: column;
				gap: 2em;

				& > * {
					margin-block-end: 0;
				}
			}
		}

		& .row {
			display: grid;
			grid-auto-flow: column;
			grid-template-columns: max-content auto;
			column-gap: 2em;
			p {
				font-size: var(--18px);
				font-weight: 500;
			}
		}
	}
`;

const pageVariants = {
	initial: {
		opacity: 0,
		x: -100,
	},
	in: {
		opacity: 1,
		x: 0,
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
	damping: 20,
};

const SmoothieDetails = ({ smoothie }: { smoothie: smoothie }) => {
	const {
		title,
		description,
		recipe,
		ingredients,
		nutrition_info,
		img_url,
		yield: servings,
	} = smoothie;
	const nutrition = JSONToArray(nutrition_info);
	const ingredientList = JSONToArray(ingredients);

	return (
		<StyledSmoothie
			className='container'
			initial='initial'
			animate='in'
			exit='out'
			variants={pageVariants}
			transition={pageTransition}
		>
			<header>{title}</header>
			<main>
				<img
					src={img_url}
					alt={title}
					className='main__img'
					width='640'
					height='360'
				/>
				<div className='main__text'>
					<p className='description'>{description}</p>
					<div className='nutrition'>
						<p className='sub__heading'>Nutritional info:</p>
						<ul>
							{nutrition.map((nutrientDetails, idx) => (
								<ListItem key={idx} details={nutrientDetails} />
							))}
						</ul>
					</div>
					<div className='row'>
						<div className='col'>
							<p className='sub__heading'>Ingredients:</p>
							<ul>
								{ingredientList.map((ingredient, idx) => (
									<ListItem key={idx} details={ingredient} />
								))}
							</ul>
						</div>
						<div className='col'>
							<div className='recipe'>
								<p className='sub__heading'>Instructions:</p>
								<ol>
									{recipe?.map((instr: string, idx: number) => (
										<li key={idx}>{instr}</li>
									))}
								</ol>
							</div>
							<em className='servings'>Serves: {servings}</em>
						</div>
					</div>
				</div>
			</main>
		</StyledSmoothie>
	);
};

export default SmoothieDetails;
