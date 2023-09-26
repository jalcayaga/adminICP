import { useState } from "react";

const CreateDT = () => {
  // Estados para almacenar los datos del formulario
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerContact, setCustomerContact] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [totalAmount, setTotalAmount] = useState("");

  // Función para guardar la factura
  const saveInvoice = () => {
    // Aquí puedes enviar los datos al servidor o realizar otras acciones necesarias
    console.log("Factura guardada:", {
      customerName,
      customerAddress,
      customerContact,
      invoiceNumber,
      issueDate,
      dueDate,
      productDescription,
      unitPrice,
      quantity,
      totalAmount,
    });
  };

  return (
    <div className="bg-secondary-100 p-8 rounded-xl mb-8">
      <h1 className="text-xl text-gray-100">Crear documento tributario</h1>
      <hr className="my-8 border-gray-500/30" />
      <form>
        {/* Información del cliente */}
        <div className="flex flex-col gap-y-2 mb-8">
          <div className="w-full">
            <p>Nombre del Cliente</p>
            <input
              type="text"
              className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
              placeholder="Nombre"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>
          <div className="w-full">
            <p>Dirección del Cliente</p>
            <input
              type="text"
              className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
              placeholder="Dirección"
              value={customerAddress}
              onChange={(e) => setCustomerAddress(e.target.value)}
            />
          </div>
          <div className="w-full">
            <p>Contacto del Cliente</p>
            <input
              type="text"
              className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
              placeholder="Contacto"
              value={customerContact}
              onChange={(e) => setCustomerContact(e.target.value)}
            />
          </div>
        </div>
        {/* Detalles de la factura */}
        <div className="w-full mb-8">
          <p>Número de Factura</p>
          <input
            type="text"
            className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
            placeholder="Número de Factura"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
          />
        </div>
        <div className="w-full mb-8">
          <p>Fecha de Emisión</p>
          <input
            type="date"
            className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
            value={issueDate}
            onChange={(e) => setIssueDate(e.target.value)}
          />
        </div>
        <div className="w-full mb-8">
          <p>Fecha de Vencimiento</p>
          <input
            type="date"
            className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="w-full mb-8">
          <p>Descripción del Producto o Servicio</p>
          <textarea
            rows="4"
            className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
            placeholder="Descripción"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-y-2 mb-8">
          {/* Agregar campos para precio unitario, cantidad y monto total */}
        </div>
        <div className="flex justify-end">
          <button
            className="bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors"
            onClick={saveInvoice}
          >
            Guardar Factura
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateDT;
