import { RiPencilLine, RiDeleteBinLine } from "react-icons/ri";

const ListDT = () => {
  // Datos de ejemplo para una sola factura
  const invoices = [
    {
      invoiceNumber: "Factura-001",
      customerName: "Empresa A",
      issueDate: "2023-01-15",
      totalAmount: 15000,
    },
    {
      invoiceNumber: "Factura-002",
      customerName: "Cliente B",
      issueDate: "2023-01-20",
      totalAmount: 7500,
    },
    {
      invoiceNumber: "Factura-003",
      customerName: "Empresa C",
      issueDate: "2023-02-05",
      totalAmount: 22000,
    },
    {
      invoiceNumber: "Factura-004",
      customerName: "Cliente D",
      issueDate: "2023-02-10",
      totalAmount: 9000,
    },
    {
      invoiceNumber: "Factura-005",
      customerName: "Empresa E",
      issueDate: "2023-03-02",
      totalAmount: 18000,
    },
    {
      invoiceNumber: "Factura-006",
      customerName: "Cliente F",
      issueDate: "2023-03-07",
      totalAmount: 6000,
    },
    {
      invoiceNumber: "Factura-007",
      customerName: "Empresa G",
      issueDate: "2023-04-15",
      totalAmount: 28000,
    },
    {
      invoiceNumber: "Factura-008",
      customerName: "Cliente H",
      issueDate: "2023-04-20",
      totalAmount: 11000,
    },
    {
      invoiceNumber: "Factura-009",
      customerName: "Empresa I",
      issueDate: "2023-05-10",
      totalAmount: 21000,
    },
    {
      invoiceNumber: "Factura-010",
      customerName: "Cliente J",
      issueDate: "2023-05-15",
      totalAmount: 9500,
    },
    {
      invoiceNumber: "Factura-011",
      customerName: "Empresa K",
      issueDate: "2023-06-02",
      totalAmount: 13000,
    },
    {
      invoiceNumber: "Factura-012",
      customerName: "Cliente L",
      issueDate: "2023-06-08",
      totalAmount: 7500,
    },
    {
      invoiceNumber: "Factura-013",
      customerName: "Empresa M",
      issueDate: "2023-07-12",
      totalAmount: 32000,
    },
    {
      invoiceNumber: "Factura-014",
      customerName: "Cliente N",
      issueDate: "2023-07-18",
      totalAmount: 8800,
    },
    {
      invoiceNumber: "Factura-015",
      customerName: "Empresa O",
      issueDate: "2023-08-25",
      totalAmount: 29000,
    },
    {
      invoiceNumber: "Factura-016",
      customerName: "Cliente P",
      issueDate: "2023-08-30",
      totalAmount: 10500,
    },
    {
      invoiceNumber: "Factura-017",
      customerName: "Empresa Q",
      issueDate: "2023-09-05",
      totalAmount: 26000,
    },
    {
      invoiceNumber: "Factura-018",
      customerName: "Cliente R",
      issueDate: "2023-09-10",
      totalAmount: 7800,
    },
    {
      invoiceNumber: "Factura-019",
      customerName: "Empresa S",
      issueDate: "2023-10-18",
      totalAmount: 18000,
    },
    {
      invoiceNumber: "Factura-020",
      customerName: "Cliente T",
      issueDate: "2023-10-23",
      totalAmount: 9400,
    },
  ];

  return (
    <div>
      <h1 className="text-xl text-gray-100 mb-4">Detalle de Facturas</h1>
      <table className="table-auto w-full ">
        <thead className="text-primary text-left">
          <tr>
            <th>Número de Factura</th>
            <th>Cliente</th>
            <th>Fecha de Emisión</th>
            <th>Monto Total</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.invoiceNumber}>
              <td>{invoice.invoiceNumber}</td>
              <td>{invoice.customerName}</td>
              <td>{invoice.issueDate}</td>
              <td>${invoice.totalAmount}</td>
              <td>
                <button
                  className="mr-2 text-yellow-500 hover:text-yellow-900"
                  onClick={() => handleEdit(invoice)}
                >
                  <RiPencilLine />
                </button>
                <button
                  className="text-red-500 hover:text-red-900"
                  onClick={() => handleDelete(invoice.invoiceNumber)}
                >
                  <RiDeleteBinLine />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListDT;
