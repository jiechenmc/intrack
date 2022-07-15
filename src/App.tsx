import { Component, createResource } from "solid-js";
import Table from "./Table";
import ModalForm from "./ModalForm";

const App: Component = () => {
  const fetchData = async () => (await fetch("/api/get")).json();
  const [data] = createResource(fetchData);

  const handleSubmit = (e: Event) => {
    let payload = new FormData(e.target as unknown as HTMLFormElement);
    e.preventDefault();
    fetch("/api/create", {
      method: "POST",
      body: payload,
    });
    location.reload();
  };

  return (
    <div>
      <label for="my-modal-3" class="btn modal-button">
        Create New Entry
      </label>
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <ModalForm onSubmit={handleSubmit} />
        </div>
      </div>
      {data.loading ? "Loading..." : <Table data={data()} />}
    </div>
  );
};

export default App;
