'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { submitPaper } from '@/app/actions/submit-paper'

export default function SubmitPaper() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data: any) => {
    setIsSubmitting(true)
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('abstract', data.abstract)
    formData.append('file', data.file[0])
    
    await submitPaper(formData)
    setIsSubmitting(false)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Submit Your Paper</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="title" className="block mb-2">Paper Title</label>
          <Input
            id="title"
            {...register('title', { required: 'Title is required' })}
            className={errors.title ? 'border-red-500' : ''}
          />
          {errors.title && <p className="text-red-500 mt-1">{errors.title.message as string}</p>}
        </div>
        <div>
          <label htmlFor="abstract" className="block mb-2">Abstract</label>
          <Textarea
            id="abstract"
            {...register('abstract', { required: 'Abstract is required' })}
            className={errors.abstract ? 'border-red-500' : ''}
          />
          {errors.abstract && <p className="text-red-500 mt-1">{errors.abstract.message as string}</p>}
        </div>
        <div>
          <label htmlFor="file" className="block mb-2">Upload Paper (PDF)</label>
          <Input
            id="file"
            type="file"
            accept=".pdf"
            {...register('file', { required: 'File is required' })}
            className={errors.file ? 'border-red-500' : ''}
          />
          {errors.file && <p className="text-red-500 mt-1">{errors.file.message as string}</p>}
        </div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Paper'}
        </Button>
      </form>
    </div>
  )
}

