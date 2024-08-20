import React from "react";

function Time() {
  let time = new Date();
  return (
    <div>
      <p className="mb-0">This is the current time:</p>
      <h3 className="mb-5">
        {time.toLocaleDateString()} - {time.toLocaleTimeString()}
      </h3>
    </div>
  );
}

export default Time;
