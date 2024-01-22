function MouseClicker() {

  const handleClick = (event) => {
    console.log(event.currentTarget.name);
  };

  const handleClickImage = (event) => {
    console.log(event.target.src);
    event.stopPropagation()
  };




  return (
    <button name="one" onClick={handleClick}>
      <img onClick={handleClickImage} src="#" alt="#" width={24} height={24} />
      Click me
    </button>
  );
}

export default MouseClicker;
