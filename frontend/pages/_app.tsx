
import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { Themes } from "@/styles/themes";
import { Layout } from "../component/Layout";


function MyApp({ Component, pageProps }: AppProps) {
  // const [isDark, setIsDark] = useState(false);
  // const toggleDark = () => {
  //   localStorage.setItem("theme", isDark? "light" : "dark")
  //   setIsDark(!isDark)};

  // useEffect(()=>{
  //   const isDark = Boolean(localStorage.getItem("theme") === "dark");

  //   setIsDark(window.matchMedia("prefers-color-scheme: dark").matches || isDark);
  // },[]);


  return (
    
  <Layout >
    <Component {...pageProps} />
    </Layout>
  
    )

}

export default MyApp


// const [isDark, setIsDark] = useState(false);
//   const toggleDark = () => setIsDark(!isDark);
//   useEffect(() => {
//     setIsDark(window.matchMedia("prefers-color-scheme: dark").matches);
//   }, []);
//   const theme = Themes[isDark ? "dark" : "light"];
//   return (
//     <ThemeProvider theme={theme}>
//   <Layout isDark={isDark} onThemeToggle={toggleDark}>
//     <Component {...pageProps} />
//     </Layout>
//     </ThemeProvider>
//     )

// }