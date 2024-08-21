import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";
import { RoutesPaths } from "./RoutesPaths";

import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/Notfound";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path={RoutesPaths.notFound()} element={<NotFound />} />
        <Route path={RoutesPaths.home()} element={<Home />} />
        <Route path={RoutesPaths.dashboard()} element={<Dashboard />} />
        <Route path={RoutesPaths.register()} element={<Register />} />
        <Route path={RoutesPaths.login()} element={<Login />} />
      </RouterRoutes>
    </BrowserRouter>
  );
}
