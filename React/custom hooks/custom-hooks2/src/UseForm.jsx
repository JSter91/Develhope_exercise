import { useState } from 'react';

function UseForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return {
    formData,
    handleUsernameChange: (value) => handleInputChange('username', value),
    handlePasswordChange: (value) => handleInputChange('password', value),
  };
}

export default UseForm;