import { RiPencilLine, RiDeleteBinLine } from "react-icons/ri";

const AllTIcket = () => {
  // Datos de ejemplo para tickets de asistencia
  const ticketsAsistencia = [
    {
      id: 1,
      titulo: "No puedo agregar una factura",
      categoria: "Factura",
      estado: "Abierto",
    },
    {
      id: 2,
      titulo: "Cómo puedo eliminar una OC?",
      categoria: "OC",
      estado: "Abierto",
    },
    {
      id: 3,
      titulo: "Cómo cambiar el RUT de un proveedor?",
      categoria: "Proveedor",
      estado: "Abierto",
    },
    {
      id: 4,
      titulo: "Cómo corregir la OC?",
      categoria: "OC",
      estado: "Abierto",
    },
    {
      id: 5,
      titulo: "La factura no corresponde a un proveedor?",
      categoria: "Factura",
      estado: "Abierto",
    },
    {
      id: 6,
      titulo: "Eliminar una factura",
      categoria: "Factura",
      estado: "Cerrado",
    },
    {
      id: 7,
      titulo: "Agregar dos OC?",
      categoria: "OC",
      estado: "Cerrado",
    },
    {
      id: 8,
      titulo: "Proveedor reclama por montos?",
      categoria: "Proveedor",
      estado: "Cerrado",
    },
  ];

  const handleEdit = (ticket) => {
    // Implementa la lógica para editar el ticket de asistencia aquí
    console.log("Editar ticket de asistencia:", ticket);
  };

  const handleDelete = (ticketId) => {
    // Implementa la lógica para eliminar el ticket de asistencia aquí
    console.log("Eliminar ticket de asistencia con ID:", ticketId);
  };

  return (
    <div>
      <h1 className="text-xl text-gray-100 mb-4">
        Lista de Tickets de Asistencia
      </h1>
      <h2 className="text-lg text-gray-100 mb-2">Tickets Abiertos</h2>
      <table className="table-auto w-full">
        <thead className="text-primary text-left">
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Categoría</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ticketsAsistencia
            .filter((ticket) => ticket.estado === "Abierto")
            .map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.titulo}</td>
                <td>{ticket.categoria}</td>
                <td>{ticket.estado}</td>
                <td>
                  <button
                    className="mr-2 text-yellow-500 hover:text-yellow-900"
                    onClick={() => handleEdit(ticket)}
                  >
                    <RiPencilLine />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-900"
                    onClick={() => handleDelete(ticket.id)}
                  >
                    <RiDeleteBinLine />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <hr className="my-8 border-gray-500/30 border-dashed" />

      <h2 className="text-lg text-gray-100 mt-1 mb-2">Tickets Cerrados</h2>
      <table className="table-auto w-full ">
        <thead className="text-primary text-left">
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Categoría</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ticketsAsistencia
            .filter((ticket) => ticket.estado === "Cerrado")
            .map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.titulo}</td>
                <td>{ticket.categoria}</td>
                <td>{ticket.estado}</td>
                <td>
                  <button
                    className="mr-2 text-yellow-500 hover:text-yellow-900"
                    onClick={() => handleEdit(ticket)}
                  >
                    <RiPencilLine />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-900"
                    onClick={() => handleDelete(ticket.id)}
                  >
                    <RiDeleteBinLine />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTIcket;
