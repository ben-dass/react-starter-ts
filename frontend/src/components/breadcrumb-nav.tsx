import { categories } from "@app/nav-menu-items";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@components/ui/breadcrumb";
import { useLocation } from "react-router-dom";

export function BreadcrumbNav() {
	const location = useLocation();
	let category = location.pathname.split("/")[1];
	category = category.charAt(0).toUpperCase() + category.slice(1);

	const temp = categories.find((category) => category.title);
	console.log(temp?.title);

	return (
		<Breadcrumb>
			<BreadcrumbList className="flex flex-row items-center justify-center">
				<BreadcrumbItem>{temp?.title}</BreadcrumbItem>
				<BreadcrumbSeparator className="mt-[0.2rem]" />
				<BreadcrumbItem>
					<BreadcrumbPage>{category}</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}
