import { lazy } from "react"
import { createRootRoute, Link, Outlet } from "@tanstack/react-router"

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        })),
      )

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex gap-2 p-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/badges" className="[&.active]:font-bold">
          Badges
        </Link>
        <Link to="/buttons" className="[&.active]:font-bold">
          Buttons
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
