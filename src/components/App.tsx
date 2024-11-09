import { Badge } from "./Badge/Badge"

function App() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="h-screen sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="mx-auto flex max-w-7xl justify-center px-4 sm:static sm:px-6 lg:px-8">
          <div className="grid w-fit grid-cols-3 items-center gap-4">
            <Badge label="Label" variant={"neutral"} size="sm" />
            <Badge label="Label" variant={"neutral"} size="md" />
            <Badge label="Label" variant={"neutral"} size="lg" />
            <Badge label="Label" variant={"error"} size="sm" />
            <Badge label="Label" variant={"error"} size="md" />
            <Badge label="Label" variant={"error"} size="lg" />
            <Badge label="Label" variant={"warning"} size="sm" />
            <Badge label="Label" variant={"warning"} size="md" />
            <Badge label="Label" variant={"warning"} size="lg" />
            <Badge label="Label" variant={"success"} size="sm" />
            <Badge label="Label" variant={"success"} size="md" />
            <Badge label="Label" variant={"success"} size="lg" />
            <Badge label="Label" variant={"brand"} size="sm" />
            <Badge label="Label" variant={"brand"} size="md" />
            <Badge label="Label" variant={"brand"} size="lg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
