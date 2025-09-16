
import { Avatar, Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from "flowbite-react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export function ProfileDropdown() {
	const { user, signOut } = useAuth()
	const navigate = useNavigate()

	const handleSignOut = async () => {
		try {
			await signOut()
			navigate('/login')
		} catch (error) {
			console.error('Error signing out:', error)
		}
	}
	return (
		<Dropdown label={<Avatar placeholderInitials="RR" size="sm" rounded />} arrowIcon={false} inline size="sm">
			<DropdownHeader>
				{/* <span className="block text-sm">{user?.}</span> */}
				<span className="block truncate text-sm font-medium">{user?.email}</span>
			</DropdownHeader>
			<DropdownItem>Dashboard</DropdownItem>
			<DropdownItem>Settings</DropdownItem>
			<DropdownItem>Earnings</DropdownItem>
			<DropdownDivider />
			<DropdownItem onClick={handleSignOut}>Sign out</DropdownItem>

		</Dropdown>
	);
}
