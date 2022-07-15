import { Component, createSignal } from "solid-js";

export interface RowElements {
  id: number;
  applied: boolean;
  assessed: boolean;
  company: string;
  position: string;
  area: string;
  link: string;
  lastContact: string;
}

const RowElement: Component<RowElements> = ({
  id,
  applied,
  assessed,
  company,
  position,
  area,
  link,
  lastContact,
}: RowElements) => {
  const [_assessed, setAssessed] = createSignal(assessed);
  const [_applied, setApplied] = createSignal(applied);

  const handleAssessedClick = () => {
    setAssessed(!_assessed());

    let fd = new FormData();
    fd.append("id", `${id}`);
    fd.append("assessed", `${+_assessed()}`);
    fetch("/api/update", { method: "PUT", body: fd });
  };

  const handleAppliedClick = () => {
    setApplied(!_applied());
    let fd = new FormData();
    fd.append("id", `${id}`);
    fd.append("applied", `${+_applied()}`);
    fetch("/api/update", { method: "PUT", body: fd });
  };

  const handleDelete = () => {
    let fd = new FormData();
    fd.append("id", `${id}`);
    fetch("/api/delete", { method: "DELETE", body: fd });
    location.reload();
  };
  return (
    <tr class={_applied() && _assessed() ? "text-success" : "text-warning"}>
      <th>{id}</th>
      <td>
        <label>
          <input
            type="checkbox"
            class="checkbox"
            checked={_applied()}
            onClick={handleAppliedClick}
          />
        </label>
      </td>
      <td>
        <label>
          <input
            type="checkbox"
            class="checkbox"
            checked={_assessed()}
            onClick={handleAssessedClick}
          />
        </label>
      </td>
      <td>{company}</td>
      <td>{position}</td>
      <td>{area}</td>
      <td>
        <a href={link}>
          <button class="btn bg-transparent border-0 hover:bg-invert w-full">
            <svg
              class={
                _applied() && _assessed() ? "fill-success" : "fill-warning"
              }
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
            </svg>
          </button>
        </a>
      </td>
      <td>{lastContact}</td>
      <td onClick={handleDelete}>
        <button class="btn bg-transparent border-0">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M9 3h6v-1.75c0-.066-.026-.13-.073-.177-.047-.047-.111-.073-.177-.073h-5.5c-.066 0-.13.026-.177.073-.047.047-.073.111-.073.177v1.75zm11 1h-16v18c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-18zm-10 3.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v12c0 .276.224.5.5.5s.5-.224.5-.5v-12zm5 0c0-.276-.224-.5-.5-.5s-.5.224-.5.5v12c0 .276.224.5.5.5s.5-.224.5-.5v-12zm8-4.5v1h-2v18c0 1.105-.895 2-2 2h-14c-1.105 0-2-.895-2-2v-18h-2v-1h7v-2c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v2h7z" />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default RowElement;
