import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2 text-white">
      <h3>Welcome ITV!</h3>
    </div>
  )
}