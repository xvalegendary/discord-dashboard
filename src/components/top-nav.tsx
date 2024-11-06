import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from './custom/button'
import { IconMenu } from '@tabler/icons-react'

interface TopNavProps extends React.HTMLAttributes<HTMLElement> {
  links: {
    title: string
    href: string
    isActive: boolean
  }[]
}

export function TopNav({ className, links, ...props }: TopNavProps) {
  return (
    <>
      <nav>
        <h1>atlanta.dev -> main.tsx -> users</h1>
      </nav>
    </>
  )
}
