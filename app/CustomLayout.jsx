"use client";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ThemeProvider as NextThemesProvider } from "next-themes";

function CustomLayout({ children }) {
  return (
    <>
      <ProgressBar
        height="4px"
        color="black"
        options={{ showSpinner: false }}
        shallowRouting
      />
      {/* next-theme thorwing an error */}
      <NextThemesProvider>  
        <Navbar />
        {children}
        <Footer />
      </NextThemesProvider>
    </>
  );
}

export default CustomLayout;
