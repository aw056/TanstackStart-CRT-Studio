import {
	CircleQuestionMark,
	Contact,
	Grid2X2,
	Image,
	MessageCircleQuestion,
	Spotlight,
} from "lucide-react";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuItem,
} from "../ui/sidebar";

export default function AppSidebar() {
	const menuItem = [
		{
			name: "Studio",
			link: "/",
			icon: Grid2X2,
		},
		{
			name: "How It Works",
			link: "/",
			icon: CircleQuestionMark,
		},
		{
			name: "Add-ons",
			link: "/",
			icon: Spotlight,
		},
		{
			name: "Gallery",
			link: "/",
			icon: Image,
		},
		{
			name: "FAQ",
			link: "/",
			icon: MessageCircleQuestion,
		},
		{
			name: "Contact",
			link: "/",
			icon: Contact,
		},
	];

	return (
		<Sidebar>
			<SidebarHeader></SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarMenu>
						{menuItem.map((item) => (
							<SidebarMenuItem key={item.name}>
								<item.icon />
								{item.name}
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
