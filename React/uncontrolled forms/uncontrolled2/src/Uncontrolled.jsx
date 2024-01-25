function Uncontrolled() {
  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      session: formData.get("session") === "on" ? true : false,
    };
    console.log(data);
  }
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h1>My uncontrolled form</h1>
        <input name="username" type="text" placeholder="username" />
        <br />
        <input name="password" type="password" placeholder="password" />
        <br />
        <label htmlFor="check">check</label>
        <input id="check" name="session" type="checkbox" />
        <br />
        <button>Login</button>
        <button type="reset">Reset</button>
      </form>
    </>
  );
}

export default Uncontrolled;

/* The use of FormData can be advantageous when dealing with complex forms or when handling file uploads.
 However, in simpler situations, it might be easier and more straightforward to directly obtain input values from the form elements. 
*/
