import { Component, createSignal } from "solid-js";

export interface RowElements {
  count: number;
  applied: boolean;
  assessed: boolean;
  company: string;
  position: string;
  area: string;
  link: string;
  lastContact: string;
}

const RowElement: Component<RowElements> = ({
  count,
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
  };

  const handleAppliedClick = () => {
    setApplied(!_applied());
  };
  return (
    <tr class={_applied() && _assessed() ? "text-success" : "text-warning"}>
      <th>{count}</th>
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
    </tr>
  );
};

export default RowElement;
