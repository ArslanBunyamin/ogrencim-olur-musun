import Image from 'next/image'
import Link from 'next/link'
import foto from "@/res/dergiPdf/1.jpg"

export default function Dergimiz() {
  return (
    <div className="min-h-screen p-8 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-orange-600 text-center font-bold mb-12">
          Sayılarımız
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link 
            href="/dergiSayi/DergiSayi1"
            className="group bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={foto}
                alt="Kasım"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-orange-700 group-hover:text-orange-600 transition-colors duration-300">
                Sayı 1-Kasım
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

