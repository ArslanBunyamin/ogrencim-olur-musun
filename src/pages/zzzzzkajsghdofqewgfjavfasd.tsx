import { EmployeeFormComponent } from '@/components/employee-form'
import React from 'react'

type Props = {}

const TemporaryFormPage = (props: Props) => {
  return (
    <div className='h-screen w-full px-2 py-20'>
      <div className='text-center text-3xl pb-5 font-mono'>Bilgilerini Doldurdugun Icin Tesekkurler :)</div>
        <EmployeeFormComponent />
    </div>
  )
}

export default TemporaryFormPage