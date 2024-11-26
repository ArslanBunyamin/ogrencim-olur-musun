'use client'

import { useState, useEffect } from 'react'

const DergiSayi1 = () => {
  const [isMounted, setIsMounted] = useState(false)
  const pdfUrl = 'https://online.fliphtml5.com/msayn/flzt/'

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="w-full h-screen flex items-center justify-center">Yükleniyor...</div>
  }

  return (
    <div className="w-full h-screen">
      <iframe
        src={pdfUrl}
        className="w-full h-full"
        title="Dergi Sayı 1"
        allow="autoplay"
      />
    </div>
  )
}

export default DergiSayi1

