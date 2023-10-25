import React from 'react'
import { Bell, Home, Settings, Trash } from 'lucide-react'
import Link from 'next/link'


const routes = [
  { href: `/`, label: `All Notes`, icon: <Home /> },
  { href: `/`, label: `Notifications`, icon: <Bell /> },
  { href: `/`, label: `Settings`, icon: <Settings /> },
  { href: `/`, label: `Trash`, icon: <Trash /> },
]

const SideMenu = () => {
  return (
    <div className="flex flex-col">

      <header className="sm:flex sm:justify-between border-b">
        <div className="relative px-4 sm:px-6 lg:px-4 flex h-16 items-center justify-between w-full">
          <div className="flex items-center w-full justify-between">        
            <h1 className="text-xl font-bold"><span className="text-blue-500">Note</span>ly</h1>
          </div>
        </div>
      </header>

      <div className="px-4 sm:px-6 lg:px-4 pt-4 w-full">
        { routes.map((route) => (
          <Link key={route.label} href={route.href} className="flex items-center gap-2 mb-2 text-lg bg-gray-500 p-2 rounded-lg">
            <div>{ route.icon }</div>
            <div>{ route.label }</div>
          </Link> 
        ))}
      </div>

    </div>
  )
}

export default SideMenu