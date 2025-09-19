import { useEffect, useState } from "react"
import { getWaitlistStats } from "../../supabase/waitlist"
import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react"

const Admin = () => {
	const [stats, setStats] = useState<any>(null)

	useEffect(() => {
		const loadData = async () => {
			try {
				const data = await getWaitlistStats()
				setStats(data)
			} catch (err) {
				console.error("Failed to load admin stats:", err)
			}
		}
		loadData()
	}, [])

	if (!stats) {
		return <p className="p-6">Loading stats...</p>
	}

	return (
		<div className="max-w-7xl mx-auto px-4 !mt-10">
			<h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

			{/* Stats summary */}
			<div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
				<div className="stat-card">
					<span className="stat-number">{stats.totalSubscribers}</span>
					<span className="stat-label">Total Subscribers</span>
				</div>
				<div className="stat-card">
					<span className="stat-number">{stats.todaySignups}</span>
					<span className="stat-label">Today’s Signups</span>
				</div>
				<div className="stat-card">
					<span className="stat-number">{stats.weeklyGrowth}%</span>
					<span className="stat-label">Weekly Growth</span>
				</div>
			</div>

			{/* Recent Subscribers Table */}
			<h3 className="mb-4 text-lg font-semibold">Recent Subscribers</h3>
			
			<div className="overflow-x-auto">
				<Table>
					<TableHead>
						<TableRow>
							<TableHeadCell>SN</TableHeadCell>
							<TableHeadCell>Email</TableHeadCell>
							<TableHeadCell>Date</TableHeadCell>
							<TableHeadCell>Action</TableHeadCell>
						</TableRow>
					</TableHead>
					<TableBody className="divide-y">
						{stats.recentSubscribers.map((sub: any, index: number) => (
							<TableRow
								key={sub.email}
								className="border-gray-700 bg-gray-800"
							>
								<TableCell className="whitespace-nowrap font-medium text-white">
									{index + 1}
								</TableCell>
								<TableCell className="whitespace-nowrap font-medium text-white">{sub.email}</TableCell>
								<TableCell>
									{new Date(sub.created_at).toLocaleDateString()}
								</TableCell>
								<TableCell className="whitespace-nowrap font-medium text-white">
									<Button className="text-xs md:text-base">
										Send App
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	)
}

export default Admin
