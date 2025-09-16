import type { Project } from "../types";


export const projects: Project[] = [
	{
		id: 1,
		title: "E-Commerce Platform",
		description: "Full-stack e-commerce solution with Laravel, Mysql",
		longDescription: "A comprehensive e-commerce platform built from the ground up, featuring user authentication, product catalog management, shopping cart functionality, secure payment processing with Paystack, order management,Affiliate marketing and admin dashboard. The application handles thousands of products and users with optimized performance and SEO-friendly structure.",
		tech: ["Laravel", "Mysql", "Paystack"],
		type: "web",
		image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
		gallery: [
			"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
			"https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
			"https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
			"https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop"
		],
		videoDemo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
		features: [
			"User Authentication & Authorization",
			"Product Catalog with Search & Filters",
			"Shopping Cart & Wishlist",
			"Paystack Payment Integration",
			"Order Management System",
			"Affiliate Marketing System",
			"Admin Dashboard",
			"Responsive Design",
			"SEO Optimized"
		],
		challenges: "The main challenge was handling real-time inventory updates across multiple user sessions while maintaining data consistency. Implemented Redis for caching and WebSocket connections for live updates.",
		testimonial: {
			text: "The e-commerce platform exceeded our expectations. The team delivered a robust, scalable solution that increased our online sales by 300% in the first quarter.",
			author: "Sarah Johnson",
			role: "CEO, Fashion Forward",
			avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
			rating: 5
		},
		github: "#",
		live: "https://princewillworld.com"
	},
	{
		id: 2,
		title: "Task Management App",
		description: "Cross-platform mobile app built with React Native",
		longDescription: "A productivity-focused mobile application that helps teams and individuals organize their work efficiently. Features include task creation, assignment, due date tracking, team collaboration, file attachments, and real-time notifications across iOS and Android platforms.",
		tech: ["React Native", "Firebase", "Redux"],
		type: "mobile",
		image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
		gallery: [
			"https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
			"https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
			"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
		],
		videoDemo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
		features: [
			"Cross-platform (iOS & Android)",
			"Real-time Sync with Firebase",
			"Task Assignment & Tracking",
			"Team Collaboration",
			"Push Notifications",
			"File Attachments",
			"Offline Mode Support",
			"Dark/Light Theme"
		],
		challenges: "Ensuring seamless offline functionality while maintaining data synchronization when the device comes back online. Implemented a robust caching strategy with conflict resolution.",
		testimonial: {
			text: "This task management app transformed how our team collaborates. The intuitive design and reliable sync functionality have made us 40% more productive.",
			author: "Michael Chen",
			role: "Project Manager, Tech Innovations",
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
			rating: 5
		},
		github: "https://github.com/yourusername/task-manager",
		live: "https://play.google.com/store/apps/details?id=com.yourapp"
	},
	{
		id: 3,
		title: "Real-time Chat Application",
		description: "WebSocket-based chat app with authentication and file sharing",
		longDescription: "A modern real-time messaging platform supporting both one-on-one and group conversations. Built with scalability in mind, it handles thousands of concurrent users with features like message encryption, file sharing, emoji reactions, and message search functionality.",
		tech: ["Socket.io", "Express", "PostgreSQL", "JWT"],
		type: "web",
		image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop",
		gallery: [
			"https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop",
			"https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=800&h=600&fit=crop",
			"https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800&h=600&fit=crop",
			"https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop"
		],
		videoDemo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
		features: [
			"Real-time Messaging",
			"Group Chat Support",
			"File & Media Sharing",
			"Message Encryption",
			"Emoji Reactions",
			"Message Search",
			"Online Status Indicators",
			"Message History"
		],
		challenges: "Managing WebSocket connections at scale and ensuring message delivery reliability. Implemented message queuing and acknowledgment systems for guaranteed delivery.",
		testimonial: {
			text: "The real-time chat application we built with this developer handles our 10,000+ daily active users flawlessly. The scalability and security features are top-notch.",
			author: "Emma Rodriguez",
			role: "CTO, ConnectNow",
			avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
			rating: 5
		},
		github: "https://github.com/yourusername/chat-app",
		live: "https://yourchat-demo.com"
	},
	{
		id: 4,
		title: "Fitness Tracking App",
		description: "Mobile app with workout plans and progress tracking",
		longDescription: "A comprehensive fitness companion app that helps users achieve their health goals through personalized workout plans, progress tracking, nutrition logging, and social features. Integrates with wearable devices and health platforms for seamless data synchronization.",
		tech: ["Flutter", "Firebase", "Google Fit API"],
		type: "mobile",
		image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
		gallery: [
			"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
			"https://images.unsplash.com/photo-1434608519344-49d77a699e1d?w=800&h=600&fit=crop",
			"https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&h=600&fit=crop"
		],
		videoDemo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
		features: [
			"Personalized Workout Plans",
			"Progress Tracking & Analytics",
			"Nutrition Logging",
			"Wearable Device Integration",
			"Social Features & Challenges",
			"Custom Exercise Library",
			"Goal Setting & Reminders",
			"Health Data Sync"
		],
		challenges: "Integrating with multiple health APIs and ensuring data accuracy across different devices and platforms. Developed a unified data normalization layer.",
		testimonial: {
			text: "This fitness app has been a game-changer for our users. The seamless integration with wearables and personalized workout plans have resulted in 85% user retention.",
			author: "David Park",
			role: "Founder, FitLife Solutions",
			avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
			rating: 5
		},
		github: "https://github.com/yourusername/fitness-app",
		live: "https://apps.apple.com/app/your-fitness-app/id123456789"
	}
];