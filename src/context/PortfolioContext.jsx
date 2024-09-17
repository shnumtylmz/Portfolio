import { createContext, useState } from "react";

const PortfolioContext = createContext();

export const PortfolioProvider = ({children}) => {
    const [contact, setContact] = useState(null);
    return <>
    <PortfolioContext.Provider value={{contact, setContact}}>
        {children}
    </PortfolioContext.Provider>
    </>
};

export default PortfolioContext;