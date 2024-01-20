function Age({ prop, children }) {
  return (
    <>
      {children}
      <p>Your age is {prop}</p>
    </>
  );
}

export default Age;
