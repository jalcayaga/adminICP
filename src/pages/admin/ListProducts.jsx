import { RiPencilLine, RiDeleteBinLine } from "react-icons/ri";

const ListProducts = () => {
  // Datos de ejemplo para productos
  const productos = [
    {
      id: 1,
      nombre: "Cable eléctrico",
      descripcion: "Cable eléctrico de 100 pies, calibre 12",
      precio: 25.99,
      stock: 100,
    },
    {
      id: 2,
      nombre: "Interruptor de luz",
      descripcion: "Interruptor de luz de palanca, paquete de 5 unidades",
      precio: 8.99,
      stock: 200,
    },
    {
      id: 3,
      nombre: "Enchufe eléctrico",
      descripcion: "Enchufe eléctrico estándar, paquete de 10 unidades",
      precio: 12.49,
      stock: 150,
    },
    {
      id: 4,
      nombre: "Fusibles",
      descripcion: "Fusibles de cerámica, paquete de 20 unidades",
      precio: 6.99,
      stock: 300,
    },
    {
      id: 5,
      nombre: "Bombillas LED",
      descripcion: "Bombillas LED de 60W, paquete de 4 unidades",
      precio: 15.99,
      stock: 120,
    },
    // Agrega más productos aquí
  ];

  const handleEdit = (producto) => {
    // Implementa la lógica para editar el producto aquí
    console.log("Editar producto:", producto);
  };

  const handleDelete = (productoId) => {
    // Implementa la lógica para eliminar el producto aquí
    console.log("Eliminar producto con ID:", productoId);
  };

  return (
    <div>
      <h1 className="text-xl text-gray-100 mb-4">Lista de Productos</h1>
      <table className="table-auto w-full">
        <thead className="text-primary text-left">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
              <td>${producto.precio.toFixed(3)}</td>
              <td>{producto.stock}</td>
              <td>
                <button
                  className="mr-2 text-yellow-500 hover:text-yellow-900"
                  onClick={() => handleEdit(producto)}
                >
                  <RiPencilLine />
                </button>
                <button
                  className="text-red-500 hover:text-red-900"
                  onClick={() => handleDelete(producto.id)}
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

export default ListProducts;
