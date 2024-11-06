'use client';

import { TrendingUp } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

const chartData = [
  { month: 'January', visits: 266 },
  { month: 'February', visits: 505 },
  { month: 'March', visits: 357 },
  { month: 'April', visits: 263 },
  { month: 'May', visits: 339 },
  { month: 'June', visits: 354 }
];

const chartConfig = {
  visits: {
    label: 'Visits',
    color: 'hsl(var(--chart-1))'
  }
} satisfies ChartConfig;

// Создаем новый объект Date с текущей датой
const currentDate = new Date();

// Получаем месяц (0-11, поэтому добавляем 1)
const month = currentDate.getMonth() + 1;

// Получаем день (1-31)
const day = currentDate.getDate();

// Получаем год (4 цифры)
const year = currentDate.getFullYear();

// Форматируем дату в строку "месяц-день-год"
const formattedDate = `${day}.${month}.${year}`; // Например, "10-5-2023"

export function AreaGraph() {
  return (
    <Card id='main-cards-dashboard'>
      <CardHeader>
        <CardTitle>Show total visitors for the last 6 months</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className='aspect-auto h-[310px] w-full'
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={value => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator='dot' />}
            />
            <Area
              dataKey='visits'
              type='natural'
              fill='var(--color-visits)' // Убедитесь, что у вас есть соответствующий цвет
              fillOpacity={0.4}
              stroke='var(--color-visits)' // Убедитесь, что у вас есть соответствующий цвет
              stackId='a'
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className='flex w-full items-start gap-2 text-sm'>
          <div className='grid gap-2'>
            <div className='flex items-center gap-2 font-medium leading-none'>
              Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
            </div>
            <div className='flex items-center gap-2 leading-none text-muted-foreground'>
              {formattedDate}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}