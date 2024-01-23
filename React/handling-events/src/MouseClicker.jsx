function MouseClicker({ name }) {
  const handleClick = (event) => {
    console.log(event.target.name);
  };

  return <button name={name} onClick={handleClick}>premi</button>;
}

export default MouseClicker;
