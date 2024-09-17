import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "@/src/state/store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Counter from "@/src/pages/Counter.tsx";
import NotFound from "@/src/pages/NotFound.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				children: [
					{
						index: true,
						element: <Counter />,
					},
				],
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>,
);
