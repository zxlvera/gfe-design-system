import "tailwindcss/tailwind.css"

import { StrictMode } from "react"
import {
  createRouter,
  NotFoundRoute,
  RouterProvider,
} from "@tanstack/react-router"
import { createRoot } from "react-dom/client"

import { Route as rootRoute } from "./routes/__root"
import { routeTree } from "./routeTree.gen"

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: () => <div>Not found!!!</div>,
})

const router = createRouter({ routeTree, notFoundRoute })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById("root") as HTMLDivElement
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}
