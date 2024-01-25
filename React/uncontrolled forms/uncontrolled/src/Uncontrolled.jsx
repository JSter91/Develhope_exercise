function Uncontrolled(){
    function handleFormSubmit(event){
        event.preventDefault()
        const username= event.target.elements.namedItem("username").value
        const password= event.target.elements.namedItem("password").value
        const session= event.target.elements.namedItem("session").checked


        console.log(username, password, session);

        const data = {
            username,
            password,
            session
        }
        console.log(data);
    }
    return (
        <>
        <form action="" onSubmit={handleFormSubmit}>
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
    )
}

export default Uncontrolled