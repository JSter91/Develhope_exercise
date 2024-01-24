import { useState } from "react";
function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    session: false
  });

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const check = event.target.checked;
    const type = event.target.type;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? check : value,
      };
    });
  }

  return (
    <>
      <h1>Login</h1>
      <input
        name="username"
        value={data.username}
        type="text"
        placeholder="username"
        onChange={handleInputChange}
      />
      <br />
      <input
        name="password"
        value={data.password}
        type="password"
        placeholder="password"
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="in">remember</label>
      <input
        name="session"
        id="in"
        type="checkbox"
        checked={data.session}
        onChange={handleInputChange}
      ></input>
      <br />
      <br />

      <pre>{JSON.stringify(data, null, 1)}</pre>
    </>
  );
}

export default Login;
