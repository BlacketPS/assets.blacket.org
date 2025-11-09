import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom";
import * as routes from "./pages/index.routes";
import Wrapper from "./Wrapper";
import useCreateRoute from "./useCreateRoute";

import "./all.scss";

const router = createBrowserRouter([
	{
		id: "app",
		errorElement: <Navigate to="/" />,
		element: <Wrapper><Outlet /></Wrapper>,
		children: Object.values(routes).flatMap((route) => useCreateRoute(route))
	}
]);

export default function App() {
	return <RouterProvider router={router} />;
}
