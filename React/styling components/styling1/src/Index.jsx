import "./index.css";

export function Index({children, fun}) {
  return (
    <div className="welcome" onMouseMoveCapture={fun}>
      <h1>Welcome</h1>
      {children}
    </div>
  );
}
