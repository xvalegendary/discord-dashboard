"use client";

import Link from "next/link"
import { ContentLayout } from "@/components/admin-panel/content-layout"
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/custom/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "@/components/ui/dialog"
import { RecentSales } from "./recent-sales"
import { AreaGraph } from "./area-graph"
import { BarGraph } from "./bar-graph"
import { PieGraph } from "./pie-graph"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select"
import { useEffect, useState } from "react"

const countusers = 0
const onlineusers = 352

export default function DashboardPage() {
  const [visitCount, setVisitCount] = useState<number>(0)
	const countusers = 0
	const onlineusers = 352

	useEffect(() => {
		// Получаем текущее значение из localStorage
		const storedCount = localStorage.getItem("visitCount")
		const newCount = storedCount ? parseInt(storedCount) + 1 : 1

		// Обновляем состояние и localStorage
		setVisitCount(newCount)
		localStorage.setItem("visitCount", newCount.toString())
	}, [])

	return (
		<ContentLayout title='Dashboard'>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link href='/'>Home</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>Dashboard</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
				<Card className='main-card'>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>
							Users from server
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>{countusers}</div>
					</CardContent>
				</Card>
				<Card className='main-card'>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>Online users</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>{onlineusers}</div>
					</CardContent>
				</Card>
				<Card className='main-card'>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>
							Joined this month
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>+12943</div>
					</CardContent>
				</Card>
				<Card className='main-card'>
					<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
						<CardTitle className='text-sm font-medium'>Total visits</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='text-2xl font-bold'>{visitCount} visits</div>
					</CardContent>
				</Card>
			</div>

			{/* Ban Menu Dialog */}
			{/* <Dialog>
				<DialogTrigger asChild>
					<Button className='btn-dashboard' variant='outline'>
						Ban Menu
					</Button>
				</DialogTrigger>
				<DialogContent className='sm:max-w-[425px]'>
					<DialogHeader>
						<DialogTitle>Ban Menu</DialogTitle>
						<DialogDescription>
							Make changes to your profile here. Click save when you're done.
						</DialogDescription>
					</DialogHeader>
					<div className='grid gap-4 py-4'>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='name' className='text-right'>
								Username
							</Label>
							<Input type='text' placeholder='Login' className='col-span-3' />
						</div>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='username' className='text-right'>
								Action
							</Label>
							<Select>
								<SelectTrigger className='w-[180px]'>
									<SelectValue placeholder='Select action' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='ban'>Ban</SelectItem>
									<SelectItem value='unban'>Unban</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
					<DialogFooter>
						<Button variant='outline' className='mr-2 '>
							Cancel
						</Button>
						<Button variant='primary'>Save</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			{/* Mute Menu Dialog */}
			{/* <Dialog>
				<DialogTrigger asChild>
					<Button className='btn-dashboard' variant='outline'>
						Mute Menu
					</Button>
				</DialogTrigger>
				<DialogContent className='sm:max-w-[425px]'>
					<DialogHeader>
						<DialogTitle>Mute Menu</DialogTitle>
						<DialogDescription>
							Make changes to your profile here. Click save when you're done.
						</DialogDescription>
					</DialogHeader>
					<div className='grid gap-4 py-4'>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='name' className='text-right'>
								Username
							</Label>
							<Input type='text' placeholder='Login' className='col-span-3' />
						</div>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='username' className='text-right'>
								Action
							</Label>
							<Select>
								<SelectTrigger className='w-[180px]'>
									<SelectValue placeholder='Select action' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='mute'>Mute</SelectItem>
									<SelectItem value='unmute'>Unmute</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
					<DialogFooter>
						<Button variant='outline' className='mr-2'>
							Cancel
						</Button>
						<Button variant='primary'>Save</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog> */}
			<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7'>
				<div className='col-span-4'>
					<BarGraph />
				</div>
        <div id="main-cards-dashboard" className='col-span-4 md:col-span-3'>
				<Card className='col-span-4 md:col-span-3'>
					<CardHeader>
						<CardTitle>Last joined</CardTitle>
					</CardHeader>
					<CardContent>
						<RecentSales />
					</CardContent>
				</Card>
      </div>
				<div className='col-span-4'>
					<AreaGraph />
				</div>
				<div className='col-span-4 md:col-span-3'>
					<PieGraph/>
				</div>
			</div>
		</ContentLayout>
	)
}
