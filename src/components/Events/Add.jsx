import React, { useEffect, useState } from "react";
const AddEvent = () => {
  const [ctrls, setCtrls] = useState([{ name: "Ahmad" }]);
  const addctrl = (e, i) => {
    e.preventDefault();
    setCtrls([...ctrls, ctrls.push({ name: "Mohammad" })]);
  };
  useEffect(() => {
    console.log("load");
  }, []);
  return (
    <>
      <form>
        {ctrls.map((c, i) => (
          <input name={c.name} key={i} type="input" value={c.name} />
        ))}
        <button className="primary" onClick={addctrl}>
          Add new
        </button>
      </form>
    </>
  );
};

export default AddEvent;
