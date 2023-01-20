import styled from '@emotion/styled';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { postFeedback } from '../queries/post-feedback';
import { useNavigate } from 'react-router-dom';
import { feedbackBody } from '../types';

const StyledContactUsPage = styled.div`
	.message {
		text-align: center;
	}
	form {
		display: flex;
		flex-direction: column;
		row-gap: 1.5em;
		padding: 2em 4em;

		.form__group {
			display: flex;
			row-gap: 0.5em;
			flex-direction: column;
			& label {
				font-weight: 600;
			}
		}

		button {
			width: max-content;
			align-self: center;
			padding: 0.5em 1em;
			border-radius: 0.5rem;
			background-color: var(--button-color-primary);
			color: var(--button-text-color);
		}
	}
`;
const ContactUs = () => {
	const emailRef = useRef<HTMLInputElement | null>(null);
	const nameRef = useRef<HTMLInputElement | null>(null);
	const messageRef = useRef<HTMLTextAreaElement | null>(null);
	const [sentMessage, setSentMessage] = useState<boolean | null>(null);
	const navigate = useNavigate();
	const { mutate } = useMutation({
		mutationFn: postFeedback,
	});
	useEffect(() => {
		let timerID: number;
		if (sentMessage) {
			timerID = setTimeout(() => {
				setSentMessage(null);
				navigate('/');
			}, 3000);
		}
		return () => {
			clearTimeout(timerID);
		};
	}, [sentMessage]);

	const handleSubmit = (evt: FormEvent) => {
		evt.preventDefault();
		const messageBody: feedbackBody = {
			name: nameRef.current?.value || null,
			email: emailRef.current?.value || null,
			message: messageRef.current?.value || null,
		};
		mutate(messageBody, {
			onSuccess: () => {
				setSentMessage(true);
			},
		});
	};
	return (
		<StyledContactUsPage className='container'>
			<h4>
				Have feedback or want us to add one of your smoothie recipes, please
				fill the below form and we will get back to you soon.
			</h4>
			{sentMessage ? (
				<p className='message'>Message sent Successfully</p>
			) : null}
			<form onSubmit={handleSubmit}>
				<div className='form__group'>
					<label htmlFor='name'>Name*:</label>
					<input type='text' name='name' id='name' ref={nameRef} />
				</div>
				<div className='form__group'>
					<label htmlFor='email'>Email*:</label>
					<input type='email' name='email' id='email' ref={emailRef} />
				</div>
				<div className='form__group'>
					<label htmlFor='message'>Message*:</label>
					<textarea
						name='message'
						id='message'
						required
						rows={7}
						ref={messageRef}
					/>
				</div>
				<button className='btn'>Send message</button>
			</form>
		</StyledContactUsPage>
	);
};

export default ContactUs;
