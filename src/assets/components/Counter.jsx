import React, { useState } from "react";
import Button from "./Button";
import styles from "../components/Counter.module.css";

function Counter() {
  const [count, setCount] = useState(0);

  const handleDecrease = () => setCount(count - 1);
  const handleReset = () => setCount(0);
  const handleIncrease = () => setCount(count + 1);

  const buttons = [
    { label: "decrease", onClick: handleDecrease },
    { label: "reset", onClick: handleReset },
    { label: "increase", onClick: handleIncrease },
  ];

  return (
    <>
      <h3 className={styles.heading}>Counter: {count}</h3>
      <div className={styles.divv}>
        {buttons.map((btn) => (
          <Button btnProp={btn} key={btn.label} />
        ))}
      </div>
    </>
  );
}

export default Counter;
