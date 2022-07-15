import { Component } from "solid-js";

const handleSubmit = (e: Event) => {
  let payload = new FormData(e.target as unknown as HTMLFormElement);
  e.preventDefault();
  fetch("/api/create", {
    method: "POST",
    body: payload,
  });
  location.reload();
};

const ModalForm: Component = () => {
  return (
    <div class="my-4">
      <form onSubmit={handleSubmit} class="flex flex-col gap-2">
        <div class="flex gap-2">
          <label for="applied">Applied</label>
          <input name="applied" type="checkbox" class="checkbox" />
          <label for="assessed">Assessed</label>
          <input name="assessed" type="checkbox" class="checkbox" />
        </div>

        <div class="flex gap-2">
          <input
            name="company"
            type="text"
            placeholder="Company ..."
            class="input input-bordered input-info w-full max-w-xs"
          />

          <input
            name="position"
            type="text"
            placeholder="Position ..."
            class="input input-bordered input-info w-full max-w-xs"
          />
          <input
            name="area"
            type="text"
            placeholder="Area ..."
            class="input input-bordered input-info w-full max-w-xs"
          />
          <input
            name="link"
            type="text"
            placeholder="Link ..."
            class="input input-bordered input-info w-full max-w-xs"
          />
          <input
            name="lastContact"
            type="date"
            placeholder="Last contact ..."
            class="input input-bordered input-info w-full max-w-xs"
          />
        </div>

        <button class="btn btn-outline btn-info my-2" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default ModalForm;
