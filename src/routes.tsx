import { createBrowserRouter } from "react-router-dom";
import App from "@/src/App.tsx";
import Counter from "@/src/pages/Counter/Counter.tsx";
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

export default router;
