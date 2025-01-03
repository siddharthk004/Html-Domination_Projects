import React, { useState } from "react";

function State() {
  const [variable, setvariable] = useState(false);
  return (
    <div>
      val: {variable.toString()}
      <h1>
        {" "}
        {variable == false
          ? "Thank Your Are Fail"
          : "Oops You Are Unfortuntly Pass"}
      </h1>
      <button
        onClick={()=>setvariable(()=> !variable )}
        className={`px-2 py-1 ${
          variable == true ? "bg-blue-600" : "bg-red-600"
        } rounded-full mt-2 text-white text-xs`}
      >
        Change
      </button>
    </div>
  );
}

export default State;
