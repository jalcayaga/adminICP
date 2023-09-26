import React from "react";

const CreateProveedor = () => {
  return (
    <div className="bg-secondary-100 p-8 rounded-xl mb-8">
      <h1 className="text-xl text-gray-100">Crear Nuevo Proveedor</h1>
      <hr className="my-8 border-gray-500/30" />
      <form>
        {/* Contacto */}
        <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-4 mb-8">
          <div className="w-full md:w-1/2">
            <p>
              Nombre del Contacto <span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
              placeholder="Nombre"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p>
              Apellido del Contacto <span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
              placeholder="Apellido"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-4 mb-8">
          <div className="w-full md:w-1/2">
            <p>
              Telefono del Contacto <span className="text-red-500">*</span>
            </p>
            <input
              type="number"
              className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
              placeholder="Telefono"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p>
              Email del Contacto <span className="text-red-500">*</span>
            </p>
            <input
              type="email"
              className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
              placeholder="Email"
            />
          </div>
        </div>

        {/* linea divisoria */}
        <hr className="my-8 border-gray-500/30 border-dashed" />
        <div className="flex flex-col gap-y-2 mb-8">
          <div className="w-full">
            <p>
              Nombre de Fantasía del Proveedor{" "}
              <span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
              placeholder="Nombre de Fantasía"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-4 mb-8">
          <div className="w-full md:w-1/2">
            <p>
              País <span className="text-red-500">*</span>
            </p>
            <div className="flex-1">
              <select className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 appearance-none">
                <option value="Chile">Chile</option>
                <option value="Colombia">Alemania</option>
                <option value="México">Japon</option>
                <option value="Perú">Italia</option>
                <option value="Uruguay">China</option>
                <option value="Venezuela">España</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 md:flex-row gap-x-4 mb-8">
          <div className="w-full md:w-1/2">
            <p>
              RUT del Proveedor <span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
              placeholder="RUT"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p>
              Razón Social <span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
              placeholder="Razón Social"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 mb-8">
          <div className="w-full">
            <p>
              Dirección de Facturación <span className="text-red-500">*</span>
            </p>
            <input
              rows="4"
              className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
              placeholder="Dirección"
            ></input>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-4 mb-8">
          <div className="w-full md:w-1/2">
            <p>
              Comuna <span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
              placeholder="Comuna"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p>
              Ciudad <span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
              placeholder="Ciudad"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-4 mb-8">
          <div className="w-full md:w-1/2">
            <p>
              Giro <span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
              placeholder="Giro del Proveedor"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p>
              Teléfono <span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
              placeholder="Teléfono"
            />
          </div>
        </div>
      </form>
      <hr className="my-8 border-gray-500/30" />
      <div className="flex justify-end">
        <button className="bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors">
          Guardar Proveedor
        </button>
      </div>
    </div>
  );
};

export default CreateProveedor;
