import React, { useState } from "react";
// Icons
import {
  RiEdit2Line,
  RiShieldCheckLine,
  RiErrorWarningLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { Switch } from "@headlessui/react";

const Profile = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      {/* Profile */}
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">Perfil</h1>
        <hr className="my-8 border-gray-500/30" />
        <form>
          <div className="flex items-center mb-8">
            <div className="w-1/4">
              <p>Foto</p>
            </div>
            <div className="flex-1">
              <div className="relative mb-2">
                <img
                  src="https://img.freepik.com/foto-gratis/negocios-finanzas-empleo-concepto-mujeres-emprendedoras-exitosas-joven-empresaria-segura-anteojos-mostrando-gesto-pulgar-arriba-sostenga-computadora-portatil-garantice-mejor-calidad-servicio_1258-59118.jpg"
                  className="w-28 h-28 object-cover rounded-lg"
                />
                <label
                  htmlFor="avatar"
                  className="absolute bg-secondary-100 p-2 rounded-full hover:cursor-pointer -top-2 left-24"
                >
                  <RiEdit2Line />
                </label>
                <input
                  type="file"
                  id="avatar"
                  className="hidden"
                />
              </div>
              <p className="text-gray-500 text-sm">
                Archivos permitidos: png, jpg, jpeg.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Nombre completo <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1 flex items-center gap-4">
              <div className="w-full">
                <input
                  type="text"
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                  placeholder="Nombre(s)"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                  placeholder="Apellido(s)"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                RUT <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="12345678-9"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Celular <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="number"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="+56991234567"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Dirección <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1 flex items-center gap-4">
              <div className="w-full">
                <input
                  type="text"
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                  placeholder="Calle(s)"
                />
              </div>
              <div className="w-full md:w-1/4">
                <p>
                  N° # <span className="text-red-500">*</span>
                </p>
              </div>
              <div className="w-full">
                <input
                  type="number"
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                  placeholder="Numero casa o depto"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Ciudad <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <select className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 appearance-none">
                <option value="Barquisiméto">Santiago</option>
                <option value="Bogotá">Iquique</option>
                <option value="Buga">Talca</option>
                <option value="Chihuahua">Pto Montt</option>
                <option value="Ciudad de México">Valparaiso</option>
                <option value="Lima">Antofagasta</option>
                <option value="Montevideo">Concepcion</option>
                <option value="Caracas">Valdivia</option>
                <option value="Venezuela">Pta Arenas</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                País <span className="text-red-500">*</span>
              </p>
            </div>
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
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Salud <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Fonasa o Isapre"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                AFP <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Afp Uno, Provida, Hábitat, Capital, etc"
              />
            </div>
          </div>
        </form>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <button className="bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors">
            Guardar
          </button>
        </div>
      </div>
      {/* Change password */}
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">Usuario y contraseña</h1>
        <hr className="my-8 border-gray-500/30" />
        <form className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-y-4 justify-between">
            <div>
              <h5 className="text-gray-100 text-xl mb-1">Correo electrónico</h5>
              <p className="text-gray-500 text-sm">javier@gmail.com</p>
            </div>
            <div>
              <button className="w-full md:w-auto bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors">
                Cambiar email
              </button>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
          <div className="flex flex-col md:flex-row md:items-center gap-y-4 justify-between">
            <div>
              <h5 className="text-gray-100 text-xl mb-1">Contraseña</h5>
              <p className="text-gray-500 text-sm">****************</p>
            </div>
            <div>
              <button className="w-full md:auto bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors">
                Cambiar contraseña
              </button>
            </div>
          </div>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-8 items-center gap-y-4 bg-green-600/10 p-4 rounded-lg border border-dashed border-green-600">
          <div className="flex justify-center">
            <RiShieldCheckLine className="text-5xl text-green-600" />
          </div>
          <div className="md:col-span-6">
            <h5 className="text-gray-100 text-xl mb-2">Asegura tu cuenta</h5>
            <p className="text-gray-500">
              La autenticación de dos factores agrega una capa adicional de
              seguridad a tu cuenta. Para iniciar sesión, además necesitarás
              proporcionar un código de 6 dígitos.
            </p>
          </div>
          <div className="flex justify-center">
            <button className="bg-green-600/70 hover:bg-green-600 transition-colors py-2 px-4 rounded-lg text-gray-100">
              Activar
            </button>
          </div>
        </div>
      </div>
      {/* Connected accounts */}
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">Conectar con cuenta</h1>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex flex-col md:flex-row gap-4 items-center bg-green-600/10 p-4 rounded-lg border border-dashed border-green-600 mb-8">
          <div className="flex justify-center">
            <RiShieldCheckLine className="text-5xl text-green-600" />
          </div>
          <div className="flex-1">
            <p className="text-gray-500">
              La autenticación de dos factores añade una capa extra de seguridad
              a tu cuenta. Para iniciar sesión, deberás proporcionar un
              increíble código de 4 dígitos.{" "}
              <Link
                to="/"
                className="text-green-400"
              >
                Ver más
              </Link>
            </p>
          </div>
        </div>
        <form className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
                className="w-8 h-8 object-cover"
              />
              <div className="flex flex-col gap-y-1">
                <h5 className="text-gray-100">Google</h5>
                <p className="text-gray-500 text-sm">
                  Iniciar sesión con Google
                </p>
              </div>
            </div>
            <div>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? "bg-primary" : "bg-secondary-900"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Activar notificaciones</span>
                <span
                  className={`${
                    enabled
                      ? "translate-x-6 bg-secondary-900"
                      : "translate-x-1 bg-gray-500"
                  } inline-block h-4 w-4 transform rounded-full transition`}
                />
              </Switch>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
        </form>
      </div>
      {/* Preferencias de correo electrónico */}
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">
          Notificaciones por correo electrónico
        </h1>
        <hr className="my-8 border-gray-500/30" />
        <form className="mb-8">
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              className="accent-primary"
              id="id1"
            />
            <div className="flex flex-col gap-y-1">
              <label
                htmlFor="id1"
                className="text-gray-100"
              >
                Aprobar OC
              </label>
              <p className="text-gray-500 text-sm">
                Recibe una notificación por cada solicitud de aprobar OC .
              </p>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              className="accent-primary"
              id="id2"
            />
            <div className="flex flex-col gap-y-1">
              <label
                htmlFor="id2"
                className="text-gray-100"
              >
                Facturas aprobadas
              </label>
              <p className="text-gray-500 text-sm">
                Recibe una notificación por cada factura que se aprueba.
              </p>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              className="accent-primary"
              id="id3"
            />
            <div className="flex flex-col gap-y-1">
              <label
                htmlFor="id3"
                className="text-gray-100"
              >
                Eliminacion de facturas y OC
              </label>
              <p className="text-gray-500 text-sm">
                Recibe una notificación si se elimina una factura o una OC.
              </p>
            </div>
          </div>
        </form>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <button className="bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors">
            Guardar
          </button>
        </div>
      </div>
      {/* Cuenta inactiva */}
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">Desactivar cuenta</h1>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex flex-col md:flex-row items-center gap-4 bg-yellow-600/10 p-4 rounded-lg border border-dashed border-yellow-600 mb-8">
          <div className="flex justify-center">
            <RiErrorWarningLine className="text-5xl text-yellow-600" />
          </div>
          <div className="flex-1">
            <h5 className="text-gray-100 text-xl mb-2">
              Estás desactivando tu cuenta
            </h5>
            <p className="text-gray-500">
              Para mayor seguridad, esto requiere que confirmes tu correo
              electrónico o número de teléfono cuando restablezcas tu
              contraseña. <Link className="text-blue-500">Ver más</Link>
            </p>
          </div>
        </div>
        <form className="flex items-center gap-4">
          <input
            type="checkbox"
            className="accent-primary"
            id="idInactive"
          />
          <label
            htmlFor="idInactive"
            className="text-gray-500"
          >
            Confirmo la desactivación de mi cuenta
          </label>
        </form>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <button className="bg-red-500/80 text-gray-100 py-2 px-4 rounded-lg hover:bg-red-500 transition-colors">
            Desactivar cuenta
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
