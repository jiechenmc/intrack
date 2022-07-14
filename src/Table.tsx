import { Component } from "solid-js";
import RowElement, { RowElements } from "./RowElement";

interface TableProps {
  data: RowElements[];
}

const Table: Component<TableProps> = ({ data }: TableProps) => {
  return (
    <div class="overflow-x-auto">
      <table class="table table-compact w-full text-center">
        <thead>
          <tr>
            <th></th>
            <th>Application</th>
            <th>Assessment</th>
            <th>Company</th>
            <th>Position</th>
            <th>Area</th>
            <th>Link</th>
            <th>Last Contact</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => {
            return (
              <RowElement
                count={e?.count}
                applied={e?.applied}
                assessed={e?.assessed}
                company={e?.company}
                position={e?.position}
                area={e?.area}
                link={e?.link}
                lastContact={e?.lastContact}
              />
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Application</th>
            <th>Assessment</th>
            <th>Company</th>
            <th>Position</th>
            <th>Area</th>
            <th>Link</th>
            <th>Last Contact</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
