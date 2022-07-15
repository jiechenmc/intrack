import { Component, createResource } from "solid-js";
import Table from "./Table";
import ModalForm from "./ModalForm";

const App: Component = () => {
  const fetchData = async () => (await fetch("/api/get")).json();
  const [data] = createResource(fetchData);

  return (
    <div>
      <ModalForm />
      {data.loading ? "Loading..." : <Table data={data()} />}
    </div>
  );
};

export default App;
