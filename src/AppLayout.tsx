import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { ThemeProvider } from "@/components/theme-provider";
// import { LanguageContext } from "./data/data"
import { createContext, useState, Dispatch, SetStateAction } from "react";
import Footer from "./components/Footer";

interface LanguageContextType {
    language: string;
    setLanguage: Dispatch<SetStateAction<string>>;
  }
  
export const LanguageContext = createContext<LanguageContextType>({
    language: "english",
    setLanguage: () => {} 
});
  
export default function AppLayout() {
    const [language, setLanguage] = useState("english")
    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Header />
                <Outlet />
                <Footer />
            </ThemeProvider>
        </LanguageContext.Provider>
  );
}

