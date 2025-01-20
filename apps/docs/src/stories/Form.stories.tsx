import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@cicatrizdev/alfabit-input';
import { Button } from '@cicatrizdev/alfabit-button';
import styled from 'styled-components';
import { fn } from '@storybook/test';
import { violet } from '@cicatrizdev/alfabit-tokens';

type FormProps = {
	onSubmit: () => void;
	fields: {
		label: string;
		placeholder: string;
	}[];
};

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	background-color: ${violet.quaternary};
	padding: 8rem;
	border-radius: 2rem;
`;

const StyledInputField = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-bottom: 1rem;
`;

const StyledButtonField = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const Form = (props: FormProps) => {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		props.onSubmit();
	};
	return (
		<div style={{ width: '60vw' }}>
			<StyledForm onSubmit={handleSubmit}>
				{props.fields.map((field) => (
					<StyledInputField key={field.label}>
						<Input label={field.label} placeholder={field.placeholder} />
					</StyledInputField>
				))}
				<StyledButtonField>
					<Button>Enviar</Button>
				</StyledButtonField>
			</StyledForm>
		</div>
	);
};

const meta = {
	title: 'Organismos/Form',
	component: Form,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: {
		onSubmit: fn(),
		fields: [
			{ label: 'Nome', placeholder: 'ex: João da Silva' },
			{ label: 'Email', placeholder: 'ex: joaodasilva@gmail.com' },
		],
	},
	argTypes: {
		onSubmit: { action: 'submit', description: 'Evento de disparo ao enviar o formulário' },
		fields: { description: 'Campos do formulário' },
	},
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		onSubmit: fn(),
		fields: [
			{ label: 'Nome', placeholder: 'ex: João da Silva' },
			{ label: 'Email', placeholder: 'ex: joaodasilva@gmail.com' },
		],
	},
};
