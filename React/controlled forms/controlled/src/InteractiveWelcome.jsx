import { useState } from "react";
import Welcome from "./Welcome";

function InteractiveWelcome() {
  const createForm = () => {
    return {
      name: "",
      password: "",
      session: false,
    };
  };

  const [data, setData] = useState(createForm());

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const session = e.target.checked;
    const type = e.target.type;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? session : value,
      };
    });
  };

  const reset = (e) => {
    e.preventDefault();
    setData({ name: "", password: "", session: false });
  };

  const handleLog = (e) => {
    e.preventDefault();

    console.log(data);
  };

  return (
    <form onSubmit={handleLog} action="">
      <div>
        <Welcome
          name={JSON.stringify(data.name)}
          password={JSON.stringify(data.password)}
          session = {data.session}
        />
        <input
          name="password"
          type="password"
          value={data.password}
          onChange={handleInputChange}
          placeholder="password"
        />
        <br />

        <input
          name="name"
          type="text"
          value={data.name}
          onChange={handleInputChange}
          placeholder="Inserisci il tuo nome"
        />
        <br />
        <input
          name="session"
          type="checkbox"
          checked={data.session}
          onChange={handleInputChange}
        />
        <button onClick={reset}>reset</button>
        <button disabled={!data.name || !data.password || data.session === false}>Login</button>
      </div>
    </form>
  );
}

export default InteractiveWelcome;
