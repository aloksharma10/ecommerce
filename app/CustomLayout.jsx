"use client";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

function CustomLayout({ session, children }) {
  return (
    <>
      <SessionProvider session={session}>
        <ProgressBar
          height="4px"
          color="black"
          options={{ showSpinner: false }}
          shallowRouting
        />
        <Toaster position="top-center" reverseOrder={true} />
        {/* next-theme thorwing an error */}
        {/* <NextThemesProvider attribute="class"  defaultTheme="system" enableSystem> */}
        <Navbar />
        {children}
        <Footer />
        {/* </NextThemesProvider> */}
      </SessionProvider>
    </>
  );
}

export default CustomLayout;
