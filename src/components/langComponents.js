import LangContext from "../context/langContext";

import {React, useContext} from "react"

const LangComponents = () => {

        const {lang, changeLang} = useContext(LangContext);

        const language =  ["en", "fr", "sp"];

        return (
            <div className="change-language">
                {language.map((item, index) => (
                    <button key={index} onClick={() => changeLang(item)} className={item===lang? "selected" : "" }>{item} </button>
                ))}
            </div>
        );

}

export default LangComponents;