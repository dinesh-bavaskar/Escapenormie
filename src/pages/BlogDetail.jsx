import { useParams } from "react-router-dom"

export default function BlogDetail() {
  const { id } = useParams()

  return (
    <div className="min-h-screen px-10 py-20">
      <h1 className="text-4xl font-bold mb-4">Blog #{id}</h1>
      <p className="text-gray-600">
        Blog detail content will be managed from admin panel.
      </p>
    </div>
  )
}
