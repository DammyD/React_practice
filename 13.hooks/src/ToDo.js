import React, { usestate, useEffect } from "react";
import useFetch from "./custom-hooks/useFetch";

const ToDo = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  // const [data, setData] = useState(null);

  // useEffect(() => {
    // Handling the side effect inside the usEffect hook
  //     fetch("https://jsonplaceholder.typicode.com/todos")
  //         .then((res) => res.json())
  //         .then((data) => setData(data));
  // }, []);

  return (
    <>
    {/* If the data exist I want yo to map through it rendering the data */}
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

export default ToDo;
