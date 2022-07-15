import { Component } from "solid-js";
interface ModalFormProps {
  onSubmit: (e: Event) => void;
}
const ModalForm: Component<ModalFormProps> = ({ onSubmit }: ModalFormProps) => {
  return (
    <form onSubmit={onSubmit}>
      <div class="flex flex-col">
        <div class="flex gap-2">
          <label for="applied">Applied</label>
          <input name="applied" type="checkbox" class="checkbox" />
          <label for="assessed">Assessed</label>
          <input name="assessed" type="checkbox" class="checkbox" />
        </div>
        <div class="flex flex-col">
          <label for="company">Company Name: </label>
          <input
            name="company"
            type="text"
            placeholder="Type here"
            class="input input-bordered input-info w-full max-w-xs"
          />
        </div>
        <div class="flex flex-col">
          <label for="position">Position: </label>
          <input
            name="position"
            type="text"
            placeholder="Type here"
            class="input input-bordered input-info w-full max-w-xs"
          />
        </div>

        <div class="flex flex-col">
          <label for="area">Area: </label>
          <input
            name="area"
            type="text"
            placeholder="Type here"
            class="input input-bordered input-info w-full max-w-xs"
          />
        </div>

        <div class="flex flex-col">
          <label for="link">Link: </label>
          <input
            name="link"
            type="text"
            placeholder="Type here"
            class="input input-bordered input-info w-full max-w-xs"
          />
        </div>

        <div class="flex flex-col">
          <label for="lastContact">Last Contact: </label>
          <input
            name="lastContact"
            type="text"
            placeholder="Type here"
            class="input input-bordered input-info w-full max-w-xs"
          />
        </div>

        <button class="btn btn-outline btn-info my-2" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ModalForm;
