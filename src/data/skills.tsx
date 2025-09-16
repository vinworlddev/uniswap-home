// src/data/skills.ts
import { Code, Smartphone, Server, Database } from "lucide-react";
import type { Skill } from "../types";

export const skills: Skill[] = [
	{
		name: "Frontend",
		items: ["React", "Javascript", "Tailwind CSS", "Bootstrap"],
		icon: <Code className="w-6 h-6" />,
	},
	{
		name: "Mobile",
		items: ["React Native", "Flutter", "iOS", "Android"],
		icon: <Smartphone className="w-6 h-6" />,
	},
	{
		name: "Backend",
		items: ["Node.js", "Laravel", "Rest Apis", "Appwrite", "Firebase"],
		icon: <Server className="w-6 h-6" />,
	},
	{
		name: "Database",
		items: ["Mysql", "MongoDB", "Appwrite", "Firebase"],
		icon: <Database className="w-6 h-6" />,
	},
];
