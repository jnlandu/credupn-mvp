import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 text-blue-800">Bienvenue au Centre de Recherche CREDUPN</h1>
        <p className="text-xl mb-8 text-gray-600">
          Rationalisation du processus de soumission, d'examen et de publication des articles académiques.
        </p>
        <Image
          src="https://images.unsplash.com/photo-1532619187608-e5375cab36aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
          alt="Bibliothèque universitaire avec des étudiants travaillant sur des ordinateurs portables"
          width={1200}
          height={600}
          className="rounded-lg shadow-lg mx-auto"
        />
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            <Image
              src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
              alt="Chercheur rédigeant un article scientifique"
              width={400}
              height={300}
              className="rounded-lg mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Soumettez Votre Article</h2>
            <p className="mb-4 text-gray-600">Téléchargez votre recherche pour examen et publication potentielle.</p>
            <Link href="/submit"><Button className="w-full bg-blue-600 hover:bg-blue-700">Soumettre Maintenant</Button></Link>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
              alt="Chercheurs discutant d'un article scientifique"
              width={400}
              height={300}
              className="rounded-lg mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Examinez les Articles</h2>
            <p className="mb-4 text-gray-600">Connectez-vous pour évaluer les soumissions et fournir des commentaires.</p>
            <Link href="/review"><Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">Tableau de Bord d'Examen</Button></Link>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            <Image
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
              alt="Bibliothèque numérique avec des articles scientifiques"
              width={400}
              height={300}
              className="rounded-lg mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Parcourez les Publications</h2>
            <p className="mb-4 text-gray-600">Explorez notre collection d'articles approuvés et publiés.</p>
            <Link href="/publications"><Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">Voir les Publications</Button></Link>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Témoignages</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                alt="Dr. Sophie Dubois"
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4"
              />
              <p className="italic mb-4 text-gray-600">"CREDUPN a considérablement simplifié mon processus de publication. Leur plateforme est intuitive et efficace."</p>
              <p className="font-semibold text-blue-700">- Dr. Sophie Dubois, Université de Paris</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <Image
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                alt="Prof. Jean-Pierre Lefebvre"
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4"
              />
              <p className="italic mb-4 text-gray-600">"En tant que réviseur, j'apprécie la facilité avec laquelle je peux examiner les articles et fournir des commentaires via CREDUPN."</p>
              <p className="font-semibold text-blue-700">- Prof. Jean-Pierre Lefebvre, École Polytechnique</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-800">Prêt à Commencer?</h2>
        <p className="text-xl mb-8 text-gray-600">Rejoignez notre communauté de chercheurs et contribuez à l'avancement de la connaissance.</p>
        <Link href="/register">
          <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
            Inscrivez-vous Maintenant
          </Button>
        </Link>
      </section>
    </div>
  )
}

