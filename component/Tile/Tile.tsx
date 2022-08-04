import { FC } from 'react';
import styled from '@emotion/styled';

import { borderRadius, boxShadow } from '@/component/styles';

interface Props{
    header: string;
    children: React.ReactNode;
}

const Section = styled.section `
${({theme}) => boxShadow(theme.components.shadow1, theme.components.shadow2)};
${borderRadius};

`;


export const Tile: FC<Props> = ({ header, children }) => (
<Section>
    <h2>{header}</h2>
    {children}
    </Section>
);


// ${({theme}) => boxShadow(theme.components.shadow1, theme.components.shadow2)};
// ${borderRadius};