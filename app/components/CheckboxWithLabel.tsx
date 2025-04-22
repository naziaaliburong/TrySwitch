import React from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const CheckboxWithLabel = () => {
  return (
    <div className='flex'>
      <Checkbox/>
      <Label className='font-normal pl-3 leading-normal'>By checking this box, you agree to receive updates, news, and exclusive offers from us. You can unsubscribe at any time.</Label>
    </div>
    

  )
}

export default CheckboxWithLabel