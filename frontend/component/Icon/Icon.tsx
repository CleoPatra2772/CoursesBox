import { FC } from "react";
import styled from "@emotion/styled";
import { Icons } from "./Icons";

export type AvailableIcons = keyof typeof Icons;

export type Props = {
  /** Icon name */
  name: AvailableIcons;
  size?: number;
} & React.SVGProps<SVGSVGElement>;


export const Icon: FC<Props> = ({ name, size = 2, ...rest }) => {
const Icon = styled(Icons[name])`
color: ${({ theme }) => theme.font.regular};
`;
const sizeInRem = `${size}rem`;
const sizes = { width: sizeInRem, height: sizeInRem };

return <Icon role="img" aria-label={name} {...sizes} {...rest} />;
};
// import { FC } from 'react';
// import styled from "@emotion/styled";
// import { Icons } from "./Icons";
// import { css } from "@emotion/react";


// export type AvailableIcons = keyof typeof Icons;

// // type WrapperProps = {
// //     // Width and Height
// //     // size?: string;
// //     size?: number;
// // };

// export type Props = {
//     // Icon Name
    
//     name: AvailableIcons;
   
// // } & WrapperProps & React.SVGProps<SVGSVGElement>;

// // const Wrapper = styled.div<WrapperProps>`
// //   color: ${({ theme }) => theme.font.regular};


// //   ${({ size }) => {
// //     const sizeInRem = `${size}rem`;
// //     return css`
// //       width: ${sizeInRem};
// //       height: ${sizeInRem};
// //     `;
// //   }}
// // `;
// size?: number;
// } & React.SVGProps<SVGSVGElement>;

// export const Icon: FC<Props> = ({ name, size = 2, ...rest}) => {
//     const Icon = styled(Icons[name])`
//     color: ${({ theme }) => theme.font.regular}`
//     //const sizes = { width: size, height: size};
//     const sizeInRem = `${size}rem`;
//     const sizes = { width: sizeInRem, height: sizeInRem };
//     // return (
        
//     // <Wrapper size={size}>
//     // <Icon {...sizes} {...rest} />
//     // </Wrapper>
//     // );

//     return <Icon role="img" aria-label={name} {...sizes} {...rest} />;
// };