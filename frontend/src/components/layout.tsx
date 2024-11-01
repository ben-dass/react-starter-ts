import { SidebarProvider, SidebarTrigger } from "@components/ui/sidebar";
import { AppSidebar } from "@components/app-sidebar";
import TopNav from "./top-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className="h-screen w-screen">
				<div className="flex flex-row items-center border-b-[1px] border-gray-200 px-2 py-2">
					<SidebarTrigger />
					<TopNav />
				</div>
				<div className="m-2 flex h-full w-full justify-center">
					{children}
				</div>
			</main>
		</SidebarProvider>
	);
}
