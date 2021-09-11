import { useState } from "react";

export const Count = () => {
  const [count, setCount] = useState(0);

  const incBtn = () => setCount(count + 1);
  const decBtn = () => setCount(count - 1);

  return (
    <>
      <div className="count">
        <h1 className="number">{count}</h1>
        <div className="btn_container">
          <button className="btn inc_btn" onClick={incBtn}>
            <i class="bi bi-plus-lg"></i>
          </button>
          <button className="btn dec_btn" onClick={decBtn}>
            <i class="bi bi-trash-fill"></i>
          </button>
        </div>
      </div>
    </>
  );
};

