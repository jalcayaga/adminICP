import React from "react";
import { Link } from "react-router-dom";
import {
  RiFilter2Fill,
  RiSearch2Line,
  RiArrowRightLine,
  RiArrowRightSLine,
  RiTicketLine,
  RiArrowLeftSLine,
  RiFileTextLine,
  RiDiscussLine,
  RiTwitterLine,
  RiGithubLine,
} from "react-icons/ri";
import { Tab, Disclosure, Transition } from "@headlessui/react";

const Facturas = () => {
  return (
    <div>
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-4 mb-10">
        <div>
          <h1 className="font-bold text-gray-100 text-xl">Asistencia</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link
              to="/"
              className="hover:text-primary transition-colors"
            >
              Home
            </Link>
            <span>-</span>
            <span>Centro de soporte</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-primary/90 text-black hover:bg-primary flex items-center gap-2 py-2 px-4 rounded-lg transition-colors">
            Crear ticket
          </button>
        </div>
      </div>
      {/* Portada */}
      <div className="bg-secondary-100 p-8 rounded-tl-lg rounded-tr-lg grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="p-8">
          <h1 className="text-3xl mb-8">En que te puedo ayudar?</h1>
        </div>
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="portada.svg"
            className="w-72 h-72 object-cover"
          />
        </div>
      </div>
      <Tab.Group>
        <div className="bg-secondary-100 p-8 rounded-bl-lg rounded-br-lg">
          <Tab.List className="flex flex-col md:flex-row md:items-center md:justify-between gap-x-2 gap-y-6 bg-secondary-900/50 py-3 px-4 rounded-lg">
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <Tab className="py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors outline-none ui-selected:bg-secondary-900 ui-selected:text-gray-100">
                Proveedores
              </Tab>
              <Tab className="py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors outline-none ui-selected:bg-secondary-900 ui-selected:text-gray-100">
                Facturas
              </Tab>
              <Tab className="py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors outline-none ui-selected:bg-secondary-900 ui-selected:text-gray-100">
                OC
              </Tab>
            </div>
            <div className="flex justify-center">
              <button className="bg-primary/90 text-black hover:bg-primary flex items-center gap-2 py-2 px-4 rounded-lg transition-colors">
                Crear ticket
              </button>
            </div>
          </Tab.List>
        </div>
        <Tab.Panels className="mt-8">
          <Tab.Panel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-secondary-100 p-8 rounded-lg">
                {/* Title card */}
                <div className="flex items-center justify-between mb-8">
                  <h1 className="text-white text-xl md:text-2xl">
                    Ticket abiertos
                  </h1>
                  <Link
                    to="/allticket"
                    className="flex items-center gap-2 text-primary"
                  >
                    Ver todos <RiArrowRightLine />
                  </Link>
                </div>
                {/* Content card */}
                <div>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      No puedo agregar una factura{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        Factura
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        Me entrega un error 400 al agregar una factura{" "}
                        <Link
                          to="/"
                          className="text-primary"
                        >
                          Ver más
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      Como puedo eliminar una OC?{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        OC
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        No, me aparece la opcion de eliminar una OC{" "}
                        <Link
                          to="/"
                          className="text-primary"
                        >
                          Ver más
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      Como cambiar el rut de un proveedor?{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        Proveedor
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        Ayuda, necesito cambiar el rut a un proveedor{" "}
                        <Link
                          to="/"
                          className="text-primary"
                        >
                          Ver más
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      Factura, sin como corregir la OC?{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        Factura
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        Asigne un proveedor que no corresponde a una factura{" "}
                        <Link
                          to="/"
                          className="text-primary"
                        >
                          Ver más
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                </div>
              </div>
              <div className="bg-secondary-100 p-8 rounded-lg">
                {/* Title card */}
                <div className="flex items-center justify-between mb-8">
                  <h1 className="text-white text-xl md:text-2xl">
                    Ticket Cerrados
                  </h1>
                  <Link
                    to="/allticket"
                    className="flex items-center gap-2 text-primary"
                  >
                    Ver todos <RiArrowRightLine />
                  </Link>
                </div>
                {/* Content card */}
                <div>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      Eliminar una factura{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        Factura
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        Agregar productos una factura{" "}
                        <Link
                          to="/"
                          className="text-primary"
                        >
                          Ver más
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      Agregar dos OC?{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        OC
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        No, me aparece la opcion de eliminar una OC{" "}
                        <Link
                          to="/"
                          className="text-primary"
                        >
                          Ver más
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      Proveedor reclama por montos?{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        Proveedor
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        Ayuda, necesito cambiar el rut a un proveedor{" "}
                        <Link
                          to="/"
                          className="text-primary"
                        >
                          Ver más
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      La factura no corresponde a un proveedor?{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        Factura
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        Asigne un proveedor que no corresponde a una factura{" "}
                        <Link
                          to="/"
                          className="text-primary"
                        >
                          Ver más
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Facturas;
