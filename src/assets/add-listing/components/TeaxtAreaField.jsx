import React from 'react'
import { Textarea } from "@/components/ui/textarea"

function TeaxtAreaField({item,handleInputChage}) {
  return (
    <div>
      <Textarea onChange={(e)=>handleInputChage(item.name,e.target.value)} />
    </div>
  )
}

export default TeaxtAreaField

