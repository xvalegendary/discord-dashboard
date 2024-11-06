import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function RecentSales() {
  const userData = [
		{
			name: "ZhoskiyParen",
			id: "1293928442",
			image: "/avatars/01.png",
			date: "2024-06-01"
		},
		{
			name: "xvalegendary",
			id: "2392948292",
			image: "/avatars/02.png",
			date: "2024-09-28"
		},
		{
			name: "Ivan_kem_twink",
			id: "12011947402",
			image: "/avatars/03.png",
			date: "2024-10-12"
		},
		{
			name: "ParenZhoskiy",
			id: "12034324224",
			image: "/avatars/03.png",
			date: "2023-07-20"
		},
		{
			name: "Paladin_vic",
			id: "19909092781",
			image: "/avatars/03.png",
			date: "2023-07-20"
		},
		{
			name: "Paladin_vic",
			id: "19909092781",
			image: "/avatars/03.png",
			date: "2023-07-20"
		}
	]

  return (
    <div id='main-cards-dashboard' className='space-y-8 pt-0'>
      {userData.map((user) => (
        <div key={user.id} className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Avatar className='h-9 w-9'>
              <AvatarImage src={user.image} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className='ml-4 space-y-1'>
              <p className='text-sm font-medium leading-none'>{user.name}</p>
              <p className='text-sm text-muted-foreground'>{user.id}</p>
            </div>
          </div>
          <p className='text-sm text-muted-foreground ml-auto'>{user.date}</p>
        </div>
      ))}
    </div>
  )
}