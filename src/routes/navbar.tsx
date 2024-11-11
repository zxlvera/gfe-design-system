import * as React from "react"
import { createFileRoute } from "@tanstack/react-router"

import Navbar from "components/Navbar/Navbar"

export const Route = createFileRoute("/navbar")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex h-screen flex-col bg-gradient-to-b from-gray-50 to-[#d2d6db]">
      <Navbar />
    </div>
  )
}
