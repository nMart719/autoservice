import { useNavigate } from "react-router-dom";

export function TableBody({ columns, tableData, path }) {
  console.log(columns);
  console.log(tableData);
  const navigate = useNavigate();
  return (
    <tbody>
      {tableData.map((data) => (
        <tr
          key={data.id}
          onClick={() => {
            navigate(`/${path}/${tableData.id}`);
          }}
        >
          {columns.map(({ accessor }) => {
            const tData = data[accessor] ? data[accessor] : "——";
            return (
              <td className="text-left" key={`${data.id}_${accessor}`}>
                {tData}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
}
