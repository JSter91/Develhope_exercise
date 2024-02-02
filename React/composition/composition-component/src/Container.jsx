import { useState } from "react";
import "./Container.css";


function Container({ children, title }) {

    const [collapsed, setCollapsed] = useState(false)

    function handleToggleCollapse(){
        setCollapsed(t => !t)
    }
  return (
    <>
      <div className="child">
        <div>{title} <button onClick={handleToggleCollapse}>toggle</button></div>
        {collapsed && <div>{children}</div>}
      </div>
    </>
  );
}

export default Container;
