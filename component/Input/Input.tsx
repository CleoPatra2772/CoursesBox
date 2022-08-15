

import { FC, ChangeEventHandler, InputHTMLAttributes, ReactNode } from 'react';
import styled from "@emotion/styled";
import { boxShadow } from '../styles';
import { useId } from '@/component/hooks/useId';
import { AvailableIcons, Icon } from '../Icon';



const StyledInput = styled.input`
  all: unset;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  font-size: 1.4rem;
  padding: 0 2.6rem 0 1.4rem;
  color: ${({ theme }) => theme.font.regular};
  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2, true)}
  &::placeholder {
    color: ${({ theme }) => theme.font.placeholder};
  }
  &:focus {
    ${({ theme }) =>
      boxShadow(theme.components.shadow1, theme.components.shadow2)}
    ~ svg {
      color: ${({ theme }) => theme.font.regular};
      opacity: 1;
    }
  }
`;

type LabelProps ={
  height?: number;
  width?: number;
};


const Label = styled.label<LabelProps>`
display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;
  color: ${({ theme }) => theme.font.regular};
  font-size: 1rem;
  
`;

const StyledIcon = styled(Icon)`
 
  position: absolute;
  right: 0.3rem;
  color: ${({ theme }) => theme.font.placeholder};
  opacity: 0.7;
`;

const InputWrapper = styled.div`
display: flex;
position: relative;
align-items: center;
width: 100%;
heigth: 100%;
`

const Text = styled.span`
padding-left: 1.4rem;
`

export type Props = {
  /** Input label */
  label?: string;
  /** Placeholder  */
  placeholder: string;
  /** onChange handler */
  onChange: ChangeEventHandler<HTMLInputElement>;
  /** Icon */
  icon?: AvailableIcons;
  /** Feedback for input */
  feedback?: ReactNode;
  // height?: number;
  // width?: number;
} & LabelProps;

export const Input: FC<Props & InputHTMLAttributes<HTMLInputElement>> = ({
  label,
  height = 7,
  width = 20,
  icon,
  feedback,
  className,
  ...props
}) => (
  <Label height={height} width={width} className={className}>
    {label && <Text>{label}</Text>}
    <InputWrapper>
    <StyledInput 
     {...props} />
    {icon && <StyledIcon name={icon} />}
    </InputWrapper>
    {feedback && <Text>{feedback}</Text>}
    
  </Label>
);




// import { FC, ChangeEventHandler, InputHTMLAttributes, ReactNode } from 'react';
// import styled from "@emotion/styled";
// import { boxShadow } from '../styles';
// import { useId } from '@/component/hooks/useId';
// import { AvailableIcons, Icon } from '../Icon';

// type StyledInputProps = {
//     withIcon: boolean;
//   };


// const StyledInput = styled.input<StyledInputProps>`
// all: unset;
// width: 20rem;
// height: 4rem;
// border-radius: 1rem;
// font-size: 1.4rem;
// padding-left: padding-left: ${({ withIcon }) => (withIcon ? 2.8 : 1.4)}rem;
// color: ${({ theme }) => theme.font.regular};
// ${({ theme }) =>
//     boxShadow(theme.components.shadow1, theme.components.shadow2, true)}
//   &::placeholder {
//     color: ${({ theme }) => theme.font.placeholder};
//   }
//   &:focus {
//     ${({ theme }) =>
//       boxShadow(theme.components.shadow1, theme.components.shadow2)}
//     ~ svg {
//       color: ${({ theme }) => theme.font.regular};
//       opacity: 1;

//     }
//   }
// `;

// const Label = styled.label`
// color: ${({ theme }) => theme.font.regular};
// font-size: 1rem;
// padding-left: 1.4rem;
// `;

// const StyledIcon = styled(Icon)`
// display: block;
// margin-top: -3rem;
// padding-left: 0.5rem;
// color:${({ theme }) => theme.font.placeholder};
// opacity: 0.7;
// `;

// export type Props = {
//     label: string;
//     onChange: ChangeEventHandler<HTMLInputElement>;
//     icon?: AvailableIcons;
//     feedback?: ReactNode;
// };

// export const Input: FC<Props & InputHTMLAttributes <HTMLInputElement>> = ({
//     label,
//     icon,
//     feedback,
//     ...props
    
// }) => {
//     const fieldId = useId();
//     return (
//     <label>
//         {label}
//         <br />
//         <StyledInput withIcon={Boolean(icon)} { ...props} />
//         {icon && <StyledIcon name={icon} />}
//         <br />
//         <label>{feedback}</label>
//     </label>
//     )
// }