/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client"

import { DataTable } from "@/components/DataTable"
import { ColumnDef } from "@tanstack/react-table"
import React from "react"
import PageTitle from "@/components/PageTitle"
import { ContentLayout } from "@/components/admin-panel/content-layout"
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import Link from "next/link"

type Props = {}
type Info = {
	name: string
	id: string
	joindate: string
	platform: string
}

const columns: ColumnDef<Info>[] = [
	{
		accessorKey: "name",
		header: "Name",
		cell: ({ row }) => {
			return (
				<div className='flex gap-2 items-center'>
					<img
						className='h-10 w-10'
						src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
							"name"
						)}`}
						alt='user-image'
					/>
					<p>{row.getValue("name")} </p>
				</div>
			)
		}
	},
	{
		accessorKey: "id",
		header: "ID"
	},
	{
		accessorKey: "joindate",
		header: "Join Date"
	},
	{
		accessorKey: "platform",
		header: "Platform"
	}
]

const data: Info[] = [
	{
		name: "xvalegendary",
		id: "1238129012",
		joindate: "2023-01-01",
		platform: "PC"
	},
  {
		name: "xvalegendary",
		id: "1238129012",
		joindate: "2023-01-01",
		platform: "PC"
	},{
		name: "xvalegendary",
		id: "1238129012",
		joindate: "2023-01-01",
		platform: "PC"
	},{
		name: "xvalegendary",
		id: "1238129012",
		joindate: "2023-01-01",
		platform: "PC"
	},{
		name: "xvalegendary",
		id: "1238129012",
		joindate: "2023-01-01",
		platform: "PC"
	},{
		name: "xvalegendary",
		id: "1238129012",
		joindate: "2023-01-01",
		platform: "PC"
	},{
		name: "xvalegendary",
		id: "1238129012",
		joindate: "2023-01-01",
		platform: "PC"
	},{
		name: "xvalegendary",
		id: "1238129012",
		joindate: "2023-01-01",
		platform: "PC"
	},{
		name: "xvalegendary",
		id: "1238129012",
		joindate: "2023-01-01",
		platform: "PC"
	},{
		name: "xvalegendary",
		id: "1238129012",
		joindate: "2023-01-01",
		platform: "PC"
	},{
		name: "xvalegendary",
		id: "1238129012",
		joindate: "2023-01-01",
		platform: "PC"
	},{
		name: "xvalegendary",
		id: "1238129012",
		joindate: "2023-01-01",
		platform: "PC"
	},{
		name: "xvalegendary",
		id: "1238129012",
		joindate: "2023-01-01",
		platform: "PC"
	},
]

export default function UsersPage({}: Props) {
	return (
		<>
			<ContentLayout title='Users'>
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
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage>Users</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</ContentLayout>
			<div className='to-black flex flex-col gap-5 w-[100vh] justify-center mx-auto'>
				<DataTable columns={columns} data={data} />
			</div>
		</>
	)
}
