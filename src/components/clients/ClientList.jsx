export function ClientList({ clients, onSelect }) {
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
          <tr
            key={client.id}
            onClick={() => {
              onSelect(client.id);
            }}
          >
            <td>
            {`${client.name} ${client.surname}`}
            </td>
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
