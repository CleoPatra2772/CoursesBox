

import { FC, ChangeEventHandler, InputHTMLAttributes, ReactNode, forwardRef, ForwardedRef } from 'react';
import styled from "@emotion/styled";
import { boxShadow } from '../styles';
import { useId } from '../../component/hooks/useId';
import { AvailableIcons, Icon } from '../Icon';

type WrapperProps ={
  height?: number;
  width?: number;
  isLabelVisible?: boolean;
  isFeedbackVisible?: boolean;
};


const Wrapper = styled.label<WrapperProps>`
display: grid;
  gap: 0.1rem;
  grid-template-areas: 
  "label"
  "input"
  "feedback";
  grid-template-rows: ${({ isLabelVisible, isFeedbackVisible}) =>{ 

  if(isLabelVisible && isFeedbackVisible) {
  return "1fr 3fr 1fr";
}else if (isLabelVisible) {
  return "1fr 4fr 0fr";
}else if (isFeedbackVisible){
  return "0fr 4fr 1fr";
}else {
  return "0fr 1fr 0fr";
}


}};

  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;
  color: ${({ theme }) => theme.font.regular};
  font-size: 1rem;
  
`;

const InputWrapper = styled.div`
grid-area: input;
display: flex;
position: relative;
align-items: center;
width: 100%;
height: 100%;
`;



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



const StyledIcon = styled(Icon)`
 
  position: absolute;
  right: 0.3rem;
  color: ${({ theme }) => theme.font.placeholder};
  opacity: 0.7;
`;



// const Text = styled.span`
// padding-left: 1.4rem;
// `

const Label = styled.span`
grid-area: label;
padding-left: 1.4rem;
`;

const Feedback = styled(Label)`
grid-area: feedback;
`;

export type Props = {
  /** Input label */
  label?: string;
  /** Placeholder  */
  placeholder: string;
  /** onChange handler */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /** Icon */
  icon?: AvailableIcons;
  /** Feedback for input */
  feedback?: ReactNode;
  // height?: number;
  // width?: number;
} & WrapperProps;

export const Input: FC<Props & InputHTMLAttributes<HTMLInputElement>> = 
forwardRef(
  (
    {label, height =7, width=20, icon, feedback, className, ...rest},
    ref
  ) => (
  <Wrapper 
  isLabelVisible={Boolean(label)}
  isFeedbackVisible={Boolean(feedback)}
  height={height} 
  width={width} 
  className={className}>
     <Label>{label}</Label>
    <InputWrapper>
    <StyledInput ref={ref as ForwardedRef<HTMLInputElement>}
     {...rest} />
    {icon && <StyledIcon name={icon} />}
    </InputWrapper>
    <Feedback role="alert">{feedback}</Feedback>
    
  </Wrapper>
));

Input.displayName = "Input";




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