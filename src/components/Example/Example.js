import { useEffect, useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you clicked ${count} times`;
  });

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  );
};

export default Example;
