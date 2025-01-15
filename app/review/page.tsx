import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

// This data would typically come from your database
const submissions = [
  { id: 1, title: "The Impact of AI on Modern Society", author: "Dr. Jane Smith", status: "Pending" },
  { id: 2, title: "Climate Change: A Comprehensive Analysis", author: "Prof. John Doe", status: "Under Review" },
  { id: 3, title: "Advancements in Quantum Computing", author: "Dr. Alice Johnson", status: "Approved" },
]

export default function ReviewDashboard() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Review Dashboard</h1>
      <Table>
        <TableCaption>A list of recent paper submissions</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {submissions.map((submission) => (
            <TableRow key={submission.id}>
              <TableCell>{submission.title}</TableCell>
              <TableCell>{submission.author}</TableCell>
              <TableCell>{submission.status}</TableCell>
              <TableCell>
                <Button variant="outline">Review</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

