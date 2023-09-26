import React, { useState } from "react";

const CreateProduct = () => {
  const [tipoProducto, setTipoProducto] = useState("articulo");

  const handleTipoProductoChange = (event) => {
    setTipoProducto(event.target.value);
  };

  return (
    <div className="bg-secondary-100 p-8 rounded-xl mb-8">
      <h1 className="text-xl text-gray-100">Crear Nuevo Producto</h1>
      <hr className="my-8 border-gray-500/30" />
      <form>
        <div className="flex flex-col gap-y-2 mb-8">
          <div className="w-full">
            <p>
              Nombre del Producto <span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
              placeholder="Nombre del Producto"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 mb-8">
          <div className="w-full">
            <p>
              Descripción <span className="text-red-500">*</span>
            </p>
            <textarea
              rows="4"
              className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
              placeholder="Descripción del Producto"
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 mb-8">
          <div className="w-full">
            <p>Código del Producto</p>
            <input
              type="text"
              className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
              placeholder="Código del Producto"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 mb-8">
          <p>
            Tipo de Producto <span className="text-red-500">*</span>
          </p>
          <div className="flex items-center gap-4">
            <label>
              <input
                type="radio"
                name="tipoProducto"
                value="articulo"
                checked={tipoProducto === "articulo"}
                onChange={handleTipoProductoChange}
                className="mr-2"
              />
              Artículo
            </label>
            <label>
              <input
                type="radio"
                name="tipoProducto"
                value="servicio"
                checked={tipoProducto === "servicio"}
                onChange={handleTipoProductoChange}
                className="mr-2"
              />
              Servicio
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 mb-8">
          <div className="w-full">
            <p>
              Unidad de Medida <span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
              placeholder="Unidad de Medida"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 mb-8">
          <div className="w-full">
            <p>
              Precio de Venta <span className="text-red-500">*</span>
            </p>
            <input
              type="number"
              className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
              placeholder="Precio de Venta"
            />
          </div>
        </div>
      </form>
      <hr className="my-8 border-gray-500/30" />
      <div className="flex justify-end">
        <button className="bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors">
          Guardar Producto
        </button>
      </div>
    </div>
  );
};

export default CreateProduct;
