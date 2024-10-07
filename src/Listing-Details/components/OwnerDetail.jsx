import { Button } from '@/components/ui/button'
import Service from '@/Shared/Service';
import { useUser } from '@clerk/clerk-react'
import React from 'react'

function OwnerDetail({carDetail}) {
  const {user}=useUser();
  const OnMessageOwnerButtonClick=async()=>{
    // Create Current User Id
    try {
      const userId=user?.primaryEmailAddress.emailAddress.split('@')[0];
      await Service.CreateSendBirdUser(userId,user?.fullName,user?.imageUrl)
      .then(resp=>{
        console.log(resp);
      })
    } catch (e) {
      
    }
    // Owner user Id 

    // Create Channel
  }
  return (
    <div className='p-10 border shadow-md rounded-xl mt-6 '>
        <h2 className='font-medium text-2xl mb-3'>Owner Details</h2>
        <img src={carDetail?.userImageUrl} className='w-[80px] h-[80px] rounded-full' />
        <h2 className='mt-2 text-xl font-bold'>{carDetail?.userName}</h2>
        <h2 className='text-gray-500'>{carDetail?.createBy}</h2>
        <Button className='w-full mt-6'
        onClick={OnMessageOwnerButtonClick}
        >Message Owner</Button>
    </div>
  )
}

export default OwnerDetail
