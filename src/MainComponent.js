import React, { useState } from "react";

const MainComponent = () => {
  const [set, setData] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setData(set + 1);
        }}
      >
        Increment
      </button>
      {set}
      <button
        onClick={() => {
          setData(set - 1);
        }}
      >
        Decremnet
      </button>
    </>
  );
};

export default MainComponent;
