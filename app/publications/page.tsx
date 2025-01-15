import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

// This data would typically come from your database
const publications = [
  { id: 1, title: "The Impact of AI on Modern Society", author: "Dr. Jane Smith", abstract: "This paper explores the various ways in which artificial intelligence is shaping our world..." },
  { id: 2, title: "Advancements in Quantum Computing", author: "Dr. Alice Johnson", abstract: "A comprehensive look at the latest breakthroughs in quantum computing and their potential applications..." },
]

export default function Publications() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Published Papers</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {publications.map((pub) => (
          <Card key={pub.id}>
            <CardHeader>
              <CardTitle>{pub.title}</CardTitle>
              <CardDescription>{pub.author}</CardDescription>
            </CardHeader>
            <div className="p-6">
              <p className="mb-4">{pub.abstract}</p>
              <Link href={`/publications/${pub.id}`} className="text-blue-500 hover:underline">
                Read Full Paper
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

