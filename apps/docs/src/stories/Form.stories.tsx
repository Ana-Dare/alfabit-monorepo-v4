import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@cicatrizdev/alfabit-input';
import { Button } from '@cicatrizdev/alfabit-button';
import styled from 'styled-components';
import { fn } from '@storybook/test';

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
`;

const StyledInputField = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-bottom: 1rem;
`;

const StyledInput = styled(Input)`
	width: 100%;
`;

const StyledButtonField = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const Form = (props: FormProps) => {
	return (
		<StyledForm>
			{props.fields.map((field) => (
				<StyledInputField key={field.label}>
					<StyledInput label={field.label} placeholder={field.placeholder} />
				</StyledInputField>
			))}
			<StyledButtonField>
				<Button onClick={props.onSubmit}>Enviar</Button>
			</StyledButtonField>
		</StyledForm>
	);
};

const meta = {
	title: 'Organismos/Form',
	component: Form,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	// args: { disabled: false, placeholder: 'Placeholder' },
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
