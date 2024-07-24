import AboutUs from "@/components/sections/AboutUs";
import Founders from "@/components/sections/Founders";
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import Product from "@/components/sections/Product";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Header />
			<HeroSection />
			<AboutUs />
			<Founders />
			<Product />
		</main>
	);
}
