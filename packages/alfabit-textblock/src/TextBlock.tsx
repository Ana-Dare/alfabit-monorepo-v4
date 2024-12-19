import React from 'react';
import { Wrapper, Title, Description } from './TextBlock.styles';

export interface TextBlockProps {
	title: string;
	description: string;
}

export const TextBlock: React.FC<TextBlockProps> = ({ title, description }) => {
	return (
		<Wrapper>
			<Title>{title}</Title>
			<Description>{description}</Description>
		</Wrapper>
	);
};
