import React, { useState } from "react";
import CSVUploader from "../../components/CSVUploader"; // El componente de carga de archivos CSV que proporcioné anteriormente

const CargaMasiva = () => {
  // Define aquí los estados y funciones de manejo de datos según sea necesario
  const [uploadedData, setUploadedData] = useState([]);

  // Función para manejar los datos cargados
  const handleUpload = (data) => {
    setUploadedData(data);
    // Puedes realizar operaciones con los datos cargados aquí, como insertar facturas en la base de datos.
  };

  return (
    <div className="bg-secondary-100 p-6 rounded-lg shadow-md">
      <div className="mb-8">
        <h1 className="text-2xl text-gray-100 mb-4">
          Carga Masiva de Facturas
        </h1>
        <hr className="my-4 border-gray-300" />
        {/* Área de arrastre de archivos */}
        <label
          htmlFor="fileInput"
          className="cursor-pointer flex flex-col items-center justify-center p-8 border-dashed border-2 border-primary rounded-lg hover:bg-secondary-900 hover:text-white transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-primary mb-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 1a1 1 0 011 1v6a1 1 0 01-2 0V2a1 1 0 011-1zM3 5a1 1 0 112 0v11a2 2 0 002 2h8a2 2 0 002-2V5a1 1 0 112 0v11a4 4 0 01-4 4H7a4 4 0 01-4-4V5z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-gray-100">
            Arrastra y suelta un archivo CSV aquí o haz clic para seleccionarlo.
          </p>
          <input
            id="fileInput"
            type="file"
            accept=".csv"
            className="hidden"
            onChange={(e) => {
              // Puedes manejar la carga del archivo aquí si lo prefieres
              const file = e.target.files[0];
              if (file) {
                handleUploadFile(file);
              }
            }}
          />
        </label>
      </div>

      {/* Visualización de los datos cargados */}
      {uploadedData.length > 0 && (
        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <h3 className="text-xl text-gray-800 mb-2">Datos cargados:</h3>
          <pre className="text-gray-600 whitespace-pre-wrap">
            {JSON.stringify(uploadedData, null, 2)}
          </pre>
        </div>
      )}

      <hr className="my-4 border-gray-300" />

      {/* Botón de procesamiento */}
      <button
        className="bg-primary/90 text-black hover:bg-primary flex items-center gap-2 py-2 px-4 rounded-lg transition-colors"
        onClick={() => {
          // Agrega aquí la lógica para procesar los datos cargados
        }}
      >
        Procesar Facturas
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 inline-block ml-2 -mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default CargaMasiva;
