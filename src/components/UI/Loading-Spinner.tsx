import React from 'react';
import styled from '@emotion/styled';

const StyledSpinner = styled.div`
	will-change: transform;
	width: 50px;
	height: 50px;
	margin-inline: auto;
	border-radius: 50%;
	border: 2px solid #ddd;
	border-right-color: var(--secondary);
	animation: loading linear 1.25s infinite forwards;
`;
const LoadingSpinner = () => {
	return <StyledSpinner></StyledSpinner>;
};

export default LoadingSpinner;
