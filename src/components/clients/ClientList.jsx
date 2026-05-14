export function ClientList({ clients, onSelect }) {
  return (
    <div>
      {clients.map((client) => {
        return (
          <div
            key={client.id}
            onClick={() => {
              onSelect(client.id);
            }}
          >
            {client.name} {client.surname}
          </div>
        );
      })}
    </div>
  );
}
