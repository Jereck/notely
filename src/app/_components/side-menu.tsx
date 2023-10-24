import React from 'react'
import { Home, MenuSquare, Heart, Settings } from 'lucide-react'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

const SideMenu = () => {
  return (
    <div className="flex flex-col border p-4 rounded-full bottom-1/3 left-5 fixed">
      <Link href="/"><Button isIconOnly variant="light"><Home /></Button></Link>
      <Link href="/"><Button isIconOnly variant="light"><MenuSquare /></Button></Link>
      <Link href="/"><Button isIconOnly variant="light"><Heart /></Button></Link>
      <Link href="/"><Button isIconOnly variant="light"><Settings /></Button></Link>
    </div>
  )
}

export default SideMenu