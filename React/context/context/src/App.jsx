import React, { useState } from "react";
import "./App.css";
import { useContext } from "react";
import { Clock } from "./Clock";
import { LanguageContext } from "./LanguageContext";

function App() {
  const defaultLanguage = useContext(LanguageContext);
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div>
      <label htmlFor="language">Select Language: </label>
      <select
        name="language"
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        <option value="ita">Italiano</option>

        <option value="eng">English</option>
      </select>

      <LanguageContext.Provider value={selectedLanguage}>
        <Clock />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
