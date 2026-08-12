import { getFullName } from "../../utils/clients";
import { useNavigate } from "react-router-dom";
export function ClientList({ clients }) {
  const navigate = useNavigate();
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Phone</td>
          <td>Email</td>
          <td>Cars count</td>
        </tr>
      </thead>
      <tbody>
        {clients.map((client) => {
          return (
            <tr key={client.id}  onClick={() => navigate(`/clients/${client.id}`)}>
                <td>{getFullName(client)}</td>
                <td>{client.phone}</td>
                <td>{client.email}</td>
                <td>{client.carsCount}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
