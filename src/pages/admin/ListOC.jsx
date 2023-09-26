import { RiPencilLine, RiDeleteBinLine } from "react-icons/ri";

const ListOC = () => {
  // Datos de ejemplo para órdenes de compra
  const ordenesCompra = [
    {
      id: 1,
      proveedor: "Proveedor A",
      fecha: "2023-10-05",
      total: 15000,
      estado: "En Proceso",
    },
    {
      id: 2,
      proveedor: "Proveedor B",
      fecha: "2023-09-28",
      total: 22000,
      estado: "Entregada",
    },
    {
      id: 3,
      proveedor: "Proveedor C",
      fecha: "2023-09-15",
      total: 18000,
      estado: "Pendiente",
    },
    {
      id: 4,
      proveedor: "Proveedor D",
      fecha: "2023-08-30",
      total: 9000,
      estado: "Entregada",
    },
    {
      id: 5,
      proveedor: "Proveedor E",
      fecha: "2023-08-15",
      total: 28000,
      estado: "Pendiente",
    },
    // Agrega más órdenes de compra aquí...
  ];

  const handleEdit = (orden) => {
    // Implementa la lógica para editar la orden de compra aquí
    console.log("Editar orden de compra:", orden);
  };

  const handleDelete = (ordenId) => {
    // Implementa la lógica para eliminar la orden de compra aquí
    console.log("Eliminar orden de compra con ID:", ordenId);
  };

  return (
    <div>
      <h1 className="text-xl text-gray-100 mb-4">Lista de Órdenes de Compra</h1>
      <table className="table-auto w-full">
        <thead className="text-primary text-left">
          <tr>
            <th>ID</th>
            <th>Proveedor</th>
            <th>Fecha</th>
            <th>Total</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ordenesCompra.map((orden) => (
            <tr key={orden.id}>
              <td>{orden.id}</td>
              <td>{orden.proveedor}</td>
              <td>{orden.fecha}</td>
              <td>${orden.total}</td>
              <td>{orden.estado}</td>
              <td>
                <button
                  className="mr-2 text-yellow-500 hover:text-yellow-900"
                  onClick={() => handleEdit(orden)}
                >
                  <RiPencilLine />
                </button>
                <button
                  className="text-red-500 hover:text-red-900"
                  onClick={() => handleDelete(orden.id)}
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

export default ListOC;
