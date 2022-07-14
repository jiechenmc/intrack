import { Component, createSignal } from "solid-js";
import { RowElements } from "./RowElement";
import Table from "./Table";

const App: Component = () => {
  const [data, setData] = createSignal([
    {
      count: 1,
      applied: true,
      assessed: true,
      company: "Apple",
      position: "SWE",
      area: "SB, NY",
      link: "...",
      lastContact: "TODAY",
    },
  ] as RowElements[]);

  return (
    <div>
      <form></form>
      <Table data={data()} />
    </div>
  );
};

export default App;
