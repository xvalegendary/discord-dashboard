'use client';
import { useState } from "react"
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
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogClose
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function AccountPage() {
	const [open, setOpen] = useState(false)
	const [saved, setSaved] = useState(false)
	const [inputValue, setInputValue] = useState("")
	const [error, setError] = useState<string | null>(null)
  const date = new Date("2024-02-20").toISOString().split("T")[0]
	const sucsess = "[OK]"
	const fail = "[FAIL]"
	const warning = "[WARNING]"

	const handleSave = async () => {
		if (inputValue.trim() === "") {
			setError("Input field cannot be empty!")
			return
		}

		try {
			const response = await fetch("https://discord.com/api/v10/users/@me", {
				method: "GET",
				headers: {
					Authorization: `Bot ${inputValue}` // Используйте `Bearer ${inputValue}` для пользовательских токенов
				}
			})

			if (!response.ok) {
				throw new Error("Invalid token")
			}

			const data = await response.json()
			console.log(sucsess + date + "Token is valid:", data)
			setSaved(true)
			setError(null)
		} catch (err) {
			setError(err.message)
		}
	}

	return (
		<>
			<ContentLayout title='Login'>
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
							<BreadcrumbPage>Login</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</ContentLayout>
			<Dialog defaultOpen={true}>
				<DialogContent className='sm:max-w-[425px]'>
					<DialogHeader>
						<DialogTitle>Token</DialogTitle>
						<DialogDescription>
							The token can be found{" "}
							<a
								className='text-blue-500'
								href='https://discord.com/developers/applications'
							>
								here
							</a>
						</DialogDescription>
					</DialogHeader>
					<div className='grid gap-4 py-4'>
						<div className='grid grid-cols-4 items-center gap-4'>
							<Label htmlFor='token' className='text-right'>
								Token
							</Label>
							<Input
								id='token'
								value={inputValue}
								onChange={e => setInputValue(e.target.value)}
								type='text'
								placeholder='Your token'
								className='col-span-3'
							/>
						</div>
					</div>
					{saved && (
						<p className='text-center text-sm text-gray-500'>
							You can close this window now.
						</p>
					)}
					{error && <p className='text-center text-red-500'>{error}</p>}
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
