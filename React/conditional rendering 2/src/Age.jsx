function Age({ prop, children }) {
  return (
    <>
    {children}
    {prop > 18 && <p>Your age is {prop}</p>}
    {prop < 18 && <p>You are very young!</p>}

    </>
  );
}

export default Age;
