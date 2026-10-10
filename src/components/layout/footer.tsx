import { Lock } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-accent border-t px-5 py-10 font-mono text-xs">
			<div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row">
				<span>CRT Studio — 14 Cathode Lane, Open 08:00–22:00 daily</span>
				<span className="flex items-center gap-2 text-muted-foreground">
					<Lock size={12} /> Payments encrypted · Free cancellation up to 48h
				</span>
			</div>
		</footer>
	);
}
