import { RiPencilLine, RiDeleteBinLine } from "react-icons/ri";

const ListProveedores = () => {
  // Datos de ejemplo para 20 proveedores
  const providers = [
    {
      id: 1,
      name: "Proveedor A",
      email: "proveedora@example.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Proveedor B",
      email: "proveedorb@example.com",
      phone: "987-654-3210",
    },
    {
      id: 3,
      name: "Proveedor C",
      email: "proveedorc@example.com",
      phone: "555-123-4567",
    },
    {
      id: 4,
      name: "Proveedor D",
      email: "proveedord@example.com",
      phone: "777-888-9999",
    },
    {
      id: 5,
      name: "Proveedor E",
      email: "proveedore@example.com",
      phone: "111-222-3333",
    },
    {
      id: 6,
      name: "Proveedor F",
      email: "proveedorf@example.com",
      phone: "444-555-6666",
    },
    {
      id: 7,
      name: "Proveedor G",
      email: "proveedorg@example.com",
      phone: "999-888-7777",
    },
    {
      id: 8,
      name: "Proveedor H",
      email: "proveedorh@example.com",
      phone: "777-666-5555",
    },
    {
      id: 9,
      name: "Proveedor I",
      email: "proveedori@example.com",
      phone: "222-333-4444",
    },
    {
      id: 10,
      name: "Proveedor J",
      email: "proveedorj@example.com",
      phone: "555-444-3333",
    },
    // Agrega más proveedores aquí...
  ];

  const handleEdit = (provider) => {
    // Implementa la lógica para editar el proveedor aquí
    console.log("Editar proveedor:", provider);
  };

  const handleDelete = (providerId) => {
    // Implementa la lógica para eliminar el proveedor aquí
    console.log("Eliminar proveedor con ID:", providerId);
  };

  return (
    <div>
      <h1 className="text-xl text-gray-100 mb-4">Lista de Proveedores</h1>
      <table className="table-auto w-full">
        <thead className="text-primary text-left">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {providers.map((provider) => (
            <tr key={provider.id}>
              <td>{provider.id}</td>
              <td>{provider.name}</td>
              <td>{provider.email}</td>
              <td>{provider.phone}</td>
              <td>
                <button
                  className="mr-2 text-yellow-500 hover:text-yellow-900"
                  onClick={() => handleEdit(provider)}
                >
                  <RiPencilLine />
                </button>
                <button
                  className="text-red-500 hover:text-red-900"
                  onClick={() => handleDelete(provider.id)}
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
export default ListProveedores;
