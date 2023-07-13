import { createContext, useState } from "react";
import PropTypes from "prop-types";

import { UZ } from "../data/uz";
import { RU } from "../data/ru";
import { EN } from "../data/en";
import { LANGUAGE } from "../constants";

export const languageContext = createContext();

const LanguageContext = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem(LANGUAGE) || "en");
  const changeLang = (type) => {
    localStorage.setItem(LANGUAGE, type);
    const languages = {
      uz: UZ,
      ru: RU,
      en: EN,
    };
    return languages[type];
  };

  const state = {
    lang: changeLang(lang),
    type: lang,
    setLang,
  };
  return (
    <languageContext.Provider value={state}>
      {children}
    </languageContext.Provider>
  );
};

LanguageContext.propTypes = {
  children: PropTypes.node,
};

export default LanguageContext;
