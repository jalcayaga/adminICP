import React, { useState } from "react";

const CreateOC = () => {
  // Estados para almacenar los datos del formulario
  const [providerName, setProviderName] = useState("");
  const [providerAddress, setProviderAddress] = useState("");
  const [providerContact, setProviderContact] = useState("");
  const [buyerCompany, setBuyerCompany] = useState("");
  const [buyerAddress, setBuyerAddress] = useState("");
  const [buyerContact, setBuyerContact] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [totalCost, setTotalCost] = useState("");
  const [paymentTerms, setPaymentTerms] = useState("");
  const [deliveryTerms, setDeliveryTerms] = useState("");
  const [conditions, setConditions] = useState("");
  const [approvalSignature, setApprovalSignature] = useState("");

  // Función para guardar la orden de compra
  const savePurchaseOrder = () => {
    // Aquí puedes enviar los datos al servidor o realizar otras acciones necesarias
    console.log("Orden de compra guardada:", {
      providerName,
      providerAddress,
      providerContact,
      buyerCompany,
      buyerAddress,
      buyerContact,
      orderNumber,
      issueDate,
      productDescription,
      unitPrice,
      totalCost,
      paymentTerms,
      deliveryTerms,
      conditions,
      approvalSignature,
    });
  };

  return (
    <div className="bg-secondary-100 p-8 rounded-xl mb-8">
      <h1 className="text-xl text-gray-100">Crear Orden de Compra</h1>
      <hr className="my-8 border-gray-500/30" />
      <form>
        {/* Información del proveedor */}
        <div className="flex flex-col gap-y-2 mb-8">
          <div className="w-full">
            <p>Nombre del Proveedor</p>
            <input
              type="text"
              className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
              placeholder="Nombre del Proveedor"
              value={providerName}
              onChange={(e) => setProviderName(e.target.value)}
            />
          </div>
          <div className="w-full">
            <p>Dirección del Proveedor</p>
            <input
              type="text"
              className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
              placeholder="Dirección del Proveedor"
              value={providerAddress}
              onChange={(e) => setProviderAddress(e.target.value)}
            />
          </div>
          <div className="w-full">
            <p>Contacto del Proveedor</p>
            <input
              type="text"
              className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
              placeholder="Contacto del Proveedor"
              value={providerContact}
              onChange={(e) => setProviderContact(e.target.value)}
            />
          </div>
        </div>
        {/* Información del comprador */}
        <div className="flex flex-col gap-y-2 mb-8">
          {/* Agregar campos similares para la información del comprador */}
        </div>
        {/* Número de orden de compra */}
        <div className="w-full mb-8">
          <p>Número de Orden de Compra</p>
          <input
            type="text"
            className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
            placeholder="Número de Orden de Compra"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
          />
        </div>
        {/* Fecha de emisión */}
        <div className="w-full mb-8">
          <p>Fecha de Emisión</p>
          <input
            type="date"
            className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
            value={issueDate}
            onChange={(e) => setIssueDate(e.target.value)}
          />
        </div>
        {/* Descripción de productos o servicios */}
        <div className="w-full mb-8">
          <p>Descripción de Productos o Servicios</p>
          <textarea
            rows="4"
            className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
            placeholder="Descripción de Productos o Servicios"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>
        {/* Precio unitario y total */}
        <div className="flex flex-col gap-y-2 mb-8">
          {/* Agregar campos similares para precio unitario y total */}
        </div>
        {/* Términos de pago */}
        <div className="w-full mb-8">
          <p>Términos de Pago</p>
          <input
            type="text"
            className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
            placeholder="Términos de Pago"
            value={paymentTerms}
            onChange={(e) => setPaymentTerms(e.target.value)}
          />
        </div>
        {/* Términos de entrega */}
        <div className="w-full mb-8">
          <p>Términos de Entrega</p>
          <input
            type="text"
            className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
            placeholder="Términos de Entrega"
            value={deliveryTerms}
            onChange={(e) => setDeliveryTerms(e.target.value)}
          />
        </div>
        {/* Condiciones y políticas */}
        <div className="w-full mb-8">
          <p>Condiciones y Políticas</p>
          <input
            type="text"
            className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
            placeholder="Condiciones y Políticas"
            value={conditions}
            onChange={(e) => setConditions(e.target.value)}
          />
        </div>
        {/* Firma y aprobación */}
        <div className="w-full mb-8">
          <p>Firma y Aprobación</p>
          <input
            type="text"
            className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
            placeholder="Firma y Aprobación"
            value={approvalSignature}
            onChange={(e) => setApprovalSignature(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors"
            onClick={savePurchaseOrder}
          >
            Guardar Orden de Compra
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateOC;
