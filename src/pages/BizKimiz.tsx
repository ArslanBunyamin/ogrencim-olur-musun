import { BizKimizComponent } from '@/components/biz-kimiz'
import React from 'react'

type Props = {}

const BizKimiz = (props: Props) => {
  return (
    <div className="min-h-screen bg-base-200 lg:px-64">
        <BizKimizComponent />
    </div>
  )
}

export default BizKimiz