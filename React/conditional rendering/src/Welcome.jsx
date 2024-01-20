import Age from "./Age";

const Welcome = ({ name, age }) => {
  return (
    <>
      <p>
        Welcome <strong>{name}</strong>!
      </p>

      {age > 18 && <Age prop={age}> greater than 18</Age>}

      {age && <Age prop={age}> present</Age>}

      {age > 18 && age <= 65 && (<Age prop={age}>greater than 18 and less than 65 </Age>)}

      {age > 18 && age <= 65 && name === "John" && (<Age prop={age}>greater than 18, less than 65 and the name prop is equal to John</Age>
      )}
    </>
  );
};

export default Welcome;


