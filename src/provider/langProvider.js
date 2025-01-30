import LangContext from "../context/langContext";

import React, {useState} from "react";

const LangProvider = ({children}) => {
    const [lang, setLang] = useState("en");

    const changeLang = (lang) => {
        setLang(lang);
    }

    return (
        <LangContext.Provider value={{lang, changeLang}}>
            {children}
        </LangContext.Provider>
    );
}

export default LangProvider;