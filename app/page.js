import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <h1 className="text-6xl">Welcom to admin web</h1>
        <Link href="admin">Go to side</Link>
      </div>
    </>
  )
}
