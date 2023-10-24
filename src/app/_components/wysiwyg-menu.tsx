import { Button, Divider } from '@nextui-org/react'
import { AlignCenter, AlignLeft, AlignRight, Bold, Image, Italic, Link, Quote, Underline } from 'lucide-react'
import React from 'react'

const WysiwygMenu = () => {
  return (
    <div className="flex items-center space-x-4 border rounded-full">
      <div>
        <Button isIconOnly variant="light"><Bold /></Button>
        <Button isIconOnly variant="light"><Italic /></Button>
        <Button isIconOnly variant="light"><Underline /></Button>
      </div>
      <Divider orientation="vertical" className='text-white' />
      <div>
        <Button isIconOnly variant="light"><AlignLeft /></Button>
        <Button isIconOnly variant="light"><AlignCenter /></Button>
        <Button isIconOnly variant="light"><AlignRight /></Button>
      </div>
      <Divider orientation="vertical" className='text-white' />
      <div>
        <Button isIconOnly variant="light"><Link /></Button>
        <Button isIconOnly variant="light"><Quote /></Button>
        <Button isIconOnly variant="light"><Image /></Button>
      </div>
    </div>
  )
}

export default WysiwygMenu