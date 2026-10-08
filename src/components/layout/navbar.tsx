import { Link } from "@tanstack/react-router";
import {
	ArrowRight,
	CircleQuestionMark,
	Contact,
	Grid2X2,
	Image,
	Menu,
	MessageCircleQuestion,
	Spotlight,
} from "lucide-react";
import { useIsMobile } from "#/hooks/use-mobile";
import { Button } from "../ui/button";
import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerTrigger,
} from "../ui/drawer";

export default function Navbar() {
	const isMobile = useIsMobile();

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

	return isMobile ? (
		<nav className="flex justify-between items-center border-b border-b-accent p-4">
			<Link to="/">
				<span className="text-2xl font-semibold">CRT Studio</span>
			</Link>
			<Drawer direction="right">
				<DrawerTrigger>
					<Menu />
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>Menu</DrawerHeader>
					<div className="flex flex-col gap-2">
						{menuItem.map((item) => (
							<Button
								asChild
								key={item.name}
								variant="ghost"
								className="justify-start gap-3 px-4"
							>
								<Link to="/">
									<item.icon />
									{item.name}
								</Link>
							</Button>
						))}
					</div>
				</DrawerContent>
			</Drawer>
		</nav>
	) : (
		<nav className="flex justify-between items-center border-b border-b-accent p-4">
			<Link to="/">
				<span className="text-2xl font-semibold">CRT Studio</span>
			</Link>
			<div>
				<Link to="/">Studios</Link>
				<Link to="/">How It Works</Link>
				<Link to="/">Add-ons</Link>
				<Link to="/">Gallery</Link>
				<Link to="/">FAQ</Link>
				<Link to="/">Contact</Link>
			</div>
			<div>
				<Button asChild>
					<Link to="/">
						<ArrowRight />
						<span>Book Now</span>
					</Link>
				</Button>
			</div>
		</nav>
	);
}
