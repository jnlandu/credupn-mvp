import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function SubmissionSuccess() {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Submission Successful!</h1>
      <p className="text-xl mb-8 text-gray-600">
        Thank you for submitting your paper. Our team will review it shortly.
      </p>
      <Link href="/">
        <Button className="bg-blue-600 hover:bg-blue-700">
          Return to Home
        </Button>
      </Link>
    </div>
  )
}

