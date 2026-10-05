import { Link } from "@tanstack/react-router";

export default function Navbar() {
	return (
		<nav className="flex justify-between items-center">
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
			<div></div>
		</nav>
	);
}
