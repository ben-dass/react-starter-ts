import Layout from "@components/layout";
import { Outlet } from "react-router-dom";

const App = () => {
	return (
		<div className="h-screen w-screen">
			<Layout>
				<Outlet />
			</Layout>
		</div>
	);
};

export default App;
