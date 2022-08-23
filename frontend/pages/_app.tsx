
import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { Layout } from "../component/Layout";


function MyApp({ Component, pageProps }: AppProps) {

  return (
  <Provider store={store}>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </Provider>
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