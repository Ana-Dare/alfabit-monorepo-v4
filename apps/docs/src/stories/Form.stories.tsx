import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@cicatrizdev/alfabit-input';

const meta = {
	title: 'Organismos/Form',
	component: () => <div>Hello world</div>,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	// args: { disabled: false, placeholder: 'Placeholder' },
} satisfies Meta<typeof Input>;

export default meta;
// type Story = StoryObj<typeof meta>;
