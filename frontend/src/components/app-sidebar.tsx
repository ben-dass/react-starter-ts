import { ChevronDown } from "lucide-react";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@components/ui/sidebar";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "./ui/collapsible";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";
import { categories } from "@app/nav-menu-items";

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader className="mt-1 flex items-center font-bold uppercase">
				Starter
			</SidebarHeader>
			<Separator className="mx-2 w-[calc(100%-1rem)]" />
			<SidebarContent>
				<Collapsible
					defaultOpen
					className="group/collapsible"
				>
					<SidebarGroup>
						{categories.map((category) => (
							<span key={category.title}>
								<SidebarGroupLabel asChild>
									<CollapsibleTrigger className="flex w-full flex-row justify-between">
										{category.title}
										<ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
									</CollapsibleTrigger>
								</SidebarGroupLabel>
								<CollapsibleContent>
									<SidebarGroupContent>
										<SidebarMenu>
											{category.items.map((item) => (
												<SidebarMenuItem
													key={item.title}
												>
													<SidebarMenuButton asChild>
														<Link to={item.url}>
															<span>
																{item.title}
															</span>
														</Link>
													</SidebarMenuButton>
												</SidebarMenuItem>
											))}
										</SidebarMenu>
									</SidebarGroupContent>
								</CollapsibleContent>
							</span>
						))}
					</SidebarGroup>
				</Collapsible>
			</SidebarContent>
		</Sidebar>
	);
}
