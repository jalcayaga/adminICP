import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import LayoutAdmin from "./layouts/LayoutAdmin";
// Pages auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
// Pages admin
import Home from "./pages/admin/Home";
import Profile from "./pages/admin/Profile";
import Error404 from "./pages/Error404";
import Tickets from "./pages/admin/Tickets";
import Report from "./pages/admin/Report";
import Proyect from "./pages/admin/Proyect";
import ListTicket from "./pages/admin/ListTicket";
import CreateProveedor from "./pages/admin/CreateProveedor";
import CreateProduct from "./pages/admin/CreateProduct";
import CreateDT from "./pages/admin/CreateDT";
import CreateOC from "./pages/admin/CreateOC";
import ListProveedores from "./pages/admin/ListProveedores";
import ListProducts from "./pages/admin/ListProducts";
import ListDT from "./pages/admin/ListDT";
import ListOC from "./pages/admin/ListOC";
import CargaMasiva from "./pages/admin/CargaMasiva";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/registro"
          element={<Register />}
        />
        <Route
          path="/olvide-password"
          element={<ForgetPassword />}
        />
        <Route
          path="/"
          element={<LayoutAdmin />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="perfil"
            element={<Profile />}
          />
          <Route
            path="tickets"
            element={<Tickets />}
          />
          <Route
            path="reportes"
            element={<Report />}
          />
          <Route
            path="proyectos"
            element={<Proyect />}
          />
          <Route
            path="allticket"
            element={<ListTicket />}
          />
          <Route
            path="crear-proveedor"
            element={<CreateProveedor />}
          />
          <Route
            path="listado-proveedores"
            element={<ListProveedores />}
          />
          <Route
            path="crear-producto"
            element={<CreateProduct />}
          />
          <Route
            path="listado-producto"
            element={<ListProducts />}
          />
          <Route
            path="crear-dt"
            element={<CreateDT />}
          />
          <Route
            path="listado-dt"
            element={<ListDT />}
          />
          <Route
            path="carga-masiva"
            element={<CargaMasiva />}
          />
          <Route
            path="crear-oc"
            element={<CreateOC />}
          />
          <Route
            path="listado-oc"
            element={<ListOC />}
          />
        </Route>
        <Route
          path="*"
          element={<Error404 />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
