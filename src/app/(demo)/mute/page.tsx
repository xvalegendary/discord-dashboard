"use client"

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
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription
} from "@/components/ui/card"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogClose
} from "@/components/ui/dialog"
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

export default function Mute() {
	const [open, setOpen] = useState(false)
	const [saved, setSaved] = useState(false)
	const [action, setAction] = useState("")
	const [muteDuration, setMuteDuration] = useState("")

	const date = new Date("2024-02-20").toISOString().split("T")[0]
	const success = "[OK]"
	const fail = "[FAIL]"
	const warning = "[WARNING]"

	const handleSave = () => {
		setSaved(true)
		console.log(success + date + " Запрос выполнен")
	}

	const handleActionChange = (value) => {
		setAction(value)
		if (value !== 'mute') {
			setMuteDuration("") 
		}
	}

	return (
		<>
			<ContentLayout title='Mute Menu'>
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link href='/'>Home</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link href='/dashboard'>Dashboard</Link>
							</BreadcrumbLink>
							<BreadcrumbSeparator />
						</BreadcrumbItem>
						<BreadcrumbItem>
							<BreadcrumbPage>Mute Menu</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</ContentLayout>
			<Dialog defaultOpen={true}>
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
							<Select onValueChange={handleActionChange}>
								<SelectTrigger className='w-[180px]'>
									<SelectValue placeholder='Select action' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='mute'>Mute</SelectItem>
									<SelectItem value='unmute'>Unmute</SelectItem>
								</SelectContent>
							</Select>
						</div>
						{action === 'mute' && (
							<div className='grid grid-cols-4 items-center gap-4'>
								<Label htmlFor='duration' className='text-right'>
									Duration (minutes)
								</Label>
								<Input 
									type='number' 
									placeholder='Enter duration' 
									value={muteDuration} 
									onChange={(e) => setMuteDuration(e.target.value)} 
									className='col-span-3' 
								/>
							</div>
						)}
					</div>
					{saved && (
						<p className='text-center text-sm text-gray-500'>
							You can close this window now.
						</p>
					)}
					<DialogFooter>
						<DialogClose asChild>
							<Button type='button' variant='secondary'>
								Close
							</Button>
						</DialogClose>
						<Button onClick={handleSave} variant='secondary' type='button'>
							Save
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
  )
}
	