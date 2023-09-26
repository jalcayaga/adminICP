import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Papa from "papaparse";

const CSVUploader = ({ onUpload }) => {
  const [uploadedData, setUploadedData] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      Papa.parse(file, {
        complete: (result) => {
          // La variable 'result.data' contiene los datos del archivo CSV.
          setUploadedData(result.data);
          onUpload(result.data); // Puedes pasar los datos a una función para procesarlos en tu aplicación.
        },
        header: true, // Si el archivo CSV tiene una fila de encabezado.
      });
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".csv", // Acepta solo archivos CSV.
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className="dropzone"
      >
        <input {...getInputProps()} />
        <p>
          Arrastra y suelta un archivo CSV aquí o haz clic para seleccionarlo.
        </p>
      </div>
      {uploadedData.length > 0 && (
        <div>
          <h3>Datos cargados:</h3>
          <pre>{JSON.stringify(uploadedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CSVUploader;
