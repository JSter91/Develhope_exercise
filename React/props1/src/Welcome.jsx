function Welcome({ name }) {
  return (
    <>
      <p>Welcome {name}!</p>
    </>
  );
}

export default Welcome

// What happens if no name prop is passed to the Welcome component? 
// Can you set a default value for the name prop?

// If no 'name' prop is passed to the 'Welcome' component, the value of 'name' inside the component function will be undefined. 
// However, it is possible to set a default value for the 'name' prop using the default parameter syntax in function parameters.

// example :

/* function Welcome({ name= "guest" }) {
  return (
    <>
      <p>Welcome {name}!</p>
    </>
  );
}

export default Welcome
 */
