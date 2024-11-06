import { DiscordLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon,
	LogInIcon
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
		{
			groupLabel: "",
			menus: [
				{
					href: "/dashboard",
					label: "Dashboard",
					active: pathname.includes("/dashboard"),
					icon: LayoutGrid,
					submenus: []
				}
			]
		},
		{
			groupLabel: "Contents",
			menus: [
				{
					href: "/posts",
					label: "Managment",
					active: pathname.includes("/posts"),
					icon: SquarePen,
					submenus: [
						{
							href: "/posts",
							label: "Managment",
							active: pathname === "/posts"
						},
						{
							href: "/posts/new",
							label: "Chat",
							active: pathname === "/posts/new"
						},
						{
							href: "/ban",
							label: "Ban Menu",
							active: pathname === "/ban"
						},
						{
							href: "/mute",
							label: "Mute Menu",
							active: pathname === "/mute"
						}
					]
				}
			]
		},
		{
			groupLabel: "Settings",
			menus: [
				{
					href: "/users",
					label: "Users",
					active: pathname.includes("/users"),
					icon: Users,
					submenus: []
				},
				{
					href: "/account",
					label: "Account",
					active: pathname.includes("/account"),
					icon: Settings,
					submenus: []
				},
				{
					href: "/login",
					label: "Login",
					active: pathname.includes("/login"),
					icon: LogInIcon,
					submenus: []
				}
			]
		}
	]
}
