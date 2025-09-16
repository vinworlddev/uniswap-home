// src/types/index.ts
import type { ReactNode } from "react";

export interface Testimonial {
	text: string;
	author: string;
	role: string;
	avatar: string;
	rating: number;
}

export interface Project {
	id: number;
	title: string;
	description: string;
	longDescription: string;
	tech: string[];
	type: "web" | "mobile";
	image: string;
	gallery: string[];
	videoDemo: string;
	features: string[];
	challenges: string;
	testimonial: Testimonial;
	github: string;
	live: string;
}

export interface Skill {
	name: string;
	items: string[];
	icon: ReactNode;
}




