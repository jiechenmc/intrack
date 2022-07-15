import { Component } from "solid-js";
import RowElement, { RowElements } from "./RowElement";

interface TableProps {
  data: { [key: string]: RowElements[] };
}

const Table: Component<TableProps> = ({ data }: TableProps) => {
  const res: RowElements[] = data.posts;

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
            <th>Date Applied</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {res.map((e) => {
            return (
              <RowElement
                id={e?.id}
                applied={e?.applied}
                assessed={e?.assessed}
                company={e?.company}
                position={e?.position}
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
            <th>Date Applied</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
