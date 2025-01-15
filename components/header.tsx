import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-800">
          CREDUPN
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li><Link href="/submit" className="text-blue-600 hover:text-blue-800">Soumettre</Link></li>
            <li><Link href="/review" className="text-blue-600 hover:text-blue-800">Examiner</Link></li>
            <li><Link href="/publications" className="text-blue-600 hover:text-blue-800">Publications</Link></li>
            <li><Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">Se Connecter</Button></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

