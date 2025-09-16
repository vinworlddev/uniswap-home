import { Dropdown, DropdownDivider, DropdownItem } from "flowbite-react";
import { Bell } from "lucide-react"; // Or use your own SVG/icon

export default function NotificationDropdown() {
	return (
		<Dropdown
			label=""
			dismissOnClick={false}
			renderTrigger={() => (
				<button
					type="button"
					className="relative rounded-full h-10 w-10 bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:ring-2 hover:ring-blue-500 transition"
				>
					<Bell className="w-5 h-5 text-gray-700 dark:text-gray-300" />
					{/* Notification badge */}
					<span className="absolute top-1 right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
						3
					</span>
				</button>
			)}
		>
			<DropdownItem>
				<span className="font-medium">Notifications</span>
			</DropdownItem>
			<DropdownItem>New message from Admin</DropdownItem>
			<DropdownItem>2 users registered</DropdownItem>
			<DropdownItem>Server restarted</DropdownItem>
			<DropdownDivider />
			<DropdownItem>View all</DropdownItem>
		</Dropdown>
	);
}
