import { forwardRef, ForwardedRef, FC, MouseEvent} from 'react';
import styled from '@emotion/styled';
import { boxShadow, transition } from '../styles';
import { Icon, Props as IconProps} from '../Icon';
import { css } from "@emotion/react";


type ButtonProps = { size: string };

const Button = styled.button<ButtonProps> `
all: unset;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
${({ size }) => css`
    width: ${size};
    height: ${size};
  `}
border-radius: 50%;

${transition()};

${({ theme }) => 
boxShadow(theme.components.shadow1, theme.components.shadow2)}


&:active {
${({ theme }) =>
boxShadow(theme.components.shadow1, theme.components.shadow2, true)}
}

&:hover {
    opacity: 0.9;
  }

`;



export type Props = {
    // onCLick callback
    onClick?:(event: MouseEvent<HTMLButtonElement> ) => void;
} & Omit<IconProps, "ref">;


export const IconButton: FC<Props> = forwardRef(
  ({ onClick, ...props }, ref) => (
    <Button
      onClick={onClick}
      size={`${(props.size || 2) * 2}rem`}
      title={props.name}
      ref={ref as ForwardedRef<HTMLButtonElement>}
    >
      <Icon {...props} />
    </Button>
  )
);
