import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">À Propos de CREDUPN</h3>
            <p className="text-blue-200">CREDUPN est dédié à l'avancement de la recherche académique à travers une plateforme innovante de soumission et de publication.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link href="/submit" className="text-blue-200 hover:text-white">Soumettre un Article</Link></li>
              <li><Link href="/review" className="text-blue-200 hover:text-white">Examiner</Link></li>
              <li><Link href="/publications" className="text-blue-200 hover:text-white">Publications</Link></li>
              <li><Link href="/contact" className="text-blue-200 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contactez-nous</h3>
            <p className="text-blue-200">Email: credupn@upn.ac.cd</p>
            <p className="text-blue-200">Téléphone: +243 81 23 45 67 89</p>
            <p className="text-blue-200">Adresse: Camppus UPN, Kinshasa, RD Congo</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-700 text-center">
          <p>&copy; 2025 CREDUPN. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

