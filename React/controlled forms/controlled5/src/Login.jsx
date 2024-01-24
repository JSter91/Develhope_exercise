import { useState } from "react";
function Login({ onLogin }) {
  let [data, setData] = useState({
    username: "",
    password: "",
    session: false,
  });

  function handleInputChange(event) {
    const { name, value, checked, type } = event.target;
    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  const isLoginDisabled = !data.username || !data.password;

  const handleLoginClick = (event) => {
    event.preventDefault()
    if (!isLoginDisabled) {
      onLogin(data);
    }
  };

  const handleResetLogin = () => {
    setData(() => {
      return {
        username: "",
        password: "",
        session: false,
      };
    });
  };

  return (
    <>
      <h1>Login</h1>
      <form action="" onSubmit={handleLoginClick}>
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
      <button type="submit" disabled={isLoginDisabled}>
        Login
      </button>
      <br />
      <br />
      <button onClick={handleResetLogin} disabled={!data.username && !data.password && !data.session}>
        Reset
      </button>
      </form>

      <pre>{JSON.stringify(data, null, 1)}</pre>
    </>
  );
}

export default Login;
