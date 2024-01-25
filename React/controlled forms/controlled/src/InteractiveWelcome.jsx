import { useState } from "react";
import Welcome from "./Welcome";
useState;
function InteractiveWelcome() {

  const handleInputChange = (e) => {
    setName(()=> e.target.value);
  };

  return (
    <div>
      <Welcome name={name} />
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Inserisci il tuo nome"
      />
    </div>
  );
}

export default InteractiveWelcome;
