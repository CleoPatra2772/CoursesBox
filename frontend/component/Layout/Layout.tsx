import { FC, useState, useLayoutEffect, useEffect } from "react";
import Link from "next/link";
import styled from '@emotion/styled';


import { Logo } from "../Logo/Logo";
import { Input} from "../Input/Input";
import { IconButton } from "../IconButton";
import { StyledLink } from "../StyledLink";
import { ThemeProvider } from "@emotion/react";
import { Themes } from "@/styles/themes";


import {
    Wrapper,
    LogoLink,
    StyledLogo,
    MainNav,
    SearchInput,
    Content,
    Footer,
} from "./components";

interface Props {
    children: React.ReactNode;
   // isDark: boolean;
   // onThemeToggle: () => void;
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

 export const Layout: FC<Props> = ({ children }) => {
    const [isDark, setIsDark ] = useState(true);

    const toggleDark = () => {
        localStorage.setItem("theme", isDark? "light" : "dark");
        setIsDark(!isDark);
    }

    useIsomorphicLayoutEffect(() => {
        const theme = localStorage.getItem("theme");
        const themeExistsInStorage = Boolean(theme !== null);

        setIsDark(
            themeExistsInStorage 
            ? Boolean(theme === "dark")
            : window.matchMedia("(prefers-color-scheme: dark)").matches
        );
        // const isDark =
        //   Boolean(localStorage.getItem("theme") === "dark") ||
        //   window.matchMedia("prefers-color-scheme: dark").matches;
        //   setIsDark(isDark);
        }, []);


   const theme = Themes[isDark ? "dark" : "light"];
    
    return (
        <ThemeProvider theme={theme}>
    <Wrapper>
       
        <Link href="/" passHref >
        <LogoLink>
        <StyledLogo size={3}>
            <span className="logo_short">C8X</span>
            <span className="logo_full">CoursesBox</span>
        </StyledLogo>
        </LogoLink>
        </Link>
        <MainNav>
            <Link href="/all" passHref>
                <StyledLink>All</StyledLink>
            </Link>
            <Link href="/login" passHref>
                <IconButton name="Login" size={1}/>
                </Link>
            
        <IconButton name={!isDark ? "Moon" : "Sun"} size={1} onClick={toggleDark} />
        </MainNav>
        <SearchInput icon="Search" placeholder="Search" onChange= {() => null} />
        <Content>{children}</Content>
        <Footer>
        © {new Date().getFullYear()} CleoGao. All rights reserved.
        </Footer>
    </Wrapper>
    </ThemeProvider>
    )
}
