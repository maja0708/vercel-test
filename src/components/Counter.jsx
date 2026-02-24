// import { useState } from "react";
import { useState } from "react";

function CounterText({ count }) {
  return <h1 className="font-bold text-2xl">Counter: {count}</h1>;
}

export default function CounterElement() {
  const [count, setCount] = useState(0);

  // Counter related logic
  function increment() {
    setCount(count + 1);
  }

  return (
    <div className="flex flex-col bg-gray-700 p-8 rounded-2xl m-4 min-w-200 gap-4">
      <CounterText count={count} />
      <button
        onClick={increment}
        className="mx-auto bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Increment
      </button>
    </div>
  );
}