import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Circle, Maximize2, Ruler, Users2 } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main className="space-y-16">
			<section>
				<div className="mx-auto max-w-7xl px-8 pb-12 pt-10 text-center space-y-8">
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
				<div className="grid grid-cols-3 gap-2 pb-16 px-8">
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
				<div className="overflow-hidden border-y py-6 ">
					<motion.div
						className="flex w-max whitespace-nowrap"
						animate={{ x: "-50%" }}
						transition={{
							ease: "linear",
							duration: 28,
							repeat: Infinity,
						}}
					>
						{Array.from({ length: 2 }).map((_, i) => (
							<span
								key={i}
								className="flex gap-10 shrink-0 ps-10 items-center text-sm"
							>
								{[
									"Cyc walls",
									"Daylight",
									"Strobes included",
									"Hourly rates",
									"Instant confirmation",
									"Free cancellation",
									"Tether ready",
								].map((t) => (
									<span key={t}>· {t}</span>
								))}
							</span>
						))}
					</motion.div>
				</div>
			</section>

			<section className="px-6">
				<div className=" flex justify-between items-center pb-4">
					<h2 className="font-heading text-4xl">The Rooms</h2>
					<span>04 Available</span>
				</div>
				<div className="space-y-4">
					{Array.from({ length: 4 }).map((_, i) => (
						<Card key={i} className="relative mx-auto w-full pt-0">
							<div className="absolute inset-0 z-30 aspect-video bg-black/35" />
							<img
								src="https://avatar.vercel.sh/shadcn1"
								alt="Event cover"
								className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
							/>
							<CardHeader>
								<p className="text-xs mb-4">0{i + 1} - Raw / Editorial</p>
								<CardTitle className="text-4xl">Room Title</CardTitle>
								<CardDescription>Room description</CardDescription>
							</CardHeader>
							<CardFooter className="gap-10">
								<span className="flex items-center gap-1.5">
									<Ruler size={14} /> 48 m2
								</span>
								<span className="flex items-center gap-1.5">
									<Users2 size={14} /> up to 8
								</span>
								<span className="flex items-center gap-1.5">
									<Maximize2 size={14} /> 3.4m
								</span>
								<span className="text-lg font-semibold ms-auto">
									$65<span className="text-sm font-normal">/hr</span>
								</span>
							</CardFooter>
						</Card>
					))}
				</div>
			</section>
		</main>
	);
}
