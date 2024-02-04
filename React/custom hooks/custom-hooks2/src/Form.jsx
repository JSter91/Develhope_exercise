import React from 'react';
import UseForm from './UseForm';

function Form() {
  const { formData, handleUsernameChange, handlePasswordChange } = UseForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={formData.username}
          onChange={(e) => handleUsernameChange(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={formData.password}
          onChange={(e) => handlePasswordChange(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Invia</button>
    </form>
  );
}

export default Form; 
 