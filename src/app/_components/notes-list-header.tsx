import { Button } from '@nextui-org/react'
import { Menu, PenBox } from 'lucide-react'
import React from 'react'

const NotesListHeader = () => {
  return (
    <header className="sm:flex sm:justify-between border-b">
      <div className="relative px-4 sm:px-6 lg:px-4 flex h-16 items-center justify-between w-full">
        <div className="flex items-center w-full justify-between">        
          <div className="flex">
            <Button isIconOnly variant="light"><Menu /></Button>
          </div>
          <div>
            All Notes
          </div>
          <div>
            <Button isIconOnly variant="light"><PenBox /></Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NotesListHeader