import Loading from '@/components/common/Loading'
import React, { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return <div className='h-screen w-screen'>
    <Loading/>
  </div>
}

export default page