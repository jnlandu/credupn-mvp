'use server'

import { redirect } from 'next/navigation'

export async function submitPaper(formData: FormData) {
  const title = formData.get('title') as string
  const abstract = formData.get('abstract') as string
  const file = formData.get('file') as File

  // Here you would typically save the paper details to your database
  // and handle the file upload to a secure storage solution

  // For demonstration purposes, we'll just log the submission details
  console.log('Paper submitted:', { title, abstract, fileName: file.name })

  // Redirect to a success page
  redirect('/submit/success')
}

