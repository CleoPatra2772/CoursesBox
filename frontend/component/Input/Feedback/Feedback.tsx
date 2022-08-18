import styled from '@emotion/styled';
import { FC } from 'react';

type Props ={ 
    isValid?: boolean;
    
};

type ConditionProps = {
    children?: React.ReactNode;
}

export const Feedback = styled.span<Props> `
color: ${({ isValid, theme}) => 
isValid? theme.font.valid: theme.font.invalid
};`

export const ConditionalFeedback: FC<ConditionProps> = ({ children }) => (
    children ? <Feedback>{children}</Feedback> : <>&nbsp;</>
)