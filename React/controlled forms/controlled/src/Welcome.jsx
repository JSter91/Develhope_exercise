function Welcome({name, password, session}){
    return(
        <>
        <h2>Welcome {name}</h2>
        <p>password: {password}</p>
        <p>session {session}</p>
        </>
    )
}

export default Welcome