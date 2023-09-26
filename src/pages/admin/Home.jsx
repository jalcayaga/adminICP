import React from "react";
import { Link } from "react-router-dom";
import CardTicket from "../../components/CardTicket";
import CardOC from "../../components/CardOC";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const Home = () => {
  return (
    <>
      {/* facturas */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Card */}
          <CardTicket
            factura="total"
            totalFacturas="1450"
            text="Facturas totales"
          />
          <CardTicket
            factura="pending"
            totalFacturas="500"
            text="Facturas pendientes"
          />
          <CardTicket
            factura="inProcess"
            totalFacturas="230"
            text="Facturas en proceso"
          />
          <CardTicket
            factura="close"
            totalFacturas="720"
            text="Facturas cerradas"
          />
        </div>
        <div>
          <h1 className="text-2xl text-white my-10">Facturas más recientes</h1>
        </div>
        <div className="bg-secondary-100 p-8 rounded-xl">
          <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 mb-10 p-4">
            <h5>ID</h5>
            <h5>Descripción</h5>
            <h5>Estatus</h5>
            <h5>Fecha</h5>
            <h5>Acciones</h5>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
              <span>#25546</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">
                Descripción
              </h5>
              <p>Compra de paneles solares</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Estatus</h5>
              <span className="py-1 px-2 bg-yellow-500/10 text-yellow-500 rounded-lg">
                Abierto
              </span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Fecha</h5>
              <span>28 octubre 2023</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Acciones</h5>
              <Menu
                menuButton={
                  <MenuButton className="flex items-center gap-x-2 bg-secondary-100 p-2 rounded-lg transition-colors">
                    Acciones
                  </MenuButton>
                }
                align="end"
                arrow
                arrowClassName="bg-secondary-100"
                transition
                menuClassName="bg-secondary-100 p-4"
              >
                <MenuItem className="p-0 hover:bg-transparent">
                  <Link
                    to="/perfil"
                    className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                  >
                    Editar
                  </Link>
                </MenuItem>
                <MenuItem className="p-0 hover:bg-transparent">
                  <Link
                    to="/perfil"
                    className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                  >
                    Eliminar
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
              <span>#11145</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">
                Descripción
              </h5>
              <p>
                PERFIL C GALVANIZADO ESTRUCTURAL 120 X 50 X 15 X 1,6mm 6 MTS
              </p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Estatus</h5>
              <span className="py-1 px-2 bg-blue-500/10 text-blue-500 rounded-lg">
                En proceso
              </span>
            </div>

            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Fecha</h5>
              <span>20 octubre 2023</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Acciones</h5>
              <Menu
                menuButton={
                  <MenuButton className="flex items-center gap-x-2 bg-secondary-100 p-2 rounded-lg transition-colors">
                    Acciones
                  </MenuButton>
                }
                align="end"
                arrow
                arrowClassName="bg-secondary-100"
                transition
                menuClassName="bg-secondary-100 p-4"
              >
                <MenuItem className="p-0 hover:bg-transparent">
                  <Link
                    to="/perfil"
                    className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                  >
                    Editar
                  </Link>
                </MenuItem>
                <MenuItem className="p-0 hover:bg-transparent">
                  <Link
                    to="/perfil"
                    className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                  >
                    Eliminar
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
              <span>#12678</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">
                Descripción
              </h5>
              <p>Petroleo - Disel Copec </p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Estatus</h5>
              <span className="py-1 px-2 bg-green-500/10 text-green-500 rounded-lg">
                Cerrado
              </span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Fecha</h5>
              <span>30 octubre 2023</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Acciones</h5>
              <Menu
                menuButton={
                  <MenuButton className="flex items-center gap-x-2 bg-secondary-100 p-2 rounded-lg transition-colors">
                    Acciones
                  </MenuButton>
                }
                align="end"
                arrow
                arrowClassName="bg-secondary-100"
                transition
                menuClassName="bg-secondary-100 p-4"
              >
                <MenuItem className="p-0 hover:bg-transparent">
                  <Link
                    to="/perfil"
                    className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                  >
                    Editar
                  </Link>
                </MenuItem>
                <MenuItem className="p-0 hover:bg-transparent">
                  <Link
                    to="/perfil"
                    className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                  >
                    Eliminar
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-500/30 border-dashed" />
      {/* OC */}
      <div>
        <h1 className="text-2xl text-white mb-8 ">Ordenes de compra</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Card */}
          <CardOC
            oc="total"
            totalOC="50"
            text="OC totales"
          />
          <CardOC
            oc="pending"
            totalOC="7"
            text="OC pendientes"
          />
          <CardOC
            oc="inProcess"
            totalOC="43"
            text="OC en proceso"
          />
          <CardOC
            oc="close"
            totalOC="72"
            text="OC cerradas"
          />
        </div>
        <div>
          <h1 className="text-2xl text-white my-10">OC más recientes</h1>
        </div>
        <div className="bg-secondary-100 p-8 rounded-xl">
          <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 mb-10 p-4">
            <h5>ID</h5>
            <h5>Descripción</h5>
            <h5>Estatus</h5>
            <h5>Fecha</h5>
            <h5>Acciones</h5>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
              <span>#25546</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">
                Descripción
              </h5>
              <p>Compra de paneles solares</p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Estatus</h5>
              <span className="py-1 px-2 bg-yellow-500/10 text-yellow-500 rounded-lg">
                Abierto
              </span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Fecha</h5>
              <span>28 octubre 2023</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Acciones</h5>
              <Menu
                menuButton={
                  <MenuButton className="flex items-center gap-x-2 bg-secondary-100 p-2 rounded-lg transition-colors">
                    Acciones
                  </MenuButton>
                }
                align="end"
                arrow
                arrowClassName="bg-secondary-100"
                transition
                menuClassName="bg-secondary-100 p-4"
              >
                <MenuItem className="p-0 hover:bg-transparent">
                  <Link
                    to="/perfil"
                    className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                  >
                    Editar
                  </Link>
                </MenuItem>
                <MenuItem className="p-0 hover:bg-transparent">
                  <Link
                    to="/perfil"
                    className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                  >
                    Eliminar
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
              <span>#11145</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">
                Descripción
              </h5>
              <p>
                PERFIL C GALVANIZADO ESTRUCTURAL 120 X 50 X 15 X 1,6mm 6 MTS
              </p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Estatus</h5>
              <span className="py-1 px-2 bg-blue-500/10 text-blue-500 rounded-lg">
                En proceso
              </span>
            </div>

            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Fecha</h5>
              <span>20 octubre 2023</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Acciones</h5>
              <Menu
                menuButton={
                  <MenuButton className="flex items-center gap-x-2 bg-secondary-100 p-2 rounded-lg transition-colors">
                    Acciones
                  </MenuButton>
                }
                align="end"
                arrow
                arrowClassName="bg-secondary-100"
                transition
                menuClassName="bg-secondary-100 p-4"
              >
                <MenuItem className="p-0 hover:bg-transparent">
                  <Link
                    to="/perfil"
                    className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                  >
                    Editar
                  </Link>
                </MenuItem>
                <MenuItem className="p-0 hover:bg-transparent">
                  <Link
                    to="/perfil"
                    className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                  >
                    Eliminar
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-secondary-900 p-4 rounded-xl">
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">ID</h5>
              <span>#12678</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">
                Descripción
              </h5>
              <p>Petroleo - Disel Copec </p>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Estatus</h5>
              <span className="py-1 px-2 bg-green-500/10 text-green-500 rounded-lg">
                Cerrado
              </span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Fecha</h5>
              <span>30 octubre 2023</span>
            </div>
            <div>
              <h5 className="md:hidden text-white font-bold mb-2">Acciones</h5>
              <Menu
                menuButton={
                  <MenuButton className="flex items-center gap-x-2 bg-secondary-100 p-2 rounded-lg transition-colors">
                    Acciones
                  </MenuButton>
                }
                align="end"
                arrow
                arrowClassName="bg-secondary-100"
                transition
                menuClassName="bg-secondary-100 p-4"
              >
                <MenuItem className="p-0 hover:bg-transparent">
                  <Link
                    to="/perfil"
                    className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                  >
                    Editar
                  </Link>
                </MenuItem>
                <MenuItem className="p-0 hover:bg-transparent">
                  <Link
                    to="/perfil"
                    className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
                  >
                    Eliminar
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
