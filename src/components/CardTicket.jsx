import React from "react";
import { Link } from "react-router-dom";
import { RiTicketLine, RiMore2Fill, RiAddLine } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const CardTicket = (props) => {
  const { factura, totalFacturas, text } = props;

  let status = "";
  let textColor = "";

  switch (factura) {
    case "pending":
      status = "bg-yellow-500/10 text-yellow-500";
      textColor = "text-yellow-500";
      break;
    case "inProcess":
      status = "bg-blue-500/10 text-blue-500";
      textColor = "text-blue-500";
      break;
    case "close":
      status = "bg-green-500/10 text-green-500";
      textColor = "text-green-500";
      break;
    case "total":
      status = "bg-pink-500/10 text-pink-500";
      textColor = "text-pink-500";
      break;
  }

  return (
    <div className="bg-secondary-100 p-8 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <RiTicketLine
            className={`text-4xl ${status} p-2 box-content rounded-xl`}
          />
        </div>
        <div>
          <Menu
            menuButton={
              <MenuButton className="flex items-center gap-x-2 hover:bg-secondary-900 p-2 rounded-lg transition-colors">
                <RiMore2Fill />
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
                to="#"
                className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
              >
                Ver Facturas
              </Link>
            </MenuItem>
            <MenuItem className="p-0 hover:bg-transparent">
              <Link
                to="#"
                className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1"
              >
                Editar
              </Link>
            </MenuItem>
          </Menu>
        </div>
      </div>
      {/* Number of tickets */}
      <div>
        <h1 className="text-4xl text-white font-bold mb-4">{totalFacturas}</h1>
        <p className={textColor}>{text}</p>
      </div>
      <hr className="border border-dashed border-gray-500/50 my-4" />
    </div>
  );
};

export default CardTicket;
