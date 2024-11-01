import { BreadcrumbNav } from "./breadcrumb-nav";
import { Search } from "./search";

export default function TopNav() {
	return (
		<div className="mx-2 flex w-full flex-row items-center justify-between">
			<BreadcrumbNav />
			<div className="flex flex-row items-center justify-center gap-2">
				<Search />
				<span className="flex rounded-lg border px-2 py-1 text-sm">
					BD
				</span>
			</div>
		</div>
	);
}
