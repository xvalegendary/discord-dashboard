'use client';

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

export const description = 'An interactive bar chart';

const chartData = [
	{ date: "2024-09-12", visitors: 222 },
	{ date: "2024-09-27", visitors: 97 },
	{ date: "2024-10-2", visitors: 167 },
	{ date: "2024-10-4", visitors: 242 },
	{ date: "2024-10-7", visitors: 373 },
	{ date: "2024-10-10", visitors: 300 },
	{ date: "2024-10-15", visitors: 180 },
	{ date: "2024-10-17", visitors: 503 },
	{ date: "2024-10-19", visitors: 360 },
	{ date: "2024-10-21", visitors: 180 },
	{ date: "2024-10-22", visitors: 250 },
	{ date: "2024-10-24", visitors: 180 },
	{ date: "2024-10-26", visitors: 200 },
	{ date: "2024-10-28", visitors: 50 }
];

const chartConfig = {
  views: {
    label: 'Page Views'
  },
  visitors: {
    label: 'Visitors',
    color: 'hsl(var(--chart-1))'
  }
} satisfies ChartConfig;

export function BarGraph() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>('visitors');

  const total = React.useMemo(
    () => ({
      visitors: chartData.reduce((acc, curr) => acc + curr.visitors, 0)
    }),
    []
  );

  return (
		<Card id='main-cards-dashboard3'>
			<CardHeader className='flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row'>
				<div className='flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6'>
					<CardTitle>Show total visitors for the last 1 month</CardTitle>
				</div>
				<div className='flex'>
					{["visitors"].map(key => {
						const chart = key as keyof typeof chartConfig;
						return (
							<button
								key={chart}
								data-active={activeChart === chart}
								className='relative flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6'
								onClick={() => setActiveChart(chart)}
							>
								<span className='text-xs text-muted-foreground'>
									{chartConfig[chart].label}
								</span>
								<span className='text-lg font-bold leading-none sm:text-3xl'>
									{total[key as keyof typeof total].toLocaleString()}
								</span>
							</button>
						);
					})}
				</div>
			</CardHeader>
			<CardContent className='px-2 sm:p-6'>
				<ChartContainer
					config={chartConfig}
					className='aspect-auto h-[280px] w-full'
				>
					<BarChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey='date'
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							minTickGap={32}
							tickFormatter={value => {
								const date = new Date(value);
								return date.toLocaleDateString("en-US", {
									month: "short",
									day: "numeric"
								});
							}}
						/>
						<ChartTooltip
							content={
								<ChartTooltipContent
									className='w-[150px]'
									nameKey='views'
									labelFormatter={value => {
										const date = new Date(value);
										return date.toLocaleDateString("en-US", {
											month: "short",
											day: "numeric",
											year: "numeric"
										});
									}}
								/>
							}
						/>
						<Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}