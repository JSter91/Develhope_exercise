import React from 'react'
import { useContext } from 'react'
import { LanguageContext } from "./LanguageContext";


function Title() {
    const language = useContext(LanguageContext);

    return (

    <div>title: {language}</div>
  )
}

export default Title