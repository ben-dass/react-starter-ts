import { createBrowserRouter } from "react-router-dom";
import App from "@src/App.tsx";
import Counter from "@features/Counter/Counter.tsx";
import NotFound from "@features/NotFound.tsx";
import Home from "@features/Home";
import Inbox from "@features/Inbox";
import Calendar from "@features/Calendar";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				children: [
					{
						index: true,
						element: <Home />,
					},
					{
						path: "/counter",
						element: <Counter />,
					},
					{
						path: "/inbox",
						element: <Inbox />,
					},
					{
						path: "/calendar",
						element: <Calendar />,
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
