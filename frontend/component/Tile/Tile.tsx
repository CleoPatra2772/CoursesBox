import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';


import { borderRadius, boxShadow } from '../../component/styles';



const Section = styled.section `
${borderRadius};
padding: 1vmin 4vmin 4vmin;
background: ${({ theme }) => theme.background};
color: ${({ theme }) => theme.font.regular};
${({theme}) => boxShadow(theme.components.shadow1, theme.components.shadow2)};


`;

export interface Props{
    // Header String
    header: ReactNode;
    children: React.ReactNode;
};


export const Tile: FC<Props> = ({ header, children, ...rest }) => (
<Section {...rest}>
    <h2>{header}</h2>
    {children}
    </Section>
);


// ${({theme}) => boxShadow(theme.components.shadow1, theme.components.shadow2)};
// ${borderRadius};