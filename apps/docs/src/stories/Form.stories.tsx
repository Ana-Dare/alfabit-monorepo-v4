import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@cicatrizdev/alfabit-input';
import { Button } from '@cicatrizdev/alfabit-button';
import styled from 'styled-components';

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

const Form = () => {
	return (
		<StyledForm>
			<StyledInputField>
				<StyledInput label='Nome' placeholder='ex: João da Silva' />
			</StyledInputField>
			<StyledInputField>
				<StyledInput label='Email' placeholder='ex: joaodasilva@gmail.com' />
			</StyledInputField>
			<StyledButtonField>
				<Button>Enviar</Button>
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

export const Primary: Story = {};
