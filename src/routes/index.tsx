import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Circle } from "lucide-react";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import { Card } from "#/components/ui/card";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main>
			<section className="px-4">
				<div className="mx-auto max-w-7xl px-5 pb-12 pt-10 text-center space-y-10">
					<Badge className="bg-accent-foreground">
						<Circle fill="#f0b100" strokeWidth={0} />
						<span>4 Rooms &middot; Hourly &middot; Live Avaibility</span>
					</Badge>
					<h1 className="font-heading text-6xl font-normal">
						Rent the <span className="italic text-primary">light</span>
						<br />
						Keep the frame
					</h1>
					<p className="text-sm">
						Photo studios by the hour. Pick a room, watch the calendar update in
						real time, and lock in your session in under two minutes.
					</p>
					<Button size="lg" asChild>
						<Link to="/">
							Browse Studios <ArrowRight />
						</Link>
					</Button>
				</div>
				<div className="grid grid-cols-3 gap-2">
					<Card className="p-0 relative">
						<div className="absolute inset-0 z-30 aspect-3/4 bg-black/35" />
						<img
							src="https://avatar.vercel.sh/shadcn1"
							alt="Event cover"
							className="relative z-20 aspect-3/4 w-full object-cover brightness-60 grayscale dark:brightness-40"
						/>
					</Card>
					<Card className="p-0 relative">
						<div className="absolute inset-0 z-30 aspect-3/4 bg-black/35" />
						<img
							src="https://avatar.vercel.sh/shadcn1"
							alt="Event cover"
							className="relative z-20 aspect-3/4 w-full object-cover brightness-60 grayscale dark:brightness-40"
						/>
					</Card>
					<Card className="p-0 relative">
						<div className="absolute inset-0 z-30 aspect-3/4 bg-black/35" />
						<img
							src="https://avatar.vercel.sh/shadcn1"
							alt="Event cover"
							className="relative z-20 aspect-3/4 w-full object-cover brightness-60 grayscale dark:brightness-40"
						/>
					</Card>
				</div>
			</section>
		</main>
	);
}
