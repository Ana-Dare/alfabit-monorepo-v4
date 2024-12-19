import type { Meta, StoryObj } from '@storybook/react';
import { TextBlock } from '@cicatrizdev/alfabit-textblock';

const meta = {
	title: 'Moléculas/TextBlock',
	component: TextBlock,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: {
		title: 'Título',
		description:
			'Mussum Ipsum, cacilds vidis litro abertis.  Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.',
	},
	argTypes: {
		title: {
			control: {
				type: 'text',
			},
		},
		description: {
			control: {
				type: 'text',
			},
		},
	},
} satisfies Meta<typeof TextBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		title: 'Título',
		description:
			'Mussum Ipsum, cacilds vidis litro abertis.  Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.',
	},
};
