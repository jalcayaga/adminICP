import React from "react";

const Error404 = () => {
  return (
    <div className="bg-secondary-100 p-8 rounded-xl mb-8 text-center">
      <h1 className="text-xl text-gray-100">404 - Página no encontrada</h1>
      <hr className="my-8 border-gray-500/30" />
      <p className="text-gray-100">
        Lo sentimos, la página que estás buscando no existe.
      </p>

      {/* Enlace de regreso a la página principal */}
      <a
        href="/"
        className="bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors inline-block mt-4"
      >
        Volver a la Página Principal
      </a>
    </div>
  );
};

export default Error404;
